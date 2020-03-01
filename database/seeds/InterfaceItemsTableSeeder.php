<?php

use Illuminate\Database\Seeder;

class InterfaceItemsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('interface_items')->delete();
        
        \DB::table('interface_items')->insert(array (
            0 => 
            array (
                'id' => 1,
                'interface_id' => 1,
                'meta_object_id' => 1,
            ),
            1 => 
            array (
                'id' => 2,
                'interface_id' => 1,
                'meta_object_id' => 2,
            ),
            2 => 
            array (
                'id' => 3,
                'interface_id' => 1,
                'meta_object_id' => 3,
            ),
            3 => 
            array (
                'id' => 4,
                'interface_id' => 1,
                'meta_object_id' => 4,
            ),
            4 => 
            array (
                'id' => 5,
                'interface_id' => 3,
                'meta_object_id' => 2,
            ),
        ));
        
        
    }
}