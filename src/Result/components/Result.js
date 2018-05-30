import React, {Component} from 'react';

class Result extends Component{
	render(){
		return (
			<div className="Result">
				<div>{this.props.value}</div>
			</div>
		)
	}
}

export default Result;