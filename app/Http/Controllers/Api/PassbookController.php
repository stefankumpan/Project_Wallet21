<?php

namespace App\Http\Controllers\Api;

use App\Models\Passbook;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PassbookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $user_id = Auth::id();
        $passbooks = Passbook::query()->GetByUserId($user_id)->get();

        $data = [
            'passbooks' => $passbooks,
            'status' => 'ok'
        ];
        return response()->json($data);

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'amount' => ['required', 'numeric'],
        ]);

        $passbook = new Passbook();
        $passbook->user_id = auth()->id();
        $passbook->name = $request->name;
        $passbook->description = $request->description;
        $passbook->currency = $request->currency;
        $passbook->savings_target = $request->amount;
        $passbook->save();
        $data = [
            'infoMsg' => 'Sparkonto erstellt',
            'status' => 'ok'
        ];

        return response()->json($data,200);

    }

    /**
     * Display the specified resource.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function updateCurrentStatus(Request $request)
    {
        $request->validate([
            'amount' => ['required', 'numeric'],
        ]);
        $id = $request->id;
        $passbook = Passbook::find($id);
        $passbook->current_status =  $passbook->current_status + $request->amount;
        $passbook->save();
        $data = [
            'infoMsg' => 'Betrag aktualisiert',
            'status' => 'ok'
        ];

        return response()->json($data,200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'amount' => ['required', 'numeric'],
        ]);

        $passbook = Passbook::find($request->id);
        $passbook->user_id = auth()->id();
        $passbook->name = $request->name;
        $passbook->description = $request->description;
        $passbook->currency = $request->currency;
        $passbook->savings_target = $request->amount;
        $passbook->save();
        $data = [
            'infoMsg' => 'Sparkonto aktualisiert',
            'status' => 'ok'
        ];

        return response()->json($data,200);

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $passbook = Passbook::find($request->id);
        $passbook->delete();
        $data = [
            'status' => 'ok',
            'infoMsg' => 'Sparkonto gelöscht'
        ];
        return response()->json($data,200);
    }
}
