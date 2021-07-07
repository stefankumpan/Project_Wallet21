<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BookingRecord extends Model
{

    protected $fillable = [
        'name', 'image', 'revenue','expenditure','tax','tax_amount','description','date','category_id'
    ];

    /**
     * Booking Records Relation to Category
     * @return mixed
     */
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    /**
     * Booking Records Relation to Account
     * @return mixed
     */
    public function account()
    {
        return $this->hasOneThrough(Account::class, Category::class);
    }

    /**
     * Search in Booking Records by Name or Description
     * @param $query
     * @param $s
     * @return mixed
     */
    public function scopeSearch($query, $s)
    {
        return $query->where('booking_records.name', 'like', '%' . $s . '%')
            ->orWhere('booking_records.description', 'like', '%' . $s . '%');
    }

}
