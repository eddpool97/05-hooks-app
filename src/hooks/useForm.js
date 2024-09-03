/* {
    username: '',
    email: '',
    password: ''
} */

import { useState } from 'react';


export const useForm = ( initialForm = {} ) => {
    
    const [ formState, setFormState ] = useState( initialForm );

    const onInputChange = ( { target } )=>{
        const { name, value } = target;
        setFormState({
            ...formState,
            //Propiedad computada de objetos en JavaScript
            [ name ]: value
        });
    }

    const onResetForm = ()=> {
        setFormState( initialForm );
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
