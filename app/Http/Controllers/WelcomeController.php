<?php namespace ESMNGR\Http\Controllers;

use ESMNGR\Models\User;

class WelcomeController extends Controller {

	/*
	|--------------------------------------------------------------------------
	| Welcome Controller
	|--------------------------------------------------------------------------
	|
	| This controller renders the "marketing page" for the application and
	| is configured to only allow guests. Like most of the other sample
	| controllers, you are free to modify or remove it as you desire.
	|
	*/

	/**
	 * Create a new controller instance.
	 *
	 * @return void
	 */
	public function __construct()
	{
		$this->middleware('auth');
	}


	/**
	 * Show the application welcome screen to the user.
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('welcome');
	}

	public function users($id = 0)
	{

		return \Response::json(User::all());
	}

	public function angular($id = 0)
	{
		return view('angular');
	}


	public function comments($id = 0)
	{
		return view('comments');
	}

}
