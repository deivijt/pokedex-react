import React from 'react'

export default class Search extends React.Component{
	render(){
		return <div className="Search">
            	<input type="text" placeholder="Buscar Pokémon" onChange={this.props.searchBy}/>
            	<img src="images/search.png"/>
           </div>
	}
}