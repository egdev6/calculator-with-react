import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Button extends Component {
	
	handleClick = () =>{
		this.props.clickHandler(this.props.value);
	}

	render(){
		const className = [
			"Button",
			this.props.operation ? "operation" : "",
			this.props.expand ? "expand" : ""
		];
		return (
			<button className={className.join(" ").trim()} onClick={this.handleClick}>
				{this.props.value}
			</button>
		)
	}
}

Button.propTypes = {
	value: PropTypes.string,
	operation: PropTypes.bool,
	expand: PropTypes.bool,
	clickHandler: PropTypes.func
}

export default Button;