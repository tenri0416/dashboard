<?php

use App\Http\Controllers\Laughter\UploadController;
use App\Http\Controllers\Laughter\UploadViewController;
use App\Http\Controllers\Laungther\StartViewController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('upload', UploadViewController::class)->name('upload');
Route::post('upload', UploadController::class)->name('upload');

// // ゲームスタート
// Route::get('start', StartViewController::class)->name('start');