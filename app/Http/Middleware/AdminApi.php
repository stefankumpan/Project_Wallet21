<?php

namespace App\Http\Middleware;

use App\Models\User;
use Carbon\Carbon;
use Closure;

class AdminApi
{
    /**
     * Check Admin is SignIn and Token is not expired and the Role is Admin
     * @param $request
     * @param Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        //check token exist
        if ($token = $request->header('Authorization')) {
            //decrypt token
            $token = explode('.', decrypt($token));
            //check multi auth user and token
            if ($user = User::query()->where('token', $token[1])->find($token[0])) {
                //checks the expiry date
                if ($user->expire_token > Carbon::now()->format('Y-m-d') && $user->role->name === 'admin') {
                    //status ok
                    auth()->login($user);
                    return $next($request);
                } else {
                    //  Unauthorized -
                    return response()->json('Unauthorized', 401);
                }
            } else {
                //  Unauthorized

                return response()->json('Unauthorized', 401);
            }
        } else {
            //  Unauthorized
            return response()->json('Unauthorized', 401);
        }
    }
}
