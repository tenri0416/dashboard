<?php

namespace App\Http\Controllers;

use App\Models\LaungerFile;
use Illuminate\Http\Request;

class LaungtherComedyImagesController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        // 画像を取得
        // LaungerFile

        $count = LaungerFile::count();
        $randomInt = mt_rand(1, $count);
        $comedyImages = LaungerFile::find($randomInt);
        // storage_path を使って絶対パスを取得
        $pathImage = asset("{$comedyImages->filename}");
        // $pathImage = 'http://localhost:8000/storage/laughter'.$comedyImages->filename;
        
        return response()->json();
    }
}
