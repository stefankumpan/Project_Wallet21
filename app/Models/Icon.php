<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Icon extends Model
{

    protected $fillable = [
        'name', 'path',
    ];

    /**
     * Icon Relation to Category
     * @return mixed
     */
    public function category(){
        return $this->hasOne(Category::class);
    }
}
