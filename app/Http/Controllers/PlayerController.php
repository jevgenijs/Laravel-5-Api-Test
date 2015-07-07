<?php namespace ESMNGR\Http\Controllers;

use ESMNGR\Models\Player;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

//use Illuminate\Http\Request;

class PlayerController extends Controller {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		return \Response::json(Player::get());
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
		$player = Player::create(\Input::get());

        return \Response::json($player, Response::HTTP_CREATED);
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id)
	{
		return \Response::json(Player::find($id));
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
		$player = Player::find($id);
		//$player->text = \Input::get('text');
		$player->save();
		return \Response::json($player);
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id)
	{
		$player = Player::find($id);
		$player->delete();

        return \Response::make('', Response::HTTP_NO_CONTENT);
	}

}
