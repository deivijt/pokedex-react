import React from 'react'
import Pokemon from './pokemon'

export default class PokeList extends React.Component{
	
	render(){
		return <div className="Pokemons">
        		{
        			this.props.pokemons.map( pokemon => {
        				if(pokemon.name.search(this.props.inputValue) >  -1) {
        					return <Pokemon key={pokemon.id} pokemon={pokemon}/>		
        				}	
        			
        			})
        		}	            			            		
           </div>
	}
}