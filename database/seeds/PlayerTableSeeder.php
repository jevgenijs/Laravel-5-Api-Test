<?php

use ESMNGR\Models\Player;
use ESMNGR\Models\Team;
use Illuminate\Database\Seeder;

class PlayerTableSeeder extends Seeder {

    public function run()
    {
        DB::table('players')->delete();

        Player::create(array(
            'name'       => 'John',
            'surname'    => 'Cena',
            'nickname'   => 'The Terminator',
            'age'        => 18,
            'wage'       => 0,
            'form'       => 4,
            'exp'        => 3,
            'leadership' => 4,
            'tsp'        => 1000,
            'tp'         => 100,
            'loyalty'    => 3,
            'specialty'  => 2,
            'sk1'        => 4,
            'sk2'        => 5,
            'sk3'        => 7,
            'sk4'        => 8,
            'sk5'        => 6,
            'sk6'        => 5,
            'sk7'        => 1,
            'sk8'        => 3,
            'sk9'        => 5,
            'sk10'       => 7,
        ));

        DB::table('teams')->delete();

        Team::create(array(
            'name'     => 'Lethal Rangers',
            'logo'     => 'logo.png',
            'founded'  => '20150715 13:32:00',
            'manager'  => 1,
            'pl1'      => 1,
            'pl2'      => 2,
            'pl3'      => 3,
            'pl4'      => 4,
            'pl5'      => 5,
            'coach'    => 1,
            'staff'    => 1,
            'synergy'  => 3,
            'momentum' => 2,
            'mood'     => 5
        ));
    }
}
