<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Order;
use App\Models\Subscription;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;


class OrderController extends Controller
{
    public function search($pagination, $search)
    {
//        if ($search === '' || $search = null) {
//            $this->index();
//        } else {
        $orders = Order::query()->search($search)->orderBy('invoice_number', 'DESC')->paginate($pagination);
        foreach ($orders as $order) {
            $order['client'] = json_decode($order['client']);
            $order['product'] = json_decode($order['product']);
            $order['payment'] = json_decode($order['payment']);
        }
        $data = ['orders' => $orders, 'stats' => 'ok'];
        return response()->json($data, 200);
//        }
    }

    /**
     * Get all Orders
     * @param $pagination
     * @return \Illuminate\Http\JsonResponse1
     */
    public function index($pagination)
    {
        $orders = Order::query()->orderBy('invoice_number', 'DESC')->paginate($pagination);
        foreach ($orders as $order) {
            $order['client'] = json_decode($order['client']);
            $order['product'] = json_decode($order['product']);
            $order['payment'] = json_decode($order['payment']);
        }
        $data = [
            'orders' => $orders,
            'stats' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * Update Order
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Request $request)
    {

        $client = json_encode($request->get('client'));
        $product = json_encode($request->get('product'));
        $payment = $request->get('payment');
        $paymentMethod = $request->get('payment_method');
        if ($paymentMethod === 'debits-card') {
            $validator = Validator::make($payment, [
                '*name' => 'required | string | max:100',
                '*iban' => 'required | regex:/^([A-Z]{2}\d{2}(?:\d{4}){3}\d{4}(?:\d\d?)?)$/i',
            ]);

        }
        if ($paymentMethod === 'credit-card') {
            $validator = Validator::make($payment, [
                '*name' => 'required | string | max:100',
                '*expiryDate' => 'required | date_format:m/Y',
                '*creditCard' => 'required | numeric | min: 14',
            ]);

        }
        if (count($validator->errors()) > 0) {
            $data = ['errors' => $validator->errors(),];
            return response()->json($data, 400);
        }


        $price = number_format($request->get('price'), 2);
        $net_price = number_format(($price * 0.8), 2);
        $tax = number_format(($price * 0.2), 2);


        $run_time = $request->product['run_time'];
        $order = Order::find($request->id);
//        $order->invoice_number = $invoice_number = $request->get('invoice_number');
        $order->client = $client;
        $order->product = $product;
        //Price
        $order->tax = $tax;
        $order->net_price = $net_price;
        $order->price = $price;
        $order->package_id = $request->get('package_id');
        $order->partner_id = $request->get('partner_id');
        $order->partner_key = $request->get('partner_key');
        $order->status = $request->get('status');

        $order->save();


        $sub = Subscription::find($order->subscription_id);
        $sub->user_id = $order->user_id;
        $sub->package_id = $order->package_id;
        if ($order->status === 0) {
            $sub->run_time = $sub->run_time - $run_time;
            $carbon = new Carbon($sub->expire);
            $sub->expire = $carbon->subMonths($run_time)->format('Y-m-d');
        }
        $sub->save();


        $data = [
            'infoMsg' => 'Bestellung aktualisiert',
            'stats' => 'ok'
        ];

        return response()->json($data, 200);
    }

}
