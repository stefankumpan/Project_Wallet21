<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Account;
use App\Models\BookingRecord;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class BookingRecordsController extends Controller
{
    /**
     * Create new BookingRecord
     * @param Request $request
     * @return mixed
     */
    public function create(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'amount' => ['required', 'numeric'],
            'tax' => ['required', 'numeric'],
            'tax_amount' => ['required', 'numeric'],
            'date' => ['required', 'date'],
        ]);

        $imageFolder = 'images/booking-records/nobillfound.jpg';
        if (!is_null($request->imageFile)) {
            $imageData = [
                'file' => $request->imageFile,
                'date' => $request->date,
                'name' => $request->name,
            ];
            $imageFolder = $this->image($imageData);
        }
        $category = Account::query()->GetByUserId(auth()->id())->find($request->get('accountId'))->categories()->find($request->get('categoryId'));
        if(!is_null($category)){
            $amount = $request->get('amount');
            $bookingRecord = new BookingRecord();
            $bookingRecord->name = $request->get('name');
            $bookingRecord->description = $request->get('description');
            $bookingRecord->date = $request->get('date');
            if ($amount > 0) {
                $bookingRecord->revenue = $amount;
                $bookingRecord->expenditure = 0;

            } else {
                $bookingRecord->revenue = 0;
                $bookingRecord->expenditure = str_replace('-', '', $amount);
            }
            $bookingRecord->tax = $request->get('tax');
            $bookingRecord->tax_amount = str_replace('-', '', $request->get('tax_amount'));
            $bookingRecord->category_id = $category->id;
            $bookingRecord->image = $imageFolder;
            $bookingRecord->save();;
            $data = [
                'account' => $bookingRecord,
                'infoMsg' => 'Buchung erstellt'
            ];
            return response()->json($data, 200);
        }else{
            return response()->json('Not Found', 404);
        }

    }


    /**
     * Update Booking Record
     * @param Request $request
     * @return mixed
     */
    public function update(Request $request)
    {
        $request->validate([
            'name' => ['required', 'string', 'max:100'],
            'description' => ['string', 'max:255'],
            'amount' => ['required', 'numeric'],
            'date' => ['required', 'date'],
            'tax' => ['required', 'numeric'],
            'tax_amount' => ['required', 'numeric'],
        ]);
        $bk = Account::query()->GetByUserId(auth()->id())->find($request->get('accountId'))->bookingRecords()->find($request->get('id'));
        if(!is_null($bk)){
            $amount = $request->get('amount');
            $imageFolder = null;
            if (!is_null($request->imageFile)) {
                $imageData = [
                    'file' => $request->imageFile,
                    'date' => $request->date,
                    'name' => $request->name,
                ];
                $imageFolder = $this->image($imageData);
            }
            $bookingRecord = BookingRecord::find($request->id);
            $bookingRecord->name = $request->get('name');
            $bookingRecord->description = $request->get('description');
            $bookingRecord->date = $request->get('date');
            if ($amount > 0) {
                $bookingRecord->revenue = $amount;
                $bookingRecord->expenditure = 0;

            } else {
                $bookingRecord->revenue = 0;
                $bookingRecord->expenditure = str_replace('-', '', $amount);
            }
            $bookingRecord->tax = $request->get('tax');
            $bookingRecord->tax_amount = str_replace('-', '', $request->get('tax_amount'));
            if (!is_null($imageFolder)) {
                $bookingRecord->image = $imageFolder;
            }
            $bookingRecord->save();;
            $data = [
                'account' => $bookingRecord,
                'infoMsg' => 'Buchung aktualisiert'
            ];
            return response()->json($data, 200);

        }else{
            return response()->json('Not Found', 404);
        }

    }

    /**
     * Get Booking Records from User By Account or Category
     * @param $pagination
     * @param $accountId
     * @param $categoryId
     * @return mixed
     */
    public function getBookingRecords($pagination, $accountId, $categoryId)
    {
        $acc = Account::find($accountId);
        if ($acc->user_id === auth()->id()) {
            if ($categoryId === 'none') {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)
                    ->bookingRecords()->orderBy('date', 'DESC')->paginate($pagination)) {
                    $data = ['bookingRecords' => $bookingRecords, 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            } else {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)
                    ->categories()->find($categoryId)->bookingRecords()->orderBy('date', 'DESC')->paginate($pagination)) {
                    $data = ['bookingRecords' => $bookingRecords, 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            }
        } else {
            return response()->json('Unauthorized', 401);
        }
    }

    /**
     * Search in Booking Records by Name or Description in Account or Category
     * @param $pagination
     * @param $accountId
     * @param $categoryId
     * @param $search
     * @return mixed
     */
    public function search($pagination, $accountId, $categoryId,$search)
    {
        $acc = Account::find($accountId);
        if ($acc->user_id === auth()->id()) {
            if ($categoryId === 'none') {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)

                    ->bookingRecords()->orderBy('date', 'DESC')->search($search)->paginate($pagination)) {
                    $data = ['bookingRecords' => $bookingRecords, 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            } else {
                if ($bookingRecords = Account::query()->GetByUserId(auth()->id())->find($acc->id)
                    ->categories()->find($categoryId)
                    ->bookingRecords()->orderBy('date', 'DESC')->search($search)->paginate($pagination)) {
                    $data = ['bookingRecords' => $bookingRecords, 'status' => 'ok'];
                    return response()->json($data, 200);
                } else {
                    return response()->json('Not Found', 404);
                }
            }
        } else {
            return response()->json('Unauthorized', 401);
        }
    }

    /**
     * Delete Booking Record
     * @param Request $request
     * @return mixed
     */
    public function destroy(Request $request)
    {
        $accoundId = $request->get('accountId');
        $bk = $request->get('bookingRecord');
        $bookiongRcord = Account::query()->GetByUserId(auth()->id())->find($accoundId)->bookingRecords()->find($bk['id']);
        $bookiongRcord->delete();
        $data = [
            'infoMsg' => 'Buchungssatz gelöscht',
            'status' => 'ok'
        ];
        return response()->json($data, 200);
    }

    /**
     * handle File Upload (Image) from Booking Record
     * @param $data
     * @return string
     */
    private function image($data)
    {
        $exploded = explode(',', $data['file']);
        $decoded = base64_decode($exploded[1]);
        if (Str::contains($exploded[0], 'jpeg')) {
            $extension = 'jpg';
        } else {
            $extension = 'png';
        }
        $fileName = $data['date'] . '-' . str_replace(' ', '_', $data['name']) . '-' . Str::random() . '.' . $extension;
        $path = public_path('images/booking-records/') . $fileName;
        file_put_contents($path, $decoded);
        return $imageFolder = "images/booking-records/" . $fileName;
    }

}
