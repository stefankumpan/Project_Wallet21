<?php

namespace App\Http\Controllers\Api;

use App\Models\Package;
use App\Models\PasswordReset;
use App\Models\Subscription;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    /**
     * Checks the  data and creates a User
     * Überprüft die  daten und erstellt einen neuen User
     * @param Request $request
     * @return mixed
     */
    public function userSignUp(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8',],
        ]);

        $user = new User();
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = bcrypt($request->get('password'));
        $user->generateToken();
        $user->save();


        // Default Account + Categories and Free Subscription Package 2
        app('newUser')->createDefaultAccount($user->id, $user->name);
        app('newUser')->freeSubscription($user);

        //generate Web Token
        $webtoken = $this->webTokenGenerate($user);
        $data = [
            'token' => $webtoken['token'],
            'expire' => $webtoken['expire'],
            'userStatus' => 'user',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }


    /**
     * Checks the user data and creates a web token for the user
     * Überprüft die user daten und erstellt einen Web token für den user
     * @param Request $request
     * @return mixed
     */
    public function userSignIn(Request $request)
    {
        $request->validate([
            'email' => ['required', 'string', 'email', 'max:255'],
            'password' => ['required', 'string', 'min:8',],
        ]);
        $credentials = $request->only(['email', 'password']);
        if (auth()->attempt($credentials)) {

            if(Auth::user()->active === 1 ){
                auth()->user()->generateToken()->save();

                $webtoken = $this->webTokenGenerate(auth()->user());
                $userStatus = Auth::user()->role->name;

                $data = [
                    'token' => $webtoken['token'],
                    'expire' => $webtoken['expire'],
                    'userStatus' => $userStatus,
                    'status' => 'ok'
                ];
                return response()->json($data, 200);
            } else{
                $data = [
                    'errors' => ['invalid credentials' => [0 => 'Konto inaktive!']],
                ];
                return response()->json($data, 422);
            }



        } else {

            $data = [
                'errors' => ['invalid credentials' => [0 => 'E-Mail oder Passwort ist Falsch!']],
            ];
            return response()->json($data, 422);

        }

    }

    /**
     * User Log out Delete the Token
     * @param Request $request
     * @return mixed
     */
    public function userLogOut(Request $request)
    {

        if ($token = $request->header('Authorization')) {
            $token = decrypt($token);
            $splitToken = explode('.', $token);
            //dd($splitToken);
        }
        if ($user = User::query()->where('token', $splitToken[1])->find($splitToken[0])) {
            // dd($user);
            $user->token = null;
            $user->expire_token = null;
            //  dd($user);
            $user->save();
            return response()->json('ok', 200);

        }
        return response()->json('bad request', 400);
    }


    /**
     * Check User Token and the User Role
     * @return mixed
     */
    public function checkToken()
    {
        if(Auth::user()->active === 1){
            $userStatus = Auth::user()->role->name;
            $data = [
                'userStatus' => $userStatus,
                'status' => 'ok',
            ];
            return response()->json($data, 200);
        } else{

            $data = [
                'errors' => ['invalid credentials' => [0 => 'Konto inaktive!']],
            ];
            return response()->json($data, 422);
        }


    }

    /**
     * Generate Web Token for User - Erstellt den Web Token für den User
     * @param $user
     * @return array
     */
    private function webTokenGenerate($user)
    {

        $id = $user->id;
        $string = $user->token;
        $expire = $user->expire_token;

        $token = $id . '.' . $string . '.' . $expire;
        $token = encrypt($token);
        $webToken = [
            'token' => $token,
            'expire' => $expire,
        ];
        return $webToken;
    }


}
