<?php

use Faker\Generator as Faker;



$factory->define(App\Models\BookingRecord::class, function (Faker $faker) {

    return [
        'name' => $faker->city,
        'description' => $faker->text(150),
        'date' => $faker->dateTimeBetween('-1 year','now'),
    ];
});
