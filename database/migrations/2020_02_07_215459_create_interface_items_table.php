<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInterfaceItemsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('interface_items', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('interface_id');
            $table->unsignedBigInteger('meta_object_id');

            $table->foreign('interface_id')->references('id')->on('interfaces');
            $table->foreign('meta_object_id')->references('id')->on('meta_objects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('interface_items');
    }
}
