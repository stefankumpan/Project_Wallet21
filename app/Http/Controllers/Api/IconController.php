<?php

namespace App\Http\Controllers\Api;

use App\Models\Icon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class IconController extends Controller
{
    /** Get Icons
     * @return mixed
     */
    public function allIcons(){

        $icons = Icon::all();
        $data =[
          'icons' => $icons,
          'status' => 'ok',
        ];
        return response()->json($data,200);
    }
}
