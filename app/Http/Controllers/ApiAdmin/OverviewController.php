<?php

namespace App\Http\Controllers\ApiAdmin;

use App\Models\Account;
use App\Models\BookingRecord;
use App\Models\Category;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class OverviewController extends Controller
{
    /**
     * get Stats for Overview
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        $usersCount = User::count();
        $accountsCount = Account::count();
        $categoriesCount = Category::count();
        $bookingRecords = BookingRecord::all();
        $bookingRecordsCount = $bookingRecords->count();
        $revenueSum = $bookingRecords->sum('revenue');
        $revenueAvg = $bookingRecords->avg('revenue');
        $expenditureSum = $bookingRecords->sum('expenditure');
        $expenditureAvg = $bookingRecords->avg('expenditure');
        $orders = Order::all();

        $ordersTotal = $orders->count();
        $ordersRevenue = $orders->sum('price');

        $data = [
            'usersCount' => $usersCount,
            'accountsCount' => $accountsCount,
            'categoriesCount' => $categoriesCount,
            'bookingRecordsCount' => $bookingRecordsCount,
            'revenueAvg' => $revenueAvg,
            'expenditureAvg' => $expenditureAvg,
            'ordersTotal' => $ordersTotal,
            'ordersRevenue' => $ordersRevenue,
        ];

        return response()->json($data, 200);

    }
}
