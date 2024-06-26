<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bus_confirm', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_id');
            $table->string('bus_id');
            $table->string('user_id');
            $table->string('price');
            $table->string('seat_numbers');
            $table->string('booking_start_date');
            $table->string('booking_status');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bus_confirm');
    }
};
