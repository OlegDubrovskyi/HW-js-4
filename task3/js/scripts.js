
		var myNumber = prompt("Введите число");
		var numberOfSteps;
		var maxNumber = 1;
		var sequence = [];
		var i = 1;

		while(myNumber!==1){

			if (myNumber % 2 === 0){
				myNumber = myNumber / 2;

			}else if (myNumber % 2 === 1){
				myNumber = myNumber * 3 + 1;
			}

			if(maxNumber < myNumber){
				maxNumber = myNumber;
			}

			sequence[i] = myNumber;
			numberOfSteps = i ;
			i++;
		}

		alert("Number of steps - "+ numberOfSteps);
		alert("Max number - "+ maxNumber);
		alert("Sequence Hayes - "+ sequence);
		
	
	
		
   

	