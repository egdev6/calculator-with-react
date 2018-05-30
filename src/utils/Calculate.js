import Operation from './Operation';
import isNumber from './isNumber';

var number1 = "";
var number2 = "";
var op = null;

export default function Calculate(state, value){
	let num = "";
	//Next=true --> se ha seleccionado operacion y se introduce el segundo numero
	//Next=false --> se está introduciendo el primer numero

	if(isNumber(value) || value == "."){
		//El valor introducido es un numero o el . de float
		//Concatenamos los valores del numero seleccionado
		if(!state.next){
			number1 += value;
			num = number1;
		}else{
			number2 += value;
			num = number2;
		}
		//Devolvemos el numero concatenado
		return {
			total: num
		}
	}else{
		//El valor introducido es una operacion
		if(!state.next || number2 == ""){
			if(value == "CE" || value == "C"){
				//Reset
				number1 = "";
				number2 = "";
				op = null;
				return{
					total: null,
					next: false
				}
			}else{
				//Asignamos operacion
				op = value;
				return {
					total: number1,
					next:true
				}
			}
		}else{
			if(op && state.next){
				//Realizamos operacion
				let result = Operation(number1,number2,op);
				if(op == "CE" || op == "C"){
					//Reset
					number1 = "";
					number2 = "";
					op = null;
					return{
						total: null,
						next: false
					}
				}else if(op != "="){
					//Cualquier operacion menos la suma
					number1 = result;
					number2 = "";
					op= value;
					return{
						total: result,
						next: true
					}
				}else{
					//Suma
					number1 = "";
					number2 = "";
					op = null;
					return{
						total: result,
						next: false
					}
				}
			}
		}
	}
}