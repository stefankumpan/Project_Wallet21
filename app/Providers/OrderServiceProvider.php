<?php

namespace App\Providers;


use App\Services\Order\Order;
use Illuminate\Support\ServiceProvider;

class OrderServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Order Service Provider
     */
    public function boot()
    {
        $this->app->singleton('order', function() {
            return new Order();
        });
    }
}
