<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Package;
use Illuminate\Http\Request;

class PackageController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $packages = Package::query()->orderBy('numbering','ASC')->get();

        foreach ($packages as $singlePackage){
            $singlePackage['info'] = json_decode($singlePackage['info']);
        }

        $data =[
            'packages' => $packages,
            'status' => 'ok',
        ];

        return response()->json($data, 200);

    }

}
