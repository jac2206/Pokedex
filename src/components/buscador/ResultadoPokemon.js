import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {

    const buscador = useSelector((state) => state.buscador);

    return(
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warning">Buscando...</div>}
            {buscador.pokemon.length >= 1 && 
                <div className="text-success">
                    <img src={buscador.pokemon[0].sprites.front_default} alt="Pokemon"/>
                    <img src={buscador.pokemon[0].sprites.other.dream_world.front_default} alt="Pokemon"/>
                    {/* <img src={buscador.pokemon[0].sprites.versions.json.content["generation-ii"].back_default} alt="Pokemon"/> */}

                    <span>{buscador.pokemon[0].name}</span>
                </div>}
            {buscador.pokemon.length >= 1 &&
                <div className="text-success">                   
                    <span>{"# POKEDEX = " + buscador.pokemon[0].order}</span>
                </div>}
                {buscador.pokemon.length >= 1 &&
            <div className="text-success">                   
                <span>{"TIPO = " + buscador.pokemon[0].types[0].type.name}</span>
            </div>}
            {buscador.error !== '' && <span className="text-danger">Error</span>}
        </div>

    );
}

export default ResultadoPokemon;