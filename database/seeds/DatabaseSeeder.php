<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(MetaTypesTableSeeder::class);
        $this->call(MetaObjectsTableSeeder::class);
        $this->call(InterfacesTableSeeder::class);
        $this->call(InterfaceItemsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ProductsTableSeeder::class);
    }
}
