<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePartnerEarningsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('partner_earnings', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('partner_id')->index();
            $table->string('order_id')->index();
            $table->string('order_invoice_number')->index();
            $table->float('revenue',9,2)->default(0);
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
        Schema::dropIfExists('partner_earnings');
    }
}
