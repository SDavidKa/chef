import React, {Component} from 'react'
import Search from './Search'

class Head extends Component{
	render(){
		return(
			<div>
				<img src="https://image.freepik.com/free-vector/chef-logo-vector_20448-270.jpg" alt="logo" className="logo"/>
				<Search />
			</div>
		);
	}
}

export default Head