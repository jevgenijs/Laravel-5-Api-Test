<?php namespace ESMNGR\Models;

use Illuminate\Database\Eloquent\Model;

class Leadership extends Model {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'leadership';

	/**
	 * The attributes that are mass assignable.
	 *
	 * @var array
	 */
	protected $fillable = ['level', 'points', 'name', 'effect'];

	public $timestamps = false;
}
