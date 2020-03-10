<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Catalog;
use App\HaveAggregateField;

class Product extends Catalog
{
    use HaveAggregateField;

    protected $fillable = [];
}
