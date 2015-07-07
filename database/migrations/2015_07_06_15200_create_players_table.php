<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlayersTable extends Migration {

	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('form', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name');
			$table->integer('points');
			$table->integer('effect');
		});

		Schema::create('experience', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name');
			$table->integer('points');
			$table->integer('effect');
		});

		Schema::create('leadership', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name');
			$table->integer('points');
			$table->integer('effect');
		});

		Schema::create('loyalty', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name');
			$table->integer('points');
			$table->integer('effect');
		});

		Schema::create('specialty', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name');
			$table->integer('effect');
		});

		Schema::create('skills', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->integer('level');
			$table->integer('points');
			$table->string('name');
		});

		Schema::create('players', function(Blueprint $table)
		{
			$table->increments('id')->unique();
			$table->string('name', 30);
			$table->string('surname', 30);
			$table->string('nickname', 30);
			$table->integer('age');
			$table->integer('wage');
			$table->integer('form');
			$table->integer('exp');
			$table->integer('leadership');
			$table->integer('tsp');
			$table->integer('tp');
			$table->integer('loyalty');
			$table->integer('specialty');
			$table->integer('sk1');
			$table->integer('sk2');
			$table->integer('sk3');
			$table->integer('sk4');
			$table->integer('sk5');
			$table->integer('sk6');
			$table->integer('sk7');
			$table->integer('sk8');
			$table->integer('sk9');
			$table->integer('sk10');
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::drop('skills');
		Schema::drop('form');
		Schema::drop('experience');
		Schema::drop('leadership');
		Schema::drop('loyalty');
		Schema::drop('specialty');
		Schema::drop('players');
	}

}
