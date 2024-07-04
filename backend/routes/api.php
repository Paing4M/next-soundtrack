<?php

use App\Http\Controllers\AuthController;
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
