import React, { Component} from 'react';
import {connect} from 'react-redux';
import {buy_pokemon_action, return_pokemon_action} from '../redux/actions/gameShopAction'

class ComprarPokemon extends Component {
    render() {
        return(
           <div>
               <button className="btn btn-dark btn-sm m-2" onClick={() =>{
                   this.props.buy_pokemon_action(1);
                }}>Comprar Pokemon</button>
               <button className="btn btn-dark btn-sm m-1" onClick={() =>{
                   this.props.return_pokemon_action(1);
               }}>Devolver Pokemon</button>
           </div>
        );
    }
}

const mapDispatchToProps = {
    buy_pokemon_action,
    return_pokemon_action
};

// const mapDispatchToProps = () => ({

// })

export default connect(null, mapDispatchToProps)(ComprarPokemon);
// export default ComprarPokemon;