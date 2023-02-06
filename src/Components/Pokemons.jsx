import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Pokemons = () => {

    const [pokemonlist, setPokemonlist] = useState([]);
    const buscarDatos = () => {
        fetch("https://pokeapi.co/api/v2/pokemon")
        .then(response => {
            return response.json();
        }).then(response => {
            console.log(response.results);
            setPokemonlist(response.results.map((pokemon)=>pokemon.name));
        }).catch(err => {
            console.log(err);
        });
    }
    return (
        <>
            <button className='btn' onClick={buscarDatos}>Obtener Pokémon</button>
            <ul className='ul'>
                {
                    pokemonlist.map((pokemon, indice) => <li key={indice}>{pokemon}</li>)
                }
            </ul>
        </>
    )
}
