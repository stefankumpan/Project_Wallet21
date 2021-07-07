<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\Package;
use App\Models\Partner;
use App\Models\PartnerEarning;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class OrderController extends Controller
{
    /**
     * Get All Orders from user
     * @param $pagination
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($pagination)
    {
        $orders = Order::select('invoice_number', 'net_price', 'tax', 'price', 'payment_method', 'product', 'status')->getByUserId(auth()->id())->orderBy('invoice_number','DESC')->paginate($pagination);

        foreach ($orders as $item) {
            $item['product'] = json_decode($item['product']);
        }

        $data = [
            'orders' => $orders,
            'status' => 'ok'
        ];

        return response()->json($data, 200);
    }

    /**
     * Create new Order
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function create(Request $request)
    {


        $payment = $request->paymentInfo;
        $paymentMethod = $request->paymentMethod;
        $supportKey = $request->get('partner_key');


        //Validation
        if ($paymentMethod === 'debits-card') {
            $validator = Validator::make($payment, [
                'name' => 'required | string | max:100',
                'iban' => 'required | regex:/^([A-Z]{2}\d{2}(?:\d{4}){3}\d{4}(?:\d\d?)?)$/i',
            ]);
        }
        if ($paymentMethod === 'credit-card') {
            $validator = Validator::make($payment, [
                'name' => 'required | string | max:100',
                'expiryDate' => 'required | date_format:m/Y',
                'creditCard' => 'required | numeric | min: 14',
                'securityCode' => 'required | string | min:3 | max:4',
            ]);
            $today = explode('/', Carbon::now()->format('m/Y'));
            $expireCardData = explode('/', $payment['expiryDate']);
            $checkExpire = ($expireCardData[0] - $today[0]) + ($expireCardData[1] - $today[1]); // Check time Left
            if ($checkExpire < 0) {
                $data = [
                    'errors' => ['expiryDate' => [0 => 'Das Ablaufdatum ist überschritten!']],
                ];
                return response()->json($data, 422);
            }

        }
        if (count($validator->errors()) > 0) {
            $data = [
                'errors' => $validator->errors(),
            ];
            return response()->json($data, 400);
        } else {
            //Update Subscription
            $subscription = Subscription::where('user_id', auth()->id())->first();
            $package = Package::find($request->package_id);
            // Price Calculation
            $price = number_format(($package->discount_price * $package->run_time), 2);
            $net_price = number_format(($price * 0.8), 2);
            $tax = number_format(($price * 0.2), 2);

            if ($subscription->expire >= Carbon::today()->format('Y-m-d')) {
                $oldDate = str_replace('/', '-', $subscription->expire); //Bug Fix?
                $carbon = new Carbon($oldDate);
                $expireDate = $carbon->addMonths($package->run_time)->format('Y-m-d');
                $run_time = $subscription->run_time + $package->run_time;
            } else {
                $expireDate = Carbon::now()->addMonths($package->run_time)->format('Y-m-d');
                $run_time = $package->run_time;
            }
            $subscription->package_id = $package->id;
            $subscription->expire = $expireDate;
            $subscription->run_time = $run_time;
            $subscription->save();

            //Service Provider Data (SP = Service Provider)
            $DataSP = [
                'sub' => $subscription,
                'user' => auth()->user(),
                'package' => $package,
            ];


            $client = app('order')->clientOrderInfo($DataSP);
            $product = app('order')->productOrderInfo($DataSP);
//
            $last_order = Order::query()->orderBy('invoice_number','DESC')->first();
            if (is_null($last_order)) {
                $invoice_number = Carbon::today()->format('Y') . '-' . '100001';
            } else {
                $last_invoice_number = explode('-', $last_order->invoice_number);
                $new_invoive_number = $last_invoice_number[1] + 1;
                $invoice_number = Carbon::today()->format('Y') . '-' . $new_invoive_number;
            }

            unset($payment['securityCode']); // Don't Save the CVV code in Database!!

            // Create new Order
            $order = new Order();
            $order->invoice_number = $invoice_number;
            $order->client = $client;
            $order->product = $product;
            $order->payment = json_encode($payment);
            $order->payment_method = $paymentMethod;

            //Price
            $order->tax = $tax;
            $order->net_price = $net_price;
            $order->price = $price;
            //relation
            $order->user_id = auth()->id();
            $order->subscription_id = $subscription->id;
            $order->package_id = $package->id;
            //Status
            $order->status = 1;
            $order->save();
            if (!is_null($supportKey)) {
                $partner = Partner::where('key', $supportKey)->first();
                if (!empty($partner) && $partner->active === 1) {
                    $order->partner_id = $partner->id;
                    $order->partner_key = $partner->key;
                    $order->save();
                    PartnerEarning::create([
                        'partner_id' => $partner->id,
                        'order_id' => $order->id,
                        'order_invoice_number' => $invoice_number,
                        'revenue' => ($price / 100) * $partner->share
                    ]);
                }
            }
            $data = [
                'infoMsg' => 'Bestellung Erfolgreich',
                'status' => 'ok'
            ];

            return response()->json($data, 200);

        }
    }
}
