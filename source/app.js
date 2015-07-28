import React from 'react'
import { default as Router, Route, NotFoundRoute } from 'react-router'
import PokeContainer from './components/pokeContainer'
import PokeDetail from './components/pokeDetail'

class NotFound extends React.Component{
	render(){
		return <h1>Lo sentimos... el recurso {this.props.params.splat} no fue encontrado:(</h1>
	}
}

let routes = <Route>
								<Route path="/" handler={PokeContainer} />
								<Route path="/pokemon/:name" handler={PokeDetail} />
								<NotFoundRoute handler={NotFound} />
						 </Route>

Router.run(routes, Router.HashLocation, (Root) => {
	React.render(<Root />, document.getElementById('container'))
})