<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Player extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'players';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['name', 'surname', 'nickname', 'age', 'wage', 'form', 'exp', 'leadership', 'tsp', 'tp','loyalty', 'specialty',
							 'sk1', 'sk2', 'sk3', 'sk4', 'sk5', 'sk6', 'sk7', 'sk8', 'sk9', 'sk10'];

	public $timestamps = false;

}
