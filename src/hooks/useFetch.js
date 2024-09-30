/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from 'react';



export const useFetch = ( url ) => {

    useFetch

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    });


    const getFetch = async()=>{

        setLoadingState();

        const response = await fetch( url );
        const data = await response.json();


        await new Promise( resolve => setTimeout( resolve, 1000) )

        if( !response.ok ){
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: response.status,
                    message: response.statusText
                }
            })

            return;
        }

        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null
        })


        //manejo del caché
    }

    useEffect(()=>{
        getFetch();
    }, [ url ]);


    const setLoadingState = ()=>{
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        setState,
        getFetch
    }
}
