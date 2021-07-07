<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


//Admin API Routes
Route::middleware('admin.auth.api')->group(function () {
    Route::get('overview', 'OverviewController@index'); //User SignUp API
    //Users
    Route::get('users/{pagination}', 'UserController@index'); //Get all Users
    Route::get('users/{pagination}/s/{search}', 'UserController@search'); //Search for User
    Route::put('users/update', 'UserController@update'); //Update User

    //Icons
    Route::get('icons/{pagination}', 'IconController@index'); //Get all Icons
    Route::post('icon/create', 'IconController@create'); //Create new Icon
    Route::put('icon/update', 'IconController@update'); //Update  Icon
    Route::delete('icon/delete', 'IconController@destroy'); //Delete  Icon

    //Orders
    Route::get('orders/{pagination}', 'OrderController@index'); //Get all Orders
    Route::get('orders/{pagination}/search/{search}', 'OrderController@search'); //Search Orders
    Route::put('order/update', 'OrderController@update'); // Update Order

    //Packages
    Route::get('packages/{pagination}', 'PackageController@index'); //Get all Packages
    Route::post('package/create', 'PackageController@create'); //Create new Package
    Route::put('package/update', 'PackageController@update'); //Update Package
    Route::delete('package/delete', 'PackageController@destroy'); //Update Package

    //Partners
    Route::get('partners/{pagination}', 'PartnerController@index'); //Get all Partners
    Route::get('partners/{pagination}/search/{search}', 'PartnerController@search'); //Search  Partners
    Route::post('partner/create', 'PartnerController@create'); //Create Partner
    Route::put('partner/update', 'PartnerController@update'); //Update Partner



});


