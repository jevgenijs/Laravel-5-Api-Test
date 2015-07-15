<?php namespace ESMNGR\Http\Controllers;

use ESMNGR\Models\Team;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

//use Illuminate\Http\Request;

class TeamController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return \Response::json(Team::get());
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create()
	{
		//
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store()
	{
		$team = Team::create(\Input::get());

        return \Response::json($team, Response::HTTP_CREATED);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return \Response::json(Team::find($id));
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id)
	{
		//
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id)
	{
		$team = Team::find($id);
		//$team->text = \Input::get('text');
		$team->save();
		return \Response::json($team);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$team = Team::find($id);
		$team->delete();

        return \Response::make('', Response::HTTP_NO_CONTENT);
	}

}
