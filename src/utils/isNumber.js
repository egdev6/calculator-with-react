export default function isNumber(value){
	let val = parseInt(value);
	if(!isNaN(val)){
		return true;
	}else{
		return false;
	}
}