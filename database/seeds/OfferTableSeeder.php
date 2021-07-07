<?php

use App\Models\Package;
use Illuminate\Database\Seeder;

class OfferTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        $package = array(
            'Kostenlos' => [
                'name' => 'Kostenlos',
                'price' => 0,
                'discount' => 0,
                'run_time' => 0,
                'order' => 0,
                'info' => [
                    1 => 'Konten Erstellen',
                    2 => 'Kategories Erstellen',
                    3 => 'Buchungen Erstellen',
                    4 => 'Sparkonto Erstellen',
                    5 => 'E-Mail Support',
                ]
            ],
            '1 Monat' => [
                'name' => '1-Monats-Paket',
                'price' => 2.99,
                'discount' => 2.99,
                'run_time' => 1,
                'order' => 1,
                'info' => [
                    1 => 'Konten Erstellen',
                    2 => 'Kategories Erstellen',
                    3 => 'Buchungen Erstellen',
                    4 => 'Sparkonto Erstellen',
                    5 => 'E-Mail Support',
                    6 => 'Live Support',
                    7 => 'Keine Werbung']
            ],
            '1 Jahr' => [
                'name' => '1-Jahres-Paket',
                'price' => 2.99,
                'discount' => 1.99,
                'run_time' => 12,
                'order' => 2,
                'info' => [
                    1 => 'Konten Erstellen',
                    2 => 'Kategories Erstellen',
                    3 => 'Buchungen Erstellen',
                    4 => 'Sparkonto Erstellen',
                    5 => 'E-Mail Support',
                    6 => 'Live Support',
                    7 => 'Keine Werbung']
            ],
            '3 Jahr' => [
                'name' => '3-Jahres-Paket',
                'price' => 2.99,
                'discount' => 1.49,
                'run_time' => 36,
                'order' => 3,
                'info' => [
                    1 => 'Konten Erstellen',
                    2 => 'Kategories Erstellen',
                    3 => 'Buchungen Erstellen',
                    4 => 'Sparkonto Erstellen',
                    5 => 'E-Mail Support',
                    6 => 'Live Support',
                    7 => 'Keine Werbung']
            ],
        );

        foreach ($package as $singlePackage) {
            factory(Package::class)->create([
                'name' => $singlePackage['name'],
                'price' => $singlePackage['price'],
                'run_time' => $singlePackage['run_time'],
                'numbering' => $singlePackage['order'],
                'discount_price' => $singlePackage['discount'],
                'info' => json_encode($singlePackage['info']),
            ]);
        }

    }
}
