<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Account::class, function (Faker $faker) {
    return [
        'name' => $faker->firstName(),
        'description' => $faker->text(150),
    ];
});
