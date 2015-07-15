<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Team extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'teams';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'logo', 'founded', 'manager', 'pl1', 'pl2', 'pl3', 'pl4', 'pl5', 'coach', 'staff', 'synergy', 'momentum', 'mood'];

	public $timestamps = false;

}
