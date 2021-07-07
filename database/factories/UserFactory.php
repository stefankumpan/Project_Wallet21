<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Support\Str;
use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(User::class, function (Faker $faker) {
    return [
        'email_verified_at' => now(),
        'password' => bcrypt('password'), // password
//        'remember_token' => Str::random(10),
        'token' => Str::random(60),
        'expire_token' => Carbon::now()->addDay(1),
    ];
});
/*
 *        $table->string('user_uid')->unique();
            $table->string('token')->unique();
            $table->timestamp('expire_token');
 * */
