<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Category::class, function (Faker $faker) {
    return [
        //'category_name' =>$faker->city(),
        'description' => $faker->text(255),

        //'icon_id' => 1,
    ];
});
