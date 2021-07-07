<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
       'invoice_number','client','product','price','status',
        'user_id','subscription_id', 'package_id','iban',
    ];

    /**
     * relation to user
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * get by user id
     * @param $query
     * @param $id
     * @return mixed
     */
    public function scopeGetByUserId($query,$id){
        return $query->where('user_id',$id);
    }

    /**
     * search in orders
     * @param $query
     * @param $s
     * @return mixed
     */
    public function scopeSearch($query, $s)
    {
        return $query->where('orders.invoice_number', 'like', '%' . $s . '%')
            ->orWhere('orders.client', 'like', '%' . $s . '%')
            ->orWhere('orders.product', 'like', '%' . $s . '%');
    }

}
