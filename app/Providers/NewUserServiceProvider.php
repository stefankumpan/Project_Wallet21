<?php

namespace App\Providers;

use App\Services\NewUser\NewUser;
use Illuminate\Support\ServiceProvider;

class NewUserServiceProvider extends ServiceProvider
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
        $this->app->singleton('newUser', function() {
            return new NewUser();
        });
    }
    public function provides()
    {
        return ['default.account'];
    }
}
