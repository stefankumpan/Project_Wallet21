<?php

namespace App\Http\Controllers\Api;

use App\Models\Partner;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class UserController extends Controller
{
    /**
     * Get User
     * @return mixed
     */
    public function index()
    {
        $user = User::query()->with('subscriptions')->find(auth()->id());


        if (count($user->subscriptions) == 0) {
            $expire = 0;
        } else {
            $expire = $user->subscriptions[count($user->subscriptions) - 1]['expire'];
        }
        $userData = [
            'created_at' => $user['created_at'],
            'email' => $user['email'],
            'name' => $user['name'],
            'sub_expire' => $expire,
        ];

        $data = [
            'user' => $userData,
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

        $user = User::with('partner')->find(auth()->id());
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
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->save();
        //partner
        if ($user->role->name === 'partner'){
            $partner = Partner::where('user_id',$user->id)->first();
            $partner->email = $user->email;
            $partner->save();
        }
        $data = [
            'infoMsg' => 'Profil aktualisiert',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * Update User Password
     * @param Request $request
     * @return mixed
     */
    public function updatePassword(Request $request)
    {

        $user = User::find(auth()->id());
        $request->validate([
            'password' => ['required', 'string', 'min:8',],
        ]);
        $user->password = bcrypt($request->password);
        $user->save();
        $data = [
            'infoMsg' => 'Passwort aktualisiert',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }
}
