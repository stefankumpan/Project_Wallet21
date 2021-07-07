<?php

use App\Models\Account;
use App\Models\BookingRecord;
use App\Models\Category;
use App\Models\Icon;
use App\Models\Partner;
use App\Models\Passbook;
use App\Models\Role;
use App\Models\Subscription;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Seeder;

class AccountTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $defaultRole = [
            'user',
            'partner',
            'admin',
        ];
        $defaultCategories = [
            'wallet' => [
                'name' => 'wallet',
                'icon' => 1
            ],
            'Bank' => [
                'name' => 'Bank',
                'icon' => 2
            ], 'Handy' => [
                'name' => 'Handy',
                'icon' => 19
            ],
            'Wohnung' => [
                'name' => 'Wohnung',
                'icon' => 15
            ],
            'Reisen' => [
                'name' => 'Reisen',
                'icon' => 24
            ],
            'Sport' => [
                'name' => 'Sport',
                'icon' => 6
            ],

        ];
        $Sparziele = [
            1 => 'Urlaub San Diego',
            2 => 'Lamborghini Gallardo'
        ];

        $bks = [
            1 => 1200.00,
            2 => 249.99,
            3 => 24.99,
            4 => 19.99,
            5 => 13.37,
            6 => 12.10,
        ];

        $defaultUsers = array(
            'admin' => [
                'name' => 'Stefan K.',
                'email' => 'admin@example.com',
                'role_id' => 3
            ],
            'user' => [
                'name' => 'Lisa Melina',
                'email' => 'user@example.com',
                'role_id' => 1
            ], 'partner' => [
                'name' => 'Severin Rogger',
                'email' => 'partner@example.com',
                'role_id' => 2,
                'key'=> 'AllesRogger',
            ],'user2' => [
                'name' => 'Alex Bauer',
                'email' => 'alex.Bauer@example.com',
                'role_id' => 1
            ], 'user3' => [
                'name' => 'David Hargrove',
                'email' => 'Hargrove@example.com',
                'role_id' => 1
            ], 'user4' => [
                'name' => 'Karen Parks',
                'email' => 'Parks@example.com',
                'role_id' => 1
            ], 'user5' => [
                'name' => 'Martin Busch',
                'email' => 'Buschr@example.com',
                'role_id' => 1
            ], 'user6' => [
                'name' => 'Marina Schultheiss',
                'email' => 'Schultheiss@example.com',
                'role_id' => 2,
                'key' => 'Marina'
            ], 'user7' => [
                'name' => 'Stefan Wannemaker',
                'email' => 'Wannemaker@example.com',
                'role_id' => 1
            ], 'user8' => [
                'name' => 'Sandra Wulf',
                'email' => 'Wulf@example.com',
                'role_id' => 2,
                'key' => 'Wulf',
            ], 'user9' => [
                'name' => 'Dirk Eberhardt',
                'email' => 'Eberhardt@example.com',
                'role_id' => 1
            ], 'user10' => [
                'name' => 'Petra Himmel',
                'email' => 'Himmel@example.com',
                'role_id' => 1
            ], 'user11' => [
                'name' => 'Lucas Fleischer',
                'email' => 'Fleischer@example.com',
                'role_id' => 1
            ], 'user12' => [
                'name' => 'Patrick  Brainsystems',
                'email' => 'brainsystems@example.com',
                'role_id' => 1
            ],
        );

        $freePackageExpire = Carbon::today()->addMonths(1)->format('Y-m-d');

        foreach ($defaultRole as $singleRole) {
            factory(Role::class)->create([
                'name' => $singleRole,
            ]);
        }

        foreach ($defaultUsers as $singleUser) {
            factory(User::class)->create([
                'name' => $singleUser['name'],
                'email' => $singleUser['email'],
                'role_id' => $singleUser['role_id'],
            ]);
            $user = User::query()->where('email', $singleUser['email'])->first();

            foreach (range(1, 2) as $x) {
                factory(Account::class)->create(['user_id' => $user->id,]);
            }
            $account = Account::query()->where('user_id', $user->id)->get();


            foreach ($defaultCategories as $singleCategory) {
                factory(Category::class)->create(['icon_id' => $singleCategory['icon'], 'account_id' => $account->random()->id, 'name' => $singleCategory['name'],]);
            }

            $category = Category::query()->orderBy('id', 'desc')->take(6)->get();
            foreach (range(1, 50) as $x) {
                $number = rand(1, 6);
                factory(BookingRecord::class)->create([
                    'category_id' => $category->random()->id,
                    'revenue' => $bks[$number],
                    'tax' => 20,
                    'tax_amount' => ($bks[$number] * 20) / 100,
                    'image' => 'images/booking-records/rechnungsmuster.jpg',
                ]);
            }
            foreach (range(1, 50) as $x) {
                $number = rand(1, 6);
                factory(BookingRecord::class)->create([
                    'category_id' => $category->random()->id,
                    'expenditure' => $bks[$number],
                    'tax' => 20,
                    'tax_amount' => ($bks[$number] * 20) / 100,
                    'image' => 'images/booking-records/rechnungsmuster.jpg',
                ]);
            }


            foreach (range(1, 2) as $x) {
                factory(Passbook::class)->create(['user_id' => $user->id, 'name' => $Sparziele[$x]]);
            }

            //subscription
            factory(Subscription::class)->create([
                'user_id' => $user->id,
                'package_id' => 2,
                'run_time' => 1,
                'expire' => $freePackageExpire,
            ]);

            if($singleUser['role_id'] === 2){
                factory(Partner::class)->create([
                    'user_id' => $user->id,
                    'email' => $user->email,
                    'name' => $user->name,
                    'key' => $singleUser['key'],
                    'share' => 10,
                    'active' => 1,
                ]);
            }


        }
    }
}
