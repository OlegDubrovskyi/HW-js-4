

	function factorial(){
		var myNumber = prompt("Введите число");
		var result=1;
		for (var i=1; i<=myNumber; i++){
			result=result*i;
		}
		alert(result);
	}

	factorial();
