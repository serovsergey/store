<?php

use Illuminate\Database\Seeder;

class MetaTypesTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('meta_types')->delete();
        
        \DB::table('meta_types')->insert(array (
            0 => 
            array (
                'id' => 1,
                'name' => 'catalog',
                'title' => 'Справочник',
                'ptitle' => 'Справочники',
            ),
            1 => 
            array (
                'id' => 2,
                'name' => 'document',
                'title' => 'Документ',
                'ptitle' => 'Документы',
            ),
        ));
        
        
    }
}