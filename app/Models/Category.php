<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{

    protected $fillable = [
        'name', 'description','color','icon_id','account_id',
    ];

    /**
     * Category Relation to Account
     * @return mixed
     */
    public function account()
    {
        return $this->belongsTo(Account::class);
    }

    /**
     * Category Relation to Icon
     * @return mixed
     */
    public function icon()
    {
        return $this->belongsTo(Icon::class);
    }

    /**
     * Category Relation to Booking Records
     * @return mixed
     */
    public function bookingRecords()
    {
        return $this->hasMany(BookingRecord::class);
    }




}

