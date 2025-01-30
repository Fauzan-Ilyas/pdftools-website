<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/pdf-merge', [HomeController::class, 'pdf_merge'])->name('pdf_merge');
Route::get('/pdf-split', [HomeController::class, 'pdf_split'])->name('pdf_split');
Route::get('/pdf_to_jpg', [HomeController::class, 'pdf_to_jpg'])->name('pdf_to_jpg');
Route::get('/jpg_to_pdf', [HomeController::class, 'jpg_to_pdf'])->name('jpg_to_pdf');
Route::get('/rotate_pdf', [HomeController::class, 'rotate_pdf'])->name('rotate_pdf');
Route::get('/compress_pdf', [HomeController::class, 'compress_pdf'])->name('compress_pdf');
Route::get('/word_to_pdf', [HomeController::class, 'word_to_pdf'])->name('word_to_pdf');
Route::get('/powerpoint_to_pdf', [HomeController::class, 'powerpoint_to_pdf'])->name('powerpoint_to_pdf');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
