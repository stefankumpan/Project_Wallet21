<?php

use App\Models\Order;
use App\Models\Package;
use App\Models\Partner;
use App\Models\PartnerEarning;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class PartnerAndOrderTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $partners = Partner::all();
        $users = User::query()->get();
//        $packages = Package::query()->where('price','>',0)->get();
        $package[1] = Package::find(3);
        $package[2] = Package::find(4);
        $payments = [
            0 => [
                "name" => "hello",
                "creditCard" => "4969579914022664",
                "expiryDate" => "11/2019",
                "iban" => null,
            ],
            1 => [
                "name" => "hello",
                "creditCard" => null,
                "expiryDate" => null,
                "iban" => 'AT411100000237571500',
            ]
        ];

       //Rechnungs Nummer Start
        $lastBill = 100000;

        foreach (range(1, 100) as $x) {
            $nx = $lastBill+1;
            $lastBill = $nx;
            $invoice_number = '2019-' . $nx  ;


            $UX = rand(0, (count($users) - 1));
            $user = $users[$UX];
            //Random Payment
            $payment = [
                "name" => "hello",
                "creditCard" => "4969579914022664",
                "expiryDate" => "11/2019",
                "iban" => null,
            ];
            $paymentMethod = 'credit-card';

            //random Partner
            $partnerX = rand(0, (count($partners) - 1));
            $partner = $partners[$partnerX];

            $client = [
                'name' => $user->name,
                'email' => $user->email,
            ];
            $rndPackage = random_int(1,2);
            $price = $package[$rndPackage]->discount_price * $package[$rndPackage]->run_time;


            $product = [
                "name" => $package[$rndPackage]->name,
                "description" => [
                    "1" => "Konten Erstellen",
                    "2" => "Kategories Erstellen",
                    "3" => "Buchungen Erstellen",
                    "4" => "Sparkonto Erstellen",
                    "5" => "E-Mail Support",
                    "6" => "Live Support",
                    "7" => "Keine Werbung"],
                "run_time" => $package[$rndPackage]->run_time,
                "price" => $price * 0.8,
                "tax" => $price * 0.2,
                "total" => $price
            ];


            factory(Order::class)->create([
                'invoice_number' => $invoice_number,
                'client' => json_encode($client),
                'product' => json_encode($product),
                'payment' => json_encode($payment),
                'payment_method' => $paymentMethod,
                'tax' => $price * 0.2,
                'net_price' => $price * 0.8,
                'price' => $price,
                'user_id' => $user->id,
                'subscription_id' => $user->id,
                'package_id' => $package[$rndPackage]->id,
                'partner_id' => $partner->id,
                'partner_key' => $partner->key,
                'status' => 1,
            ]);

            $CreatedOrder = Order::query()->latest()->first();
            factory(PartnerEarning::class)->create([
                'partner_id' => $partner->id,
                'order_id' => $CreatedOrder->id,
                'order_invoice_number' => $invoice_number,
                'revenue' => ($price / 100) * $partner->share
            ]);


        }


    }
}
