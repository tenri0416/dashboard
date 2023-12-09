<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Request;


class RegisterController extends Controller
{
    /**
     * 会員登録
     */
    public function __invoke(RegisterRequest $request)
    // public function __invoke(Request $request)
    {
        $name = $request->input('name');
        $email = $request->input('email');
        $password = $request->input('password');
        $confirmPassword = $request->input('password_confirmation');
        $data = [
            'name' => $name,
            'email' => $email,
            'password' => $password,
            'password_confirmation' => $confirmPassword
        ];
        return response()->json($data);
    }
}
