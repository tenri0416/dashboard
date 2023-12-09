<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'max:20'],
            'email' => ['required', 'string', 'email', 'max:50'],
            'password' => ['required', 'string', 'max:50', 'confirmed'],
        ];
    }

    public function messages(): array
    {
        return [
            'name.required' => '名前は必須です',
            'name.max' => '名前は20文字以内にしてください',
            'email.required' => 'メールアドレスは必須です',
            'email.email' => '正しいメールアドレスを入力してください',
            'email.max' => 'メールアドレスは最大50文字以内にしてください',
            'password.required' => 'パスワードは必須です。',
            'password.max' => 'パスワードは50文字以内にしてください',
            'password.confirmed' => 'パスワードが一致していません'
        ];
    }
}
