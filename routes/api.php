<?php

use Illuminate\Http\Request;
use App\http\Resources\ProductCollection;
use App\Product;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

/*Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});*/



//Route::get('/cat/get-all/{catalog}', 'CatController@getGroups'); 
Route::get('/catalog/{catalog}/get-groups', 'CatController@getGroups')->middleware('auth:api'); 
Route::get('/catalog/{catalog}/get-children/{id}', 'CatController@getChildren');

Route::get('/catalog/{catalog}/get-all', function () {
    return new ProductCollection(Product::paginate(4));
});

Route::group(['namespace' => 'Api'], function () {
    Route::group(['namespace' => 'Auth'], function () {
        Route::get('user', 'UserController')->middleware('auth:api'); 
        Route::post('register', 'RegisterController');
        Route::post('login', 'LoginController');
        Route::post('logout', 'LogoutController')->middleware('auth:api');
    });
});