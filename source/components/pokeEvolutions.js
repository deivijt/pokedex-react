import React from 'react'
import uid from 'uid'

export default class PokeEvolutions extends React.Component{

	render(){

		return <div className="PokeDetail-evolutions">
            <h4>Evoluciones:</h4>
            {
            	this.props.pokemon.evolution
            	.map(pkm => <figure key={uid()}><img src={`images/pokemons/${pkm}.jpg`} width="80"/></figure>)	
            }
            
           </div>
	}
}