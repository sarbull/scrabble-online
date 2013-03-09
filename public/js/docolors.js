//functia de colorare a tabelei

function do_colors(){

	var random_number = Math.floor(Math.random()*2);

	//daca patratica nu trebuie colorata
	if(random_number == 1){
		style="background-image:url(css/images/darker.png)";
	} else {
		style="background-image:url(css/images/lighter.png)";
	}

	//Culoarea roz
	if((i == j || (i+j) == 16) && (( 2 <= i && i <=5) || 11 <= i && i <= 14)){
		style = 'background-color:#f4cecd';
	}
			
	//Culoarea albastra
	if (((i == 6 || i == 10) && (j%4 == 2)) || ((i == 2 || i == 14) && (j == 6 || j == 10))){
		style = 'background-color:#66c9e8';
	}

	//Culoarea rosie
	if (i%7 == 1 && j%7 ==1){
		style = 'background-color:#ee3940';
	}

	//Culoare verde
	if ((i%14 == 1 && j%8 == 4) || (i%10 == 3 && (j == 7 || j == 9)) || (i%8 == 4 && j%7 == 1)
		|| ((i == 7 || i ==9) && (j == 3 || j == 7 || j == 9 || j ==13)) || (i==8 && j%8 == 4)){
		style = 'background-color:#b8cc69';
	}

	//Setare culoare centrala
	if (i == 8 && j == 8){
		style = 'background-color:#f4cecd';
	}

}
