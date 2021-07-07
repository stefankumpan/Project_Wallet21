<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Passbook::class, function (Faker $faker) {
    return [
        //

        'description' => $faker->text(130),
        'current_status' => $faker->randomFloat(2,50,170.00),
        'savings_target' => $faker->randomFloat(2,200,400.00),
    ];
});
