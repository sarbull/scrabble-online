function verify() {

	var alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "X", "Z"];
	var punctaj = [1, 9, 1, 2, 1, 8, 9, 10, 1, 10, 1, 4, 1, 1, 2, 1, 1, 1, 1, 8, 10, 10];
	var cuvintenoi = [];
	var multiplicator = 1;
	var i;
	var j;
	var ok = 1; //verifica daca cuvintele sunt ok sau nu
	var punctajpartial = 0;
	var punctajtotal = 0;


	//verificare pe linii
	for (i=1; i<16; i++) {
		var cuvant = "";
		for (j=1; j<16; j++) {
			var x = document.getElementById("c"+i+j);
			if (x.innerHtml != "") {
				var culoare = x.getAttribute("style");
				if (culoare == "")
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
				if (culoare == "background-color:#f4cecd") {
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
					multiplicat = multiplicator * 2;
				}
				if (culoare == "background-color:#66c9") {
					punctajpartial = punctajpartial + 3*punctaj[alfabet.indexOf(x.innerHtml)];
				}
				if (culoare == "background-color:#ee3940") {
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
					multiplicat = multiplicator * 3;
				}
				if (culoare == "background-color:#b8cc69") {
					punctajpartial = punctajpartial + 2*punctaj[alfabet.indexOf(x.innerHtml)];
				}
				cuvant = cuvant + x.innerHtml;
			}
			if (x.innerHtml == "") {
				if (cuvintedepetabela.indexOf(cuvant) == -1) {
					var response;
					$.ajax({
						url: 'http://172.24.123.76/hackathon-final-webdev/Scrabble-Online/public/php/verifica_cuvant.php?cuvant='+cuvant,
						method:'get',
						success: function(transport) {
	    					response = parseInt(transport,10) || 0;
			   				// alert("Success! \n\n" + response);
						},
						failure: function() { alert('Something went wrong...'); }
					});
					if (response != 0) {
						cuvintenoi = cuvintenoi.concat(cuvant);
						cuvant = "";
						punctajtotal = punctajtotal + multiplicator * punctajpartial;
						multiplicator = 1;
						punctajpartial = 0;
					}
					else
						ok = 0;
				}
			}
		}
	}

	//verificare pe coloane

	punctajpartial = 0;
	multiplicator = 1;

	for (i=1; i<16; i++) {
		var cuvant = "";
		for (j=1; j<16; j++) {
			var x = document.getElementById("c"+j+i);
			if (x.innerHtml != "") {
				var culoare = x.getAttribute("style");
				if (culoare == "")
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
				if (culoare == "background-color:#f4cecd") {
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
					multiplicat = multiplicator * 2;
				}
				if (culoare == "background-color:#66c9") {
					punctajpartial = punctajpartial + 3*punctaj[alfabet.indexOf(x.innerHtml)];
				}
				if (culoare == "background-color:#ee3940") {
					punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x.innerHtml)];
					multiplicat = multiplicator * 3;
				}
				if (culoare == "background-color:#b8cc69") {
					punctajpartial = punctajpartial + 2*punctaj[alfabet.indexOf(x.innerHtml)];
				}
				cuvant = cuvant + x.innerHtml;
			}
			if (x.innerHtml == "") {
				if (cuvintedepetabela.indexOf(cuvant) == -1) {
					var response;
					$.ajax({
						url: 'http://172.24.123.76/hackathon-final-webdev/Scrabble-Online/public/php/verifica_cuvant.php?cuvant='+cuvant,
						method:'get',
						success: function(transport) {
	    					response = parseInt(transport,10) || 0;
			   				// alert("Success! \n\n" + response);
						},
						failure: function() { alert('Something went wrong...'); }
					});
					if (response != 0) {
						cuvintenoi = cuvintenoi.concat(cuvant);
						cuvant = "";
						punctajtotal = punctajtotal + multiplicator * punctajpartial;
						multiplicator = 1;
						punctajpartial = 0;
					}
					else
						ok = 0;
				}
			}
		}
	}

	if (ok != 1 || cuvintenoi.length == 0)
		
}