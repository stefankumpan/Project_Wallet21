<?php

/* @var $factory \Illuminate\Database\Eloquent\Factory */

use App\Models\PartnerEarning;
use Faker\Generator as Faker;

$factory->define(PartnerEarning::class, function (Faker $faker) {
    return [
        'created_at' => $faker->dateTimeBetween('-1 month','now'),
    ];
});
