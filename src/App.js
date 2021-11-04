import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import pokemon from './image/pokemon.jpg'
import CantidadPokemon from './components/CantidadPokemon';
import ComprarPokemon from './components/ComprarPokemon';
import store from './redux/store'
import {Provider} from "react-redux";
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';
import CantidadPokemonHook from './components/CantidadPokemon.hook';
import ComprarPokemonHook from './components/ComprarPokemon.hook';
import RadioButton from './components/RadioButton';
import RadioButtonHook from './components/RadioButtonHook';

function App() {

  console.log(store.getState());

  return (
    <Provider store={store}>
      <div className="App container">
        <div className="row">
          <div className="col-12">
            
            <div className="card mt-5" style={{maxWidth: '370px'}}>
              <div className="row no-gutters">
                <div className="col-4">
                  <img src={pokemon} alt="pokemon" className="card-img" />
                </div>
                <div className="col-8">
                  <div className="card-body">
                    <div className="card-title h3 text-center">
                      {/* <CantidadPokemon></CantidadPokemon> */}
                      <CantidadPokemonHook></CantidadPokemonHook>
                    </div>
                      <ComprarPokemonHook></ComprarPokemonHook>
                      {/* <ComprarPokemon></ComprarPokemon>              */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 mt-4 border-top pt-3">
            <BuscadorPokemon/>
          </div>
          <div className="col-12">
            <ResultadoPokemon/>
            <RadioButtonHook/>
          </div>
        </div>            
        {/* <RadioButton/> */}
      </div>
    </Provider>
  );
}

export default App;
