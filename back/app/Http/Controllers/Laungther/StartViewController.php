<?php

namespace App\Http\Controllers\Laungther;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class StartViewController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        return view('laughter.start');
    }
}
