<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AppController;

Route::get('/auth/{any}', [AppController::class, 'index'])->where('any', '.*')->name('lvs.index.auth.any');
Route::get('/auth', function () { return redirect()->route('lvs.index.auth.any', 'login'); } );
Route::get('', [AppController::class, 'index'])->where('any', '.*')->name('lvs.index');
Route::get('{any}', [AppController::class, 'index'])->where('any', '.*')->name('lvs.index.any');
