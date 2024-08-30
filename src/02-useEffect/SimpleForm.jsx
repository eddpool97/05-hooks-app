import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'eddpool',
        email: 'edwin.ayala@google.com'

    });

    const onInputChange = ( { target } )=>{
        const { name, value } = target;
        setFormState({
            ...formState,
            //Propiedad computada de objetos en JavaScript
            [ name ]: value
        });
    }

    useEffect( ()=>{
        //console.log('FormState changed');
    }, [ formState ]);

    useEffect( ()=>{
        //console.log('email changed');
    }, [ email ]);

    return (
        <>
            <h1>Simple Form</h1>
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

            {
                //Condicional 'if' abreviada
                ( username === 'eddpool97' ) && <Message />
            }
        </>
  );
}
