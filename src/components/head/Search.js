import React, {Component} from 'react'

class Search extends Component{
	render(){
		return(
			<div className="search-box head-item">
				<input className="search-txt" type="text" name="" placeholder="Type to search"/>
				<a id="search-btn" className="search-btn" href="#">
					<i class="fas fa-search"></i>
				</a>
			</div>
		);
	}
}

export default Search