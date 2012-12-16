var i,j,c;
var cuvintedepetabela=[];

function verify() {
	var cuvintenoi[];
	var ok = 1;
	//verificare pe randuri
	for (i=1; i<3; i++) {
		for (j=1; j<3; j++) {
			var cuvant = "";
			var x = document.getElementById("c"+i+j);
			if (x.innerHtml != "") {
				cuvant = cuvant + x.innerHtml;
			}
			if (x.innerHtml === "" && cuvant != "") {
				if (cuvintedepetabela.indexOf(cuvant) == -1) {
					if (/*cuvant nu apartine baza de date*/)
						ok = 0;
					else {
						cuvintenoi.concat(cuvant);
						cuvant = "";
					}
				}
			}
		}
	}
	//verificare pe coloane
	for (i=1; i<3; i++) {
		for (j=1; j<3; j++) {
			var cuvant = "";
			var x = document.getElementById("c"+j+i);
			if (x.innerHtml != "") {
				cuvant = cuvant + x.innerHtml;
			}
			if (x.innerHtml === "" && cuvant != "") {
				if (cuvintedepetabela.indexOf(cuvant) == -1) {
					if (/*cuvant nu apartien baza de date*/)
						ok = 0;
					else {
						cuvintenoi.concat(cuvant);
						cuvant = "";
					}
				}
			}
		}
	}
	//verificari finale
	if (ok == 0 || cuvintenoi.length == 0) //daca s-a adaugat un cuvant gresit
		restorePreviousState();
	else
		calcularepunctaj();
}