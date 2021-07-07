<?php


namespace App\Services\Order;


class Order
{

    public function clientOrderInfo($data)
    {

        $client = [
            'name' => $data['user']->name,
            'email' => $data['user']->email,
        ];
        return json_encode($client);
    }

    public function productOrderInfo($data)
    {

        $package = $data['package'];

        $product = [
            'name' => $package->name,
            'description' => json_decode($package->info),
            'run_time' => $package->run_time,
            'price' => $package->discount_price,
            'tax' =>  ($package->discount_price * $package->run_time)/2,
            'total' => $package->discount_price * $package->run_time,
        ];
        return json_encode($product);
    }



}
