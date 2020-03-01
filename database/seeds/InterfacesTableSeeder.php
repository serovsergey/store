<?php

use Illuminate\Database\Seeder;

class InterfacesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('interfaces')->delete();
        
        \DB::table('interfaces')->insert(array (
            0 => 
            array (
                'id' => 1,
                'title' => 'admin',
            ),
            1 => 
            array (
                'id' => 2,
                'title' => 'Директор',
            ),
            2 => 
            array (
                'id' => 3,
                'title' => 'Бухгалтер',
            ),
            3 => 
            array (
                'id' => 4,
                'title' => 'Продавец',
            ),
        ));
        
        
    }
}