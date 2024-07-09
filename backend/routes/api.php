<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MusicController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Psy\Readline\Hoa\IteratorFileSystem;

Route::get('/user', function (Request $request) {
  return $request->user();
})->middleware('auth:sanctum');


// auth
Route::prefix('auth')->group(function () {
  Route::post('/login', [AuthController::class, 'login']);
  Route::post('/register', [AuthController::class, 'register']);
  Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');
});


// music
Route::get('/music', [MusicController::class, 'index']);
Route::get('/music/{music}', [MusicController::class, 'show']);
Route::get('/music/stream/{music}', [MusicController::class, 'stream'])->middleware('header');
Route::post('/music', [MusicController::class, 'store'])->middleware(['auth:sanctum', 'admin']);
