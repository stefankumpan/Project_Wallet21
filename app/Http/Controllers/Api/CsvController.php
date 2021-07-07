<?php

namespace App\Http\Controllers\Api;

use App\Models\Account;
use App\Models\BookingRecord;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class CsvController extends Controller
{
    /**
     * User CSV Import
     * @param Request $request
     * @return mixed
     */
    public function csvImport(Request $request)
    {

        $csvdata = $request->get('csv');

//        dd($csvdata);
        $validator = Validator::make($csvdata, [
            '*Name' => 'required | string | max:100',
            '*Betrag' => 'required | ',
            '*Datum' => 'required | date',
        ]);
        if (count($validator->errors()) > 0) {
            $data = [
                'vali' => $validator->errors(),
                'errors' => ['csvError' => [0 => 'Bitte Überprüfen ihren Upload oder verwenden sie das Template.']],
            ];
            return response()->json($data, 400);
        } else {
            foreach ($csvdata as $item) {
                $bk = new BookingRecord();
                $amount = str_replace(',', '.', $item['Betrag']) + 0;
                $bk->name = $item['Name'];
                $bk->date = $item['Datum'];
                if ($amount > 0) {
                    $bk->revenue = $amount;
                    $bk->expenditure = 0;
                } else {
                    $bk->revenue = 0;
                    $bk->expenditure = str_replace('-', '', $amount);
                }
                if (empty($item['Beschreibung'])) {
                    $item['Beschreibung'] = 'Keine Beschreibung';
                }
                $bk->image = 'images/booking-records/nobillfound.jpg';
                $bk->description = $item['Beschreibung'];
                $bk->category_id = $request->get('categoryId');
                $bk->save();
            }
            $data = [
                'infoMsg' => 'CSV importiert',
                'status' => 'ok'
            ];
            return response()->json($data, 200);
        }
    }

    /**
     * CSV Export for Account and Category
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function csvExport(Request $request)
    {

        $accountId = $request->get('accountId');
        $categoryId = $request->get('categoryId');
        $acc = Account::find($accountId);

        if ($acc->user_id === auth()->id()) {
            if ($categoryId === 0) {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)
                    ->bookingRecords()->orderBy('date', 'DESC')->get()) {
                    $bksGerman = $this->ExportBookingRecordsToGerman($bookingRecords);
                    $data = ['bookingRecords' => $bksGerman, 'infoMsg' => 'Download Ready', 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            } else {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)
                    ->categories()->find($categoryId)->bookingRecords()->orderBy('date', 'DESC')->get()) {

                    $bksGerman = $this->ExportBookingRecordsToGerman($bookingRecords);

                    $data = ['bookingRecords' => $bksGerman, 'infoMsg' => 'Download Ready', 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            }
        } else {
            return response()->json('Unauthorized', 401);
        }

    }

    private function ExportBookingRecordsToGerman($bookingRecords)
    {

        $newData = [];

        foreach ($bookingRecords as $singleBK) {
            $bk = (object)[
//                'Datum' => str_replace('-','/',$singleBK->date),
                'Datum' => $singleBK->date,
                'Name' => $singleBK->name,
                'Betrag' => ($singleBK->revenue - $singleBK->expenditure),
                'Ust.Prozent' => $singleBK->tax,
                'Ust. Betrag' => $singleBK->tax_amount,
                'Beschreibung' => $singleBK->description,

            ];
            array_push($newData, $bk);
        }

        return $newData;
    }
}
