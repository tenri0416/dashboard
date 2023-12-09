<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class LaungerFile extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['filename', 'difficulty_level'];
    protected $dates = ['deleted_at'];
}
