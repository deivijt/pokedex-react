import React from 'react'

export default class PokeImage extends React.Component{
	render(){
		return <figure className="PokeDetail-image">
           	 <img src={`images/pokemons/${this.props.pkmName}.jpg`}/>
           </figure>
	}
}