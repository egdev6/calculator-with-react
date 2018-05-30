import React, {Component} from 'react';
import Result from '../../Result/components/Result';
import ButtonContainer from '../../Buttons/containers/ButtonContainer';
import Calculate from '../../utils/Calculate';

class Calculator extends Component{

	constructor(props){
		super(props);
		this.state = {
			total: null,
			next: null,
			operation: false
		}
	}

	handleClick = () => {
		this.props.clickHandler;
	}

	render(){
		return (
			<div className="Calculator__Container">
				<Result />
				<ButtonContainer clickHandler={this.handleClick}/>
			</div>
		)
	}
}



export default Calculator;