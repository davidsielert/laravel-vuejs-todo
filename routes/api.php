<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('tasks', function () {
    return App\Task::orderBy('created_at')->get();
});

Route::get('task/{id}', function ($id) {
    return App\Task::findOrFail($id);
});

Route::post('task/store', function (Request $request) {
    return App\Task::create(['body' => $request->input(['body'])]);
});

Route::patch('task/{id}', function (Request $request, $id) {
    App\Task::findOrFail($id)->update(['body' => $request->input(['body'])]);
});

Route::delete('task/{id}', function ($id) {
    return App\Task::destroy($id);
});
