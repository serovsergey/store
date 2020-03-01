<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Product;

class ProductController extends CatController
{
    public function index(){
    	$products = Product::all();
    	return view('products.index', compact('products'));
    }

    public function edit($product){
    	return view('products.edit', compact('product'));
    }

    public function getAll(){
    	$products = Catalog::getT();
    	return json_encode($products);
    }

    public function getAllGroups(){
        $products = Catalog::where('is_group', true)->get();
    	return json_encode($products);
    }

    public function getGroups($root, $downTo = 0){
        $products = Product
                    ::where('is_group', true)
                    ->where()
                    ->get();
    	return json_encode($products);
    }
}
