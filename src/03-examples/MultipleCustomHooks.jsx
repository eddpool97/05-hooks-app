/* eslint-disable no-unused-vars */
import { useCounter, useFetch } from '../hooks';
import { LoadingMessage } from './LoadingMessage';
import { PokemonCard } from './PokemonCard';


export const MultipleCustomHooks = () => {


    const { counter, increment, decrement, reset} = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);
    
    return (
        <>
            <h1>Informacion de Pokémon</h1>
            <hr />

            { isLoading 
                ? <LoadingMessage />
                : ( <PokemonCard 
                    id={counter} 
                    name={data?.name} 
                    sprites={[
                        data?.sprites.front_default,
                        data?.sprites.front_shiny,
                        data?.sprites.back_default,
                        data?.sprites.back_shiny
                    ]}/> 
                )
            }

            <button
                className="btn btn-primary"
                //Evita que el valor del counter llegue a "cero", ya que ese ID no existe en la API
                onClick={ ()=> counter > 1 ? decrement(1): null }
            >
                Anterior</button>

            <button
                className='btn btn-warning'
                onClick={ reset }
            >
                Reiniciar
                </button>

            <button
                className="btn btn-primary"
                onClick={()=> increment(1)}
            >
                Siguiente</button>

        </>
    )
}
 