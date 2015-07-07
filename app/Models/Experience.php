<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Experience extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'experience';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['level', 'points', 'name', 'effect'];

	public $timestamps = false;
}
