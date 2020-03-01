<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetaObjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_objects', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('meta_type_id');
            $table->string('table_name');
            $table->string('name');
            $table->string('title');

            $table->foreign('meta_type_id')->references('id')->on('meta_types');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meta_objects');
    }
}
