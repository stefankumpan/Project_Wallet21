<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Partner;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PartnerController extends Controller
{
    public function index($pagination)
    {
        $partners = Partner::query()->with('partnerEarnings')->latest()->paginate($pagination);
        $startMonth = Carbon::now()->startOfMonth();
        $endMonth = Carbon::now()->endOfMonth();
        foreach ($partners as $partner) {
            $partner['revenue_total'] = $partner->partnerEarnings->sum('revenue');
            $partner['revenue_month'] = $partner->partnerEarnings->whereBetween('created_at', [$startMonth, $endMonth])->sum('revenue');
            unset($partner->partnerEarnings);
        }

        $data = [
            'partners' => $partners,
            'stats' => 'ok'
        ];
        return response()->json($data, 200);
    }

    public function create(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:partners'],
            'share' => ['required', 'numeric'],
            'key' => ['required', 'string', 'max:50', 'unique:partners'],
        ]);

        $user = User::where('email', $request->email)->first();
        if (empty($user)) {
            $error = [
                'errors' => ['email' => [0 => 'Kein User mit der Email gefunden!']],
            ];
            return response()->json($error, 400);
        }
        $partner = Partner::create([
            'user_id' => $user->id,
            'name' => $request->name,
            'email' => $request->email,
            'key' => str_replace(' ', '-', $request->key),
            'share' => $request->share,
            'active' => $request->active
        ]);

        if ($request->active === '0') {
            $user->role_id = 1;
            $user->save();
        }
        if ($request->active === '1') {
            $user->role_id = 2;
            $user->save();
        }

        $data = [
            'infoMsg' => 'Partner erstellt',
            'stats' => 'ok'
        ];

        return response()->json($data, 200);


    }

    public function update(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255',],
            'share' => ['required', 'numeric'],
            'key' => ['required', 'string', 'max:50'],
            'active' => ['required', 'numeric', 'between:0,1'],
        ]);


        $partner = Partner::find($request->id);
        $user = User::find($partner->user_id);

        if ($partner->email !== $request->email) {
            $request->validate([
                'email' => ['required', 'string', 'email', 'max:255', 'unique:partners'],
            ]);
            if (empty($user)) {
                $error = [
                    'errors' => ['email' => [0 => 'Kein User mit der Email gefunden!']],
                ];
                return response()->json($error, 400);
            }
        }
        if ($partner->key != $request->key) {
            $request->validate([
                'key' => ['required', 'string', 'max:50'],
            ]);
        }

        if ($request->active === '0') {
            $user->role_id = 1;
            $user->save();
        }
        if ($request->active === '1') {
            $user->role_id = 2;
            $user->save();
        }

        $partnerUpdate = [
            'name' => $request->name,
            'email' => $request->email,
            'key' => str_replace(' ', '-', $request->key),
            'share' => $request->share,
            'active' => $request->active
        ];

        $partner->update($partnerUpdate);

        $data = [
            'infoMsg' => 'Partner aktualisiert',
            'stats' => 'ok'
        ];

        return response()->json($data, 200);


    }

    public function destroy()
    {

    }


    public function search($pagination, $search)
    {

        $partners = Partner::query()->with('partnerEarnings')->search($search)->latest()->paginate($pagination);
        $startMonth = Carbon::now()->startOfMonth();
        $endMonth = Carbon::now()->endOfMonth();
        foreach ($partners as $partner) {
            $partner['revenue_total'] = $partner->partnerEarnings->sum('revenue');
            $partner['revenue_month'] = $partner->partnerEarnings->whereBetween('created_at', [$startMonth, $endMonth])->sum('revenue');
            unset($partner->partnerEarnings);
        }

        $data = [
            'partners' => $partners,
            'stats' => 'ok'
        ];
        return response()->json($data, 200);

    }

}
