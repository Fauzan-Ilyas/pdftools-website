<?php

namespace App\Providers;

use COM;
use Illuminate\Support\ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    public const MERGE_PDF = 'merge-pdf';
    public const SPLIT_PDF = 'split-pdf';
    public const PDF_TO_PDF = 'pdf-to-pdf';
    public const JPT_TO_PDF = 'jpt-to-pdf';
    public const ROTATE_PDF = 'rotate-pdf';
    public const COMPRESS_PDF = 'compress-pdf';
    public const WORD_TO_PDF = 'word-to-pdf';
    public const POWERPOINT_TO_PDF = 'powerpoint-to-pdf';

    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
