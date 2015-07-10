import React from 'react'

export default class Index extends React.Component{
	render(){
		return (
				<html lang="es">
        <head>
          <meta charser="utf-8" />
          <title>{this.props.title}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <link rel="stylesheet" href="styles/style.css" />
        </head>
        <body>
        	<header>
        		<div>
        			<figure>
        				<img src="images/logo.png" width="220"/>
        			</figure>
        			<a href="https://github.com/deivijt/pokedex-react" target="_blank">
        				<img src="images/repo.png" width="40"/> 
        			</a>
        		</div>
        	</header>
          <section id="container">
          
          </section>
          
          <script src="js/build.js"></script>
        </body>
      </html>
		)
	}
}