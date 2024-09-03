/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const initialFormValue = {
        username: '',
        email: '',
        password: ''
    };


    const { formState, onInputChange, onResetForm } = useForm(initialFormValue);

    const { username, email, password} = formState;

    return (
        <>
            <h1>Simple FormWithCustomHook</h1>
            <hr />

            <input 
                type="text" 
                className="form-control mt-2"
                placeholder="Username"
                name="username"
                value={username}
                onChange={ onInputChange }
            />

            <input 
                type="email" 
                className="form-control mt-2"
                placeholder="edwin@google.com"
                name="email"
                value={email}
                onChange={ onInputChange }
            />

            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={ onInputChange }
            />

            <button
                onClick={ onResetForm } 
                className='btn btn-primary mt-4'>
                Reset
            </button>
        </>
  );
}
