<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Skills extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'skills';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['level', 'points', 'name'];

	public $timestamps = false;
}
