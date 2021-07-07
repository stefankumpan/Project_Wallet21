<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(IconTableSeeder::class);
        $this->call(AccountTableSeeder::class);
        $this->call(OfferTableSeeder::class);
        $this->call(PartnerAndOrderTableSeeder::class);
    }
}
