import React from 'react'

export default class PokeRow extends React.Component{
	
  render(){
    return <ul>
      	     <li>{this.props.children}</li>
             <li>{this.props.property}</li>
           </ul>          
	}
}
                
               
                
                
                