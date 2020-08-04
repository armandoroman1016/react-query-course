import React from "react";
import { usePokemonSearch } from "../Queries/queries";
export default function Search() {
    const [pokemon, setPokemon] = React.useState("");
    const queryInfo = usePokemonSearch(pokemon);

    const handleChange = (e) => setPokemon(e.target.value);

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Enter a pokemon"
                value={pokemon}
                onChange={handleChange}
            />
            <button onClick={() => setPokemon(pokemon)}>GET POKEMON</button>
            {queryInfo.isLoading ? (
                "Loading ..."
            ) : queryInfo.isError ? (
                queryInfo.error.message
            ) : (
                queryInfo?.data?.sprites?.front_default ? 
                    <img src={queryInfo.data.sprites.front_default} alt="pokemon" />
                : "Pokemon not found"
                
            )}
        </React.Fragment>
    );
}
