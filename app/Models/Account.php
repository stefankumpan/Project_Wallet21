<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $fillable = [
        'name', 'description','color','currency','user_id'
    ];

    /**
     * relation to User model
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * relation to Category Model
     * @return mixed
     */
    public function categories()
    {
        return $this->hasMany(Category::class);
    }
    /**
     * relation to BookingRecords Model
     */
    public function bookingRecords(){
        return $this->hasManyThrough(BookingRecord::class,Category::class);
    }

    /**
     * get Account by User Id
     * @param $query
     * @param $id
     * @return mixed
     */
    public function scopeGetByUserId($query,$id){
        return $query->where('user_id',$id);
    }


}
