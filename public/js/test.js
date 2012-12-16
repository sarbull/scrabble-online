var cuvant = "ABAC";

$.ajax({
	url: 'http://172.24.123.76/hackathon-final-webdev/Scrabble-Online/public/php/verifica_cuvant.php?cuvant='+cuvant,
	method:'get',
	success: function(transport) {
	    	response = parseInt(transport,10) || 0;
			   // alert("Success! \n\n" + response);
			   if (response != 0)
					console.log("ok");
			},
		failure: function() { alert('Something went wrong...'); }
					});

