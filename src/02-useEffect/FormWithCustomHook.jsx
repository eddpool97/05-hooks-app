import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {


    const { formState, onInputChange } = useForm({
        username: '',
        email: '',
        password: ''
    });

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


        </>
  );
}
