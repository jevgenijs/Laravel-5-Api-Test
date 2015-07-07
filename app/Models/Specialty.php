<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Specialty extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'specialty';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['level', 'name', 'effect'];

	public $timestamps = false;
}
