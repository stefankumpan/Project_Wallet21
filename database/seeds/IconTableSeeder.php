<?php

use App\Models\Icon;
use Illuminate\Database\Seeder;

class IconTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $icons = array(
            'wallet' => [
                'name' => 'wallet',
                'path' => 'images/icons/wallet.svg'
            ],
            'card' => [
                'name' => 'card',
                'path' => 'images/icons/card.svg'
            ],
            'ball' => [
                'name' => 'ball',
                'path' => 'images/icons/ball.svg'
            ],
            'basketball' => [
                'name' => 'basketball',
                'path' => 'images/icons/basketball.svg'
            ],
            'beer' => [
                'name' => 'beer',
                'path' => 'images/icons/beer.svg'
            ],
            'bike' => [
                'name' => 'bike',
                'path' => 'images/icons/bike.svg'
            ],
            'bookmark' => [
                'name' => 'bookmark',
                'path' => 'images/icons/bookmark.svg'
            ],
            'camera' => [
                'name' => 'camera',
                'path' => 'images/icons/camera.svg'
            ],
            'cinema' => [
                'name' => 'cinema',
                'path' => 'images/icons/cinema.svg'
            ],
            'computer' => [
                'name' => 'computer',
                'path' => 'images/icons/computer.svg'
            ],
            'console' => [
                'name' => 'console',
                'path' => 'images/icons/console.svg'
            ],
            'food' => [
                'name' => 'food',
                'path' => 'images/icons/food.svg'
            ],
            'gym' => [
                'name' => 'gym',
                'path' => 'images/icons/gym.svg'
            ],
            'helmet' => [
                'name' => 'helmet',
                'path' => 'images/icons/helmet.svg'
            ],
            'home' => [
                'name' => 'home',
                'path' => 'images/icons/home.svg'
            ],
            'hotel' => [
                'name' => 'hotel',
                'path' => 'images/icons/hotel.svg'
            ],
            'mechanic' => [
                'name' => 'mechanic',
                'path' => 'images/icons/mechanic.svg'
            ],
            'musical-note' => [
                'name' => 'musical-note',
                'path' => 'images/icons/musical-note.svg'
            ],
            'phone' => [
                'name' => 'phone',
                'path' => 'images/icons/phone.svg'
            ],
            'ping-pong' => [
                'name' => 'ping-pong',
                'path' => 'images/icons/ping-pong.svg'
            ],
            'shopping-bag' => [
                'name' => 'shopping-bag',
                'path' => 'images/icons/shopping-bag.svg'
            ],
            'star' => [
                'name' => 'star',
                'path' => 'images/icons/star.svg'
            ],
            'sun-umbrella' => [
                'name' => 'sun-umbrella',
                'path' => 'images/icons/sun-umbrella.svg'
            ],
            'travel' => [
                'name' => 'travel',
                'path' => 'images/icons/travel.svg'
            ],
            'dog' => [
                'name' => 'dog',
                'path' => 'images/icons/dog.svg'
            ],
        );


        foreach ($icons as $icon) {
            factory(Icon::class)->create(['name' => $icon['name'], 'path' => $icon['path']]);
        }

    }
}
