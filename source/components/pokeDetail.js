import React from 'react'
import PokeImage from './pokeImage'
import PokeRow from './pokeRow'
import PokeEvolutions from './pokeEvolutions'
import pokemons from '../../public/pokemons.json'

export default class PokeDetail extends React.Component{
	constructor(props){
		super(props)
		this.pkmName = this.props.params.name
		this.pokemon = pokemons.filter(pkmn => pkmn.name == this.pkmName)[0]
	}

	render(){
		if(this.pokemon === undefined){
			return <h1> {this.pkmName} no es un Pokémon :(</h1>
		}
		else{
			return <section className="PokeDetail">
			       	
			       	<div className="PokeDetail-images">
			       		<PokeImage pkmName={this.pkmName}/>
			          <PokeEvolutions pokemon={this.pokemon}/>
			        </div>

			        <div className="PokeDetail-info">
			        	<h4>{this.pokemon.name}</h4>
			          <PokeRow property={this.pokemon.type}>Type</PokeRow>
			          <PokeRow property={this.pokemon.species}>Species</PokeRow>
			          <PokeRow property={this.pokemon.stats.attack}>Attack</PokeRow>
			          <PokeRow property={this.pokemon.stats.defense}>Defense</PokeRow>
			          <PokeRow property={this.pokemon.stats.hp}>Hp</PokeRow>
			          <PokeRow property={this.pokemon.stats.speed}>Speed</PokeRow>
			        </div>

			       </section>
		}
	}
}