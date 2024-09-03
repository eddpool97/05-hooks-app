import { useFetch } from "../hooks"



export const MultipleCustomHooks = () => {

    useFetch();
    
    fetch( 'https://pokeapi.co/api/v2/pokemon/1' )
    return (
        <div>MultipleCustomHooks</div>
    )
}
 