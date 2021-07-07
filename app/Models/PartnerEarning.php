<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PartnerEarning extends Model
{
    protected $fillable = [
       'partner_id', 'order_id','order_invoice_number', 'revenue'
    ];

    /**
     * relation to partner
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function partner()
    {
        return $this->belongsTo(Partner::class);
    }

}
