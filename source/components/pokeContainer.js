import React from 'react'
import PokeSearch from './pokeSearch'
import PokeList from './pokeList'
import pokms from '../../public/pokemons.json'

export default class PokeContainer extends React.Component{
	constructor(props){
		super(props)
		this.state = {inputValue:''}
	}

	searchBy(input){
		this.setState({ inputValue : input.target.value })
	}

	render(){
 		return	<div>
 							<h1>No esperes más! Encuentra toda la info sobre tu pokémon favorito.</h1>
 							<PokeSearch searchBy={this.searchBy.bind(this)} />
 							<PokeList pokemons={pokms} inputValue={this.state.inputValue.toLowerCase()}/>
 						</div>
            
	}

}

React.render(<PokeContainer />, document.getElementById('container'))


