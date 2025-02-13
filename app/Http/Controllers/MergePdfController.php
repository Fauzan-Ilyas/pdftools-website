<?php

namespace App\Http\Controllers;

use App\Providers\RouteServiceProvider;
use App\Services\UploadServices;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class MergePdfController extends Controller
{
    public function __construct(private UploadServices $uploadService) 
    {

    }
    
    public function index()
    {
        try {
            return Inertia::render('merge-pdf/Index');
        } catch (\Exception $e) {
            return back()->with([
                'error_msg' => $e->getMessage()
            ]);
        }
    }

    public function store(Request $request)
    {
        try {
            $token = $request->token;
            $files = $this->uploadService->handle(
                token: $token,
                files: $request->file('files'),
                directory: 'download/merged',
                service: RouteServiceProvider::MERGE_PDF
            );

            dispatch(new \App\Jobs\MergePdf(
                user: auth()->user(),
                token: $token,
                files: $files
            ));

            return to_route('merge_pdf.store', compact('token'));
        } catch (\Exception $e) {
            return back()->with([
                'error_msg' => $e->getMessage()
            ]);
        }
    }
}
