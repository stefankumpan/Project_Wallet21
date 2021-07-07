<?php

namespace App\Providers;

use App\Services\Calculation\Calculation;
use Illuminate\Support\ServiceProvider;

class CalculationServiceProvider extends ServiceProvider
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
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton('calculation', function() {
            return new Calculation();
        });
    }

    public function provides()
    {
        return ['calculation'];
    }
}
