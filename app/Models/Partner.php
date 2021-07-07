<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    protected $fillable = [
        'user_id','name', 'email','key','share',
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
     * relation to Partner Earnings
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function partnerEarnings()
    {
        return $this->hasMany(PartnerEarning::class);
    }

    public function scopeSearch($query, $s)
    {
        return $query->where('partners.name', 'like', '%' . $s . '%')
            ->orWhere('partners.email', 'like', '%' . $s . '%')
            ->orWhere('partners.key', 'like', '%' . $s . '%');
    }
}
