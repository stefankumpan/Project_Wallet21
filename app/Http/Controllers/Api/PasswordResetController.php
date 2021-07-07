<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Notifications\PasswordResetRequest;
use App\Notifications\PasswordResetSuccess;
use App\Models\User;
use App\Models\PasswordReset;
use Illuminate\Support\Str;

class PasswordResetController extends Controller
{
    /**
     * Create token password reset
     *
     *
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse [string] message
     */
    public function create(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
        ]);
        $user = User::where('email', $request->email)->first();
        if (!$user) {
            $error = [
                'message' => 'Wir können keinen Benutzer mit dieser E-Mail-Adresse finden.'
            ];
            return response()->json($error, 404);
        }
        $passwordReset = PasswordReset::updateOrCreate(
            ['email' => $user->email],
            [
                'email' => $user->email,
                'token' => Str::random(60)
            ]
        );
        if ($user && $passwordReset)
            $user->notify(
                new PasswordResetRequest($passwordReset->token)
            );
        $data = [
            'message' => 'Wir haben Ihren Link zum Zurücksetzen des Passworts per E-Mail gesendet!',
            'status' => 'ok',
        ];
        return response()->json($data, 200);
    }

    /**
     * Find token password reset
     * @param  [string] $token
     * @return \Illuminate\Http\JsonResponse [string] message
     */
    public function find($token)
    {
        $passwordReset = PasswordReset::where('token', $token)
            ->first();
        if (!$passwordReset)
            return response()->json([
                'message' => 'Dieser Token zum Zurücksetzen des Kennworts ist ungültig.'
            ], 404);
        if (Carbon::parse($passwordReset->updated_at)->addMinutes(720)->isPast()) {
            $passwordReset->delete();
            return response()->json([
                'message' => 'Dieser Token zum Zurücksetzen des Kennworts ist ungültig..'
            ], 404);
        }

        return response()->json(['status' => 'ok'], 200);
    }

    /**
     * Reset password
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse [string] message
     */
    public function reset(Request $request)
    {
        $request->validate([
            'password' => 'required|string|min:8|confirmed',
            'token' => 'required|string'
        ]);
        $passwordReset = PasswordReset::where([
            ['token', $request->token],
        ])->first();
        if (!$passwordReset)
            return response()->json([
                'message' => 'Dieser Token zum Zurücksetzen des Kennworts ist ungültig.'
            ], 404);
        $user = User::where('email', $passwordReset->email)->first();
        if (!$user)
            return response()->json([
                'message' => 'Wir können keinen Benutzer mit dieser E-Mail-Adresse finden.'
            ], 404);
        $user->password = bcrypt($request->password);
        $user->save();
        $passwordReset->delete();
        $user->notify(new PasswordResetSuccess($passwordReset));
        $data = [
            'status' => 'ok',
            'infoMsg' => 'Passwort wurde geändert'
        ];
        return response()->json($data, 200);
    }

}
