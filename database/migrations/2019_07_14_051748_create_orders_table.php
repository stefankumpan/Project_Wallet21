<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('invoice_number')->default(0);
            $table->text('client');
            $table->text('product');
            $table->text('payment');
            $table->string('payment_method')->default(0);
            $table->decimal('tax', 9, 2)->default(0);
            $table->decimal('net_price', 9, 2)->default(0);
            $table->decimal('price', 9, 2)->default(0);
            $table->string('user_id')->index();
            $table->string('subscription_id')->index();
            $table->string('package_id')->index();
            $table->string('partner_id')->default(0)->index();
            $table->string('partner_key')->default('none')->index();
            $table->boolean('status')->default(1);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
