<?php

namespace App\Http\Controllers\Laughter;

use InterventionImage;
use App\Http\Controllers\Controller;
use App\Models\LaungerFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage ;


class UploadController extends Controller
{
    public function __invoke(Request $request)
    {
        $imageFile = $request->image;
        if (!is_null($imageFile) && $imageFile->isValid()) {
            //Storage::putFile('public/laughter', $imageFile);
            $fileName = uniqid(rand(), '_');
            // 拡張子取得
            $extension = $imageFile->extension();
            $fileNameToStore = $fileName. '.'.$extension;
            $resizedImage = InterventionImage::make($imageFile)->resize(1920, 1080)->encode();
            Storage::put('public/'.$fileNameToStore, $resizedImage);
            // dd($fileNameToStore, $resizedImage);
            try {
                LaungerFile::create(['filename' => $fileNameToStore]);
            } catch (\Exception $e) {
                dd($e);
            }
        }
        return redirect()->route('upload')->with('status', '画像保存完了');
    }
}
