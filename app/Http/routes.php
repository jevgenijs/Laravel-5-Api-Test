<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'WelcomeController@index');
Route::get('angular', 'WelcomeController@angular');
Route::get('comments', 'WelcomeController@comments');

Route::group(array('prefix' => 'api'), function() {

	Route::get('users', 'WelcomeController@users');
	Route::resource('comments', 'CommentController');
	Route::get('cache', 'WelcomeController@test');

});

Route::controllers([
		'auth' => 'Auth\AuthController',
		'password' => 'Auth\PasswordController',
]);

