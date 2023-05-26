setInterval (second, 1000);

			function second() {
	 		let today = new Date();
	 		let s = today.getSeconds();					
	 		 if (s < 10)
       { document.getElementById("seconds").innerHTML= "0" + s + " s";

		}

	else { document.getElementById("seconds").innerHTML = s + " s";
				 
		}
									 	
		}


setInterval (minute)
 function minute() {
	let today = new Date();	
	let m = today.getMinutes();
     if (m < 10)
     { document.getElementById("minutes").innerHTML = "0" + m + " m";

    }
        else {	document.getElementById("minutes").innerHTML = m + " m";

	      	}

	    	}


		setInterval (hour)
		function hour() {
	 	let today = new Date();
		let h = today.getHours();
      
	 if ( h > 12 )
     {	document.getElementById("hours").innerHTML = "0" + (h-12) + " PM";

	 }

       else if ( h = 12)
      {  document.getElementById("hours").innerHTML = h + " PM"

      }
      
	else { document.getElementById("hours").innerHTML = "0" + h + " AM";

	}
	} 