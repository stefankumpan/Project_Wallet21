<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * get All Users for Admin OverView
     * @param $pagination
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($pagination)
    {

        $users = User::query()->with('accounts', 'accounts.categories','subscriptions')->paginate($pagination);
        $roles = Role::all('name', 'id');
        foreach ($users as $user) {
            $user->accounts = app('calculation')->dashboardAccounts($user->accounts);
//            foreach ($user->orders as $x){
//                $x['client'] = json_decode($x['client']);
//                $x['product'] = json_decode($x['product']);
//            }

        }
        $data = [
            'users' => $users,
            'roles' => $roles,
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * Search for User
     * @param $pagination
     * @param $search
     * @return mixed
     */
    public function search($pagination, $search)
    {

        $users = User::query()->with('accounts', 'accounts.categories','subscriptions')->search($search)->paginate($pagination);
        foreach ($users as $user) {
            $user->accounts = app('calculation')->dashboardAccounts($user->accounts);
        }
        $data = [
            'users' => $users,
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }


    /**
     * Update User
     * @param Request $request
     * @return mixed
     */
    public function update(Request $request)
    {

        $user = User::find($request->get('id'));
        if ($user->email === $request->email) {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
            ]);
        } else {
            $request->validate([
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            ]);
        }
        $user->role_id = $request->get('role_id');
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->active = $request->get('active');
        $user->save();
        $data = [

            'infoMsg' => 'User aktualisiert',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * Delete User
     * @param Request $request
     * @return mixed
     */
    public function destroy(Request $request)
    {
        $user = User::find('email', $request->get('email'));
        $user->delete();
        $data = [
            'infoMsg' => 'User gelöscht',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

}
