export default function Operation(value1, value2, operation){
	switch(operation){
		case "+":
			return (parseFloat(value1) + parseFloat(value2));
		break;
		case "-":
			return (parseFloat(value1) - parseFloat(value2));
		break;
		case "÷":
			return (parseFloat(value1) / parseFloat(value2));
		break;
		case "x":
			return (parseFloat(value1) * parseFloat(value2));
		break;
		case "%":
			return (parseFloat(value1) * (parseFloat(value2)/100))
		break;
	}
}