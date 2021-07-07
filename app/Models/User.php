<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Str;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'token', 'expire_token'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'token', 'expire_token',  'email_verified_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * relatiuon to accounts
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    /**
     * relatiuon to passbooks
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function passbooks()
    {
        return $this->hasMany(Passbook::class);
    }
    /**
     * relatiuon to orders
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
    /**
     * relatiuon to subscription
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    /**
     * relatiuon to role
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function role()
    {
        return $this->belongsTo(Role::class);
    }

    /**
     * relation to partner
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function partner()
    {
        return $this->hasOne(Partner::class);
    }

    /**
     * @return User generate Token - Erstellt den User Token
     */
    public function generateToken(): self
    {
        $this->token = Str::random(60);
        $this->expire_token = Carbon::now()->addDay(30)->format('Y-m-d');
        return $this;
    }

    /**
     * User Search
     */
    public function scopeSearch($query, $s)
    {
        return $query->where('users.name', 'like', '%' . $s . '%')
            ->orWhere('users.email', 'like', '%' . $s . '%');
    }


}
