<?php

use ESMNGR\Models\Player;
use Illuminate\Database\Seeder;

class PlayerTableSeeder extends Seeder {

    public function run()
    {
        DB::table('players')->delete();

        Player::create(array(
            'name' => 'John',
            'surname' => 'Cena',
            'nickname' => 'The Terminator',
            'age' => 18,
            'wage' => 0,
            'form' => 4,
            'exp' => 3,
            'leadership' => 4,
            'tsp' => 1000,
            'tp' => 100,
            'loyalty' => 3,
            'specialty' => 2,
            'sk1' => 4,
            'sk2' => 5,
            'sk3' => 7,
            'sk4' => 8,
            'sk5' => 6,
            'sk6' => 5,
            'sk7' => 1,
            'sk8' => 3,
            'sk9' => 5,
            'sk10' => 7,
        ));
    }
}
