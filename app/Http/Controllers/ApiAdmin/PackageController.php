<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Package;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PackageController extends Controller
{
    public function index($pagination)
    {
        $packages = Package::query()->orderBy('numbering','ASC')->paginate($pagination);

        foreach ($packages as $item) {
            $item['info'] = json_decode($item['info']);
        }

        $data = [
            'packages' => $packages,
            'stats' => 'ok'
        ];
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'price' => ['required', 'numeric'],
            'discount_price' => ['required', 'numeric'],
            'run_time' => ['required', 'numeric'],
        ]);

        $package = new Package();
        $package->name = $request->name;
        $package->info = json_encode($request->info);
        $package->run_time = $request->run_time;
        $package->price = $request->price;
        $package->discount_price = $request->discount_price;
        $package->numbering = $request->numbering;
        $package->save();
        $data = [
            'infoMsg' => 'Paket aktualisiert',
            'stats' => 'ok'
        ];
        return response()->json($data, 200);


    }

    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'price' => ['required', 'numeric'],
            'discount_price' => ['required', 'numeric'],
            'run_time' => ['required', 'numeric'],
        ]);

        $package = Package::find($request->id);
        $package->name = $request->name;
        $package->info = json_encode($request->info);
        $package->run_time = $request->run_time;
        $package->price = $request->price;
        $package->discount_price = $request->discount_price;
        $package->numbering = $request->numbering;
        $package->save();
        $data = [
            'infoMsg' => 'Paket aktualisiert',
            'stats' => 'ok'
        ];
        return response()->json($data, 200);


    }public function destroy(Request $request)
    {
        $package = Package::find($request->id);
        $package->delete();
        $data = [
            'infoMsg' => 'Paket gelöscht',
            'stats' => 'ok'
        ];
        return response()->json($data, 200);
    }

}
