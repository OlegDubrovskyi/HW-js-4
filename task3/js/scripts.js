
		var myNumber = prompt("Введите число");
		var result;
		var maxNumber=1;
		var i=1;
		while(myNumber!==1){
			if (myNumber % 2 === 0){
			myNumber=myNumber/2;
			}else if (myNumber % 2 === 1){
			myNumber=myNumber*3+1;
			}
			if(maxNumber<myNumber){
				maxNumber=myNumber;
			}
			result=i;
			i++;
		}
		alert(result);
		alert(maxNumber);
	
	
		
   

	