<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'index'])->name('pages.home');
Route::get('/about', [PagesController::class, 'about'])->name('pages.about');