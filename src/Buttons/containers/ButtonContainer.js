import React, {Component} from 'react';
import Button from '../components/Button';

class ButtonContainer extends Component {
	
	handleClick = buttonValue => {
		this.props.clickHandler(buttonValue);
	};
	render(){
		return (
			<div className="ButtonContainer">
				<div className="Row">
					<Button value="AC" clickHandler={this.handleClick}/>
					<Button value="C" clickHandler={this.handleClick}/>
					<Button value="%" clickHandler={this.handleClick}/>
					<Button value="÷" clickHandler={this.handleClick} operation/>
				</div>
				<div className="Row">
					<Button value="7" clickHandler={this.handleClick}/>
					<Button value="8" clickHandler={this.handleClick}/>
					<Button value="9" clickHandler={this.handleClick}/>
					<Button value="x" clickHandler={this.handleClick} operation/>					
				</div>
				<div className="Row">
					<Button value="4" clickHandler={this.handleClick}/>
					<Button value="5" clickHandler={this.handleClick}/>
					<Button value="6" clickHandler={this.handleClick}/>
					<Button value="+" clickHandler={this.handleClick} operation/>
				</div>
				<div className="Row">
					<Button value="1" clickHandler={this.handleClick}/>
					<Button value="2" clickHandler={this.handleClick}/>
					<Button value="3" clickHandler={this.handleClick}/>
					<Button value="-" clickHandler={this.handleClick} operation/>
				</div>
				<div className="Row">
					<Button value="0" clickHandler={this.handleClick} expand/>
					<Button value="." clickHandler={this.handleClick}/>
					<Button value="=" clickHandler={this.handleClick} operation/>
				</div>
			</div>
		)
	}
}
export default ButtonContainer;