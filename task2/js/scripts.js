	
	function factorial(){
		var result=1;
		for (var i=1; i<=myNumber; i++){
			result=result*i;
		}
		return result;
	}

	var myNumber = prompt("Введите число");

	alert(factorial(myNumber));
