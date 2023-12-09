<?php

namespace App\Http\Controllers\Laughter;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\View\View;
use App\Models\LaungerFile;


class UploadViewController extends Controller
{
    /**
     * ボケ画像をアップロードする
     * 
     * @return View
     */
    public function __invoke(): View
    {
        return view('laughter.upload');
    }
}
