<?php

namespace App\Http\Controllers\Web;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AppController extends Controller
{
    /**
     * Return the App View
     * @return mixed
     */
    public function index(){
        return view('app');
    }
}
