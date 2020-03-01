<?php

use Illuminate\Database\Seeder;

class MetaObjectsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('meta_objects')->delete();
        
        \DB::table('meta_objects')->insert(array (
            0 => 
            array (
                'id' => 1,
                'meta_type_id' => 1,
                'table_name' => 'products',
                'name' => 'products',
                'title' => 'Товары',
            ),
            1 => 
            array (
                'id' => 2,
                'meta_type_id' => 1,
                'table_name' => 'partners',
                'name' => 'partners',
                'title' => 'Контрагенты',
            ),
            2 => 
            array (
                'id' => 3,
                'meta_type_id' => 2,
                'table_name' => 'outgoing_waybill',
                'name' => 'outgoing_waybill',
                'title' => 'Расходная накладная',
            ),
            3 => 
            array (
                'id' => 4,
                'meta_type_id' => 2,
                'table_name' => 'incoming_waybill',
                'name' => 'incoming_waybill',
                'title' => 'Приходная накладная',
            ),
        ));
        
        
    }
}