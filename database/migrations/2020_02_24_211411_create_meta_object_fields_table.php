<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMetaObjectFieldsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('meta_object_fields', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('meta_object_id');
            $table->string('name');
            $table->string('title');
            $table->unsignedBigInteger('source_meta_object_id')->nullable();

            $table->foreign('meta_object_id')->references('id')->on('meta_objects');
            $table->foreign('source_meta_object_id')->references('id')->on('meta_objects');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('meta_object_fields');
    }
}
