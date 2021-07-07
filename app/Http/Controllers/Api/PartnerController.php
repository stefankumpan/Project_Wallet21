<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Partner;
use Carbon\Carbon;

class PartnerController extends Controller
{
    public function index(){
        $partner = Partner::query()->where('user_id',auth()->id())->with('partnerEarnings')->latest()->first();
        $startMonth = Carbon::now()->startOfMonth();
        $endMonth = Carbon::now()->endOfMonth();
            $partner['revenue_total'] = $partner->partnerEarnings->sum('revenue');
            $partner['revenue_month'] = $partner->partnerEarnings->whereBetween('created_at', [$startMonth,$endMonth])->sum('revenue');
            unset($partner->partnerEarnings,$partner->id,$partner->user_id);
            $url = env('APP_URL').'sk/'.$partner->key;
            $partner['link'] = $url; ;

        $data = [
            'partner' => $partner,
            'stats' => 'ok'
        ];
        return response()->json($data, 200);
    }
}
