<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Passbook extends Model
{

    protected $fillable = [
        'name', 'description','current_status','savings_target','currency','user_id'
    ];

    /**
     * Passbooks Relation to User
     * @return mixed
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * get Passbook By User Id
     * @param $query
     * @param $id
     * @return mixed
     */
    public function scopeGetByUserId($query,$id){
        return $query->where('user_id',$id);
    }

}
