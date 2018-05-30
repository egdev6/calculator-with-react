import React, {Component} from 'react';
import Result from '../../Result/components/Result';
import ButtonContainer from '../../Buttons/containers/ButtonContainer';
import Calculate from '../../utils/Calculate';

class Calculator extends Component{

	constructor(props){
		super(props);
		this.state = {
			total: null,
			next: false
		}
	}

	handleClick = buttonValue => {
    this.setState(Calculate(this.state, buttonValue));
};

	render(){
    console.log(this.state);
		return (
			<div className="Calculator__Container">
				<Result value={this.state.total || "0"}/>
				<ButtonContainer clickHandler={this.handleClick}/>
			</div>
		)
	}
}



export default Calculator;