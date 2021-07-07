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

// Auth API Routes
Route::post('signup', 'AuthController@userSignUp'); //User SignUp API
Route::post('signin', 'AuthController@userSignIn'); //User SignUp API
Route::post('logout', 'AuthController@userLogOut'); //User LogOut API

// Password Reset
Route::post('auth/forgot-password/create', 'PasswordResetController@create');
Route::get('auth/reset-password/{token}', 'PasswordResetController@find');
Route::post('auth/reset-password/', 'PasswordResetController@reset');

//Packages
Route::get('packages', 'PackageController@index'); //all Account - Alle Konten



//User Routes
Route::middleware('auth.api')->group(function () {
    //Account Routes
    Route::get('accounts', 'AccountController@index'); //all Account - Alle Konten
    Route::post('account/create', 'AccountController@create'); //create new Account - Erstellt neues Konto
    Route::get('account/{id}', 'AccountController@show'); // get account - holt sich Konto
    Route::put('account/update', 'AccountController@update'); //update  Account - Update Konto
    Route::delete('account/delete', 'AccountController@destroy'); // delete  Account - Löscht Konto

    //Passbook Routes
    Route::get('passbooks', 'PassbookController@index'); //all Passbooks - Alle Sparkonten
    Route::post('passbook/create', 'PassbookController@create'); //create new Passbook - Erstell neues Sparkonto
    Route::put('passbook/updatecurrentstatus', 'PassbookController@updateCurrentStatus'); //update Passbook current Status - Update Sparkonto aktueller stand
    Route::put('passbook/update', 'PassbookController@update');  //update Passbook - Update Sparkonto
    Route::delete('passbook/delete', 'PassbookController@destroy'); //delete Passbook - Löscht Sparkonto

    //Category Routes
    Route::get('account/{accountId}/category/{categoryId}', 'CategoryController@show'); // get category - holt sicht die Kategorie
    Route::post('category/create', 'CategoryController@create'); // create new Category - Erstellt neue Kategorie
    Route::put('category/update', 'CategoryController@update'); // update  Category - Update Kategorie
    Route::delete('category/delete', 'CategoryController@destroy'); // delete  Category - Löscht Kategorie

    //Booking-Records Routes
    Route::get('booking-records/{pagination}/{accountId}/{categoryId}', 'BookingRecordsController@getBookingRecords');
    Route::get('booking-records/{pagination}/{accountId}/{categoryId}/s/{search}', 'BookingRecordsController@search');
    Route::post('booking-record/create', 'BookingRecordsController@create'); // Create BookingRecord - Erstelle Buchungssatz
    Route::put('booking-record/update', 'BookingRecordsController@update'); // Update BookingRecord - Update Buchungssatz
    Route::delete('booking-record/delete', 'BookingRecordsController@destroy'); // delete BookingRecord - Löschen Buchungssatz

    //CSV Routes
    Route::post('csv-import', 'CsvController@csvImport'); // Import CSV
    Route::post('csv-export', 'CsvController@csvExport'); // Import CSV

    //Icons Routes
    Route::get('icons', 'IconController@allIcons'); // get icons - holt sicht die Icons

    //check Token
    Route::post('auth/check-token', 'AuthController@checkToken'); //User Check Token
    Route::get('user', 'UserController@index'); //Get User info - Holt sich die User Informationen
    Route::put('user/update', 'UserController@update'); //Update User -Update User
    Route::put('user/password-update', 'UserController@updatePassword'); //Update User -Update User

    //Order
    Route::get('orders/user/{pagination}', 'OrderController@index'); //Get all Orders from User
    Route::post('order/create', 'OrderController@create'); //create a new Order

    //Partner
    Route::get('partner', 'PartnerController@index'); //Get Partner info from User

});


