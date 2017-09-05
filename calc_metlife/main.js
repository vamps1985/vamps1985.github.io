let vklad = parseInt(document.getElementById('vklad').value);
	var termin = parseInt(document.getElementById('termin').value);
	var procent = parseInt(document.getElementById('procent').value);
	var procent = procent / 100;

	
	
	function fn() {
		var rez = 0;
		var x = 0;
		while(x<termin) 	{
				rez = rez + vklad;
				rez = parseInt(rez +(rez*procent));
				
				console.log(rez);
				x++;

		}
		document.getElementById("rz").innerHTML = rez;
	}