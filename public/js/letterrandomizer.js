function randomlettersofdoom(player){ //functie pentru adaugare de litere random pe placuta cu litere a jucatorilor; player poate fi 1 sau 2
    if (litereramaseinsac != 0) {
        var i;
        for (i = 1; i < 8; i++) {
            if (litereramaseinsac == 0)
                break;
            var rand = Math.floor(Math.random()*litereramaseinsac);
            console.log(rand);
            if (document.getElementById("lp"+player+i).innerHTML == "") {
                var rand = Math.floor(Math.random()*litereramaseinsac);
                console.log(rand);
                document.getElementById("lp"+player+i).innerHTML = saculetculitere[rand];
                saculetculitere.remove(rand,rand);
                litereramaseinsac = litereramaseinsac - 1;
            }
        }
    }
}