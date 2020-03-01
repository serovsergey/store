<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

abstract class Catalog extends Model
{
    public static function getAllGroups() {
        return self::where('is_group', true)->get();
    }
}