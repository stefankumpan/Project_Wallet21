<?php

namespace App\Http\Controllers\Api;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class AccountController extends Controller
{
    /**
     * get all Account from User
     * Display a listing of the resource.
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user_id = Auth::id();
        $accounts = Account::query()->GetByUserId($user_id)->with('bookingRecords', 'categories', 'categories.icon')->get();
        $accounts = app('calculation')->dashboardAccounts($accounts);
        $data = [
            'accounts' => $accounts,
            'status' => 'ok'
        ];
        return response()->json($data);
    }

    /**
     * Create a New Account
     * @param Request $request
     * @return mixed
     */
    public function create(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'color' => ['string'],
        ]);
        $user_id = auth()->id();// User ID
        $account = new Account();
        $account->name = $request->get('name');
        $account->description = $request->get('description');
        $account->color = $request->get('color');
        $account->user_id = $user_id;
        $account->save();
        $data = [
            'account' => $account,
            'infoMsg' => 'Konto erstellt'
        ];
        return response()->json($data, 200);
    }

    /**
     * Show Account from User by Id
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        if ($account = Account::query()->GetByUserId(auth()->id())->with('categories', 'categories.icon', 'categories.bookingRecords', 'bookingRecords')->find($id)) {
            $account = app('calculation')->accountCalculation($account);
            $account->categories = app('calculation')->categoriesCalculation($account->categories);
            $categories = $account->categories;
            unset($account['categories']);
            $data = [
                'account' => $account,
                'categories' => $categories,
            ];
            return response()->json($data, 200);
        } else {
            return response()->json('unauthorized', 401);
        }
    }

    /**
     * Update Account from User
     * @param Request $request
     * @return mixed
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'color' => ['string'],
        ]);

        // auto calculation if the user set autoCalculation
        $autoCalculation = $request->autoCalculation;
        if($autoCalculation === true){
            $CalculationData = [
                'id' => $request->get('id'),
                'currency' => $request->get('currency'),
                'currencies' => $request->get('currencies'),
            ];
            app('calculation')->currencyConversion($CalculationData);
        }

        $id = $request->get('id');
        $user_id = auth()->id();// User ID
        $account = Account::query()->GetByUserId($user_id)->find($id);
        $account->name = $request->get('name');
        $account->description = $request->get('description');
        $account->color = $request->get('color');
        $account->currency = $request->get('currency');
        $account->save();
        $account = app('calculation')->accountCalculation($account);

        $data = [
            'account' => $account,
            'infoMsg' => 'Konto aktualisiert',
        ];
        return response()->json($data, 200);
    }

    /**
     * Delete Account
     * @param Request $request
     * @return mixed
     */
    public function destroy(Request $request)
    {
        $id = $request->get('id');
        $user_id = auth()->id();
        $account = Account::query()->GetByUserId($user_id)->find($id);
        $account->delete();
        $data = [
            'infoMsg' => 'Konto gelöscht'
        ];
        return response()->json($data, 201);
    }

}
