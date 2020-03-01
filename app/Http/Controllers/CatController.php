<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Product;

class CatController extends Controller
{
    function __construct() {
        //$this->middleware('auth:api');
    }

    function getModelByName($modelName){
        switch ($modelName) {
            case 'products': return Product::class;
    
            default: return null;
        }
    }

    public function getAll($catalog){
        if($model = CatController::getModelByName($catalog)){
            $cat_data = $model::all();
            return json_encode($cat_data);
        } 
        return null;    	
    }

    public function getChildren($catalog, $id){
        if($model = CatController::getModelByName($catalog)){
            //$cat_data = $model::where('parent_id', $id)->get();
            $cat_data = DB::table('products as parent')
                            ->leftJoin('products as child', 'child.parent_id', '=', 'parent.id')
                            ->select('parent.*', DB::Raw('count(child.id) as children'))
                            ->where('parent.parent_id', $id)
                            ->groupBy('parent.id')
                            ->orderBy('is_group', 'desc')
                            ->orderBy('title', 'asc')
                            ->get();
                            //->toSql();
            return json_encode($cat_data);
        } 
        return null;    	
    }

    public function getGroups($catalog){
        if($model = CatController::getModelByName($catalog)){
            $cat_data = $model::where('is_group', true)->get();
            return json_encode($cat_data);
        } 
        return null; 
    }
}
