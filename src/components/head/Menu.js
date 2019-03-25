import React, {Component} from 'react'

class Menu extends Component{
	render(){
		return(
				<div className="head-item menu">
					<button id="btn-menu" className="btn-menu">
						<i class="fas fa-bars"></i>
					</button>
				</div>
			);
	}	
}

export default Menu