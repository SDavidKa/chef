import React, {Component} from 'react'
import Search from './Search.js'
import Menu from './Menu.js'

class Head extends Component{
	render(){
		return(
			<div className="head-container">
				<div className="head-item logo">
					<a href="#" className="logo-chef">Chef Po</a>
				</div>
				<Search />
				<Menu />
			</div>
		);
	}
}

export default Head