'use client'
import React, { useState } from 'react'
import { useForm} from 'react-hook-form';

type FormUser = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function Register() {
    const { register, handleSubmit, formState: { errors } } = useForm <FormUser> ();
    const [error , setError] = useState([]);

    const onSubmit = async (data:FormUser) => {
        console.log(data);
        try {
            const response = await fetch('http://localhost:8000/api/register' , {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        
            const result = await response.json();
            console.log(result);
            console.log(response.status);
            if (!response.ok) {
                setError(result.errors);
                console.log(result.errors.password);
            }
            // console.log(response.status);
            // console.log(result.errors);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
      <>
        <h1>会員登録</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>名前</label>
                <input type="text" id="name" {...register('name', { required : '名前は必須です。'})} />
                {/* {errors.name && <p>{errors.name.message}</p>} */}
            </div>
            <div>
            {/* {error ?? error} */}
                <label>メールアドレス</label>
                {/* <input type="email" id="email" {...register('email', {
                    required: 'メールアドレスは必須です。',
                    })}/> */}
                     {errors.email && <p>{errors.email.message}</p>}
                <input type="text" id="email" {...register('email')}/>
            </div>
            <div>
                {/* {error ?? error} */}
                <label>パスワード</label>
                <input type="password" id="password" {...register('password')}/>
            </div>
            <div>
                <label>確認用パスワード</label>
                {/* <input type="password" id="confirm-password" {...register('confirm-password')}/>
                {errors['confirm-password'] && <p>{errors['confirm-password'].message}</p>} */}
                <input type="password" id="password_confirmation" {...register('password_confirmation')} />
                    {errors.password && <p>{errors.password.message}</p>}
            </div>
                    {/* {errors ?? <p>{errors}</p>} */}
            <button type='submit'>登録</button>
        </form>
      </>
    );
  }
//rafce
//nafe


// ClientからServerをimportするのはダメ
// ServerをPropsとしてClientに渡すのはOK

//server/page.tsx

// return (
//     <>
//     <ClientComponent>
//     </>
// )


//state は毎回違う値を作成してる