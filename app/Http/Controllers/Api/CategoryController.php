<?php

namespace App\Http\Controllers\Api;

use App\Models\Account;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{

    /**
     * Store a newly created resource in storage.
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'color' => ['string'],
        ]);
        $accountId = Account::query()->getByUserId(auth()->id())->find($request->get('accountId'));
        if($accountId->user_id = auth()->id()){
            $category = new Category();
            $category->name = $request->get('name');
            $category->description = $request->get('description');
            $category->color = $request->get('color');
            $category->icon_id = $request->get('icon_id');
            $category->account_id = $request->get('accountId');
            $category->save();

            $data = [
                'status' => 'ok',
                'infoMsg' => 'Kategorie erstellt'
            ];

            return response()->json($data, 200);
        }else{
            return response()->json('No authorization', 400);
        }

    }

    /**
     * get User Category
     * @param $accountId
     * @param $categoryId
     * @return mixed
     */
    public function show($accountId, $categoryId)
    {
        if ($category = Account::query()->GetByUserId(auth()->id())->find($accountId)->categories()->find($categoryId)) {
            $category = app('calculation')->categoryCalculation($category);
            $category['currency'] = $category->account->currency;
            unset($category['account']);
            $data = [
                'category' => $category,
            ];
            return response()->json($data, 200);

        } else {
            return response()->json('No authorization', 400);
        }
    }

    /**
     * Update User Category
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

        $category = Account::query()->getByUserId(auth()->id())->find($request->account_id)->categories()->find($request->id);
        $category->name = $request->get('name');
        $category->description = $request->get('description');
        $category->color = $request->get('color');
        $category->icon_id = $request->get('icon_id');
        $category->save();

        $data = [
            'status' => 'ok',
            'infoMsg' => 'Kategorie aktualisiert'
        ];

        return response()->json($data, 200);
    }

    /**
     * Delete User Category
     * @param Request $request
     * @return mixed
     */
    public function destroy(Request $request)
    {
        $category = Account::query()->getByUserId(auth()->id())->find($request->account_id)->categories()->find($request->id);
        $category->delete();
        $data = [
            'status' => 'ok',
            'infoMsg' => 'Kategorie gelöscht'
        ];
        return response()->json($data, 200);
    }
}
