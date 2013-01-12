function restorify(){
    coordsx = [];
    coordsy = [];
    var i;
    var j;
    var k = 0;
    for (i = 1; i < 16; i++)
        for (j = 1; j < 16; j++) {
            if (arrayrestore[k] != undefined)
                document.getElementById("c"+i+"_"+j).innerHTML = arrayrestore[k++];
            else 
                document.getElementById("c"+i+"_"+j).innerHTML = "";
        }
    k = 0;
    for (i = 1; i < 8; i++) {
        document.getElementById("lp1"+i).innerHTML = lp1restore[i-1];
        document.getElementById("lp2"+i).innerHTML = lp2restore[i-1];
    }
}

function winningconditions(){
    if (gamewon == 1)
        alert("Jocul s-a incheiat deja!");
    else{
        var pname1 = document.getElementById("player_unu").innerHTML;
        var pname2 = document.getElementById("player_doi").innerHTML;
        var puc1 = document.getElementById("punctaj_player1").innerHTML;
        var puc2 = document.getElementById("punctaj_player2").innerHTML;
        var i;
        var ok = 1;
        for (i = 1; i < 8; i++)
            if (document.getElementById("lp1"+i).innerHTML != "") {
                ok = 0;
                break;
            }
        if (ok == 1){
            gamewon = 1;
            puc1 = puc1 + 50;
            if (puc1 > puc2)
                alert(pname1 + " a castigat!");
            else if(puc2>puc1)
                alert(pname2 + " a castigat!");
            else
                alert("Egalitate!");
        }
        else{
            var ok2 = 1;
            for (i = 1; i < 8; i++)
                if (document.getElementById("lp2"+i).innerHTML != "") {
                    ok2 = 0;
                    break;
                }
            if (ok2 == 1){
                gamewon = 1;
                puc2 = puc2 + 50;
                if (puc2 > puc1)
                    alert(pname2 + " a castigat!");
                else if (puc1 > puc2)
                    alert(pname1 + " a castigat!");
                else
                    alert("Egalitate!");
            }
            else if (p1finishgame == 1 && p2finishgame == 1) {
                gamewon = 1;
                if (puc2 > puc1)
                    alert(pname2 + " a castigat!");
                else if (puc1 > puc2)
                    alert(pname1 + " a castigat!");
                else
                    alert("Egalitate!");
            }
        }
    }
}

function restore() {
    arrayrestore = [];
    lp1restore = [];
    lp2restore = [];
    for (var i = 1; i < 16; i++)
        for (var j = 1; j < 16; j++)
            arrayrestore = arrayrestore.concat(document.getElementById("c"+i+"_"+j).innerHTML);
    for (var i = 1; i < 8; i++) {
        lp1restore = lp1restore.concat(document.getElementById("lp1"+i).innerHTML);
        lp2restore = lp2restore.concat(document.getElementById("lp2"+i).innerHTML);
    }
}

function verify(){
    var alfabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "L", "M", "N", "O", "P", "R", "S", "T", "U", "V", "X", "Z"];
    var punctaj = [1, 9, 1, 2, 1, 8, 9, 10, 1, 10, 1, 4, 1, 1, 2, 1, 1, 1, 1, 8, 10, 10]
    var i;
    var j;
    var ok = 1;
    var punctaj_player1 = parseInt(document.getElementById("punctaj_player1").innerHTML);
    var punctaj_player2 = parseInt(document.getElementById("punctaj_player2").innerHTML);
                
    var punctajpartial = 0;
    var multiplicator = 1;
    var cuvinteadaugate = [];

    if (gamewon == 1)
        alert("Jocul a fost castigat deja!");

    else {

        //verificare pe linii
        for (i=1; i<16; i++) {
            punctajpartial = 0;
            multiplicator = 1;
            var cuvantnou = "";
            for (j=1; j<16; j++) {
                var x = document.getElementById("c"+i+"_"+j).innerHTML;
                if (x != "") {
                    cuvantnou = cuvantnou + x;
                    var culoare = document.getElementById("c"+i+"_"+j).getAttribute("style");
                    if (culoare == "background-image:url(images/lighter.png)"
                        || culoare == "background-image:url(images/darker.png)")
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                    if (culoare == "background-color:#f4cecd") { //roz
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                        multiplicator = multiplicator * 2;
                    }
                    if (culoare == "background-color:#66c9e8") //albastru
                        punctajpartial = punctajpartial + 3 * punctaj[alfabet.indexOf(x)];
                    if (culoare == "background-color:#ee3940") { //rosu
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                        multiplicator = multiplicator * 3;
                    }
                    if (culoare == "background-color:#b8cc69") //verde
                        punctajpartial = punctajpartial + 2*punctaj[alfabet.indexOf(x)];
                }
                if (x == "" && cuvantnou.length > 0) {
                    if (cuvintedepetabela.indexOf(cuvantnou) == -1 && cuvantnou.length > 1) {
                        calculatepoints();  
                    } 
                    multiplicator = 1;
                    punctajpartial = 0;
                    cuvantnou = "";
                }
            }
            if (cuvantnou.length > 1)
                if(cuvintedepetabela.indexOf(cuvantnou) == -1) {
                    calculatepoints();  
                }
        }

        //verificare pe coloane
        for (i=1; i<16; i++) {
            punctajpartial = 0;
            multiplicator = 1;
            var cuvantnou = "";
            for (j=1; j<16; j++) {
                var x = document.getElementById("c"+j+"_"+i).innerHTML;
                if (x != "") {
                    cuvantnou = cuvantnou + x;
                    var culoare = document.getElementById("c"+j+"_"+i).getAttribute("style");
                    if (culoare == "background-image:url(images/lighter.png)"
                        || culoare == "background-image:url(images/darker.png)")
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                    if (culoare == "background-color:#f4cecd") { //roz
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                        multiplicator = multiplicator * 2;
                    }
                    if (culoare == "background-color:#66c9e8") //albastru
                        punctajpartial = punctajpartial + 3 * punctaj[alfabet.indexOf(x)];
                    if (culoare == "background-color:#ee3940") { //rosu
                        punctajpartial = punctajpartial + punctaj[alfabet.indexOf(x)];
                        multiplicator = multiplicator * 3;
                    }
                    if (culoare == "background-color:#b8cc69") //verde
                        punctajpartial = punctajpartial + 2 * punctaj[alfabet.indexOf(x)];
                }
                if (x == "" && cuvantnou.length > 0) {
                    if (cuvintedepetabela.indexOf(cuvantnou) == -1 && cuvantnou.length > 1) {
                        calculatepoints();
                    }
                    multiplicator = 1;
                    punctajpartial = 0;
                    cuvantnou = "";
                }
            }
            if (cuvantnou.length > 1)
                if(cuvintedepetabela.indexOf(cuvantnou) == -1) {
                    calculatepoints();
                }
        }

        function calculatepoints() {
            var response = exista(cuvantnou);
            if (response != 0) {
                cuvinteadaugate = cuvinteadaugate.concat(cuvantnou);
                if (playerturn == 1)
                    punctaj_player1 = punctaj_player1 + punctajpartial * multiplicator;
                else
                    punctaj_player2 = punctaj_player2 + punctajpartial * multiplicator;
            } 
            else{
                ok = 0;
                alert("RESPONSE");
            }
        }

        if (ok != 0) {
            if (cuvinteadaugate.length == 0) {
                ok = 0;
                alert("AICI");
            }
            if(checkadjacency() == 0) {
                ok = 0;
                alert("AICI2");
            }
            if(checksingleword() == 0) {
                ok =0;
                alert("AICI3");
            }
        }

        if (firstturn == 1 && (document.getElementById("c8_8").innerHTML == undefined
            || document.getElementById("c8_8").innerHTML == "")){
            ok = 0;
            alert("Primul cuvant trebuie sa treaca prin centru!");
        }
    
        if (ok == 0) { //revenim la starea initiala
            coordsx = [];
            coordsy = [];
            var i;
            var j;
            var k = 0;
            for (i = 1; i < 16; i++)
                for (j = 1; j < 16; j++) {
                    if (arrayrestore[k] != undefined)
                        document.getElementById("c"+i+"_"+j).innerHTML = arrayrestore[k++];
                    else 
                        document.getElementById("c"+i+"_"+j).innerHTML = "";
                }
            k = 0;
            for (i = 1; i < 8; i++) {
                document.getElementById("lp1"+i).innerHTML = lp1restore[i-1];
                document.getElementById("lp2"+i).innerHTML = lp2restore[i-1];
            }
            if (firstturn != 1)
                alert("Introdu valori valide!");
        }
        else {
            for (i = 1; i < 16; i++)
                for (j = 1; j < 16; j++)
                    arrayrestore = arrayrestore.concat(document.getElementById("c"+i+"_"+j).innerHTML);
            cuvintedepetabela = cuvintedepetabela.concat(cuvinteadaugate);
            if (playerturn == 1)
                document.getElementById("punctaj_player1").innerHTML = punctaj_player1;
            else
                document.getElementById("punctaj_player2").innerHTML = punctaj_player2;
            playerturn = 3 - playerturn;
            firstturn = 0;
            randomlettersofdoom(3 - playerturn);
            winningconditions();
            restore();
        }
    }
}

//functionalitatea butonului "Ma dau batut!"
function giveup() {
    gamewon = 1;
    var pname1 = document.getElementById("player_unu").innerHTML;
    var pname2 = document.getElementById("player_doi").innerHTML;
    if (playerturn == 1)
        alert(pname1 + " a renuntat!");
    else
        alert(pname2 + " a renuntat!");
}

function skip() {
    var punctaj_player;
    punctaj_player = parseInt(document.getElementById("punctaj_player" + playerturn).innerHTML);
    punctaj_player = punctaj_player - 10;
    document.getElementById("punctaj_player" + playerturn).innerHTML = punctaj_player;
    playerturn = 3 - playerturn;
    restorify();
}

function exista(word) {
    alert(word);
    var cuvantulexista = 1;
    jQuery.ajax({
        async: false, 
        url: "http://api.wordreference.com/0.8/ff175/json/roen/" + word,
        dataType: 'json',
        method: "GET",
        success: function(transport) {
            if (transport.Error || transport.Response)
                cuvantulexista = 0;
        }

    });
    return cuvantulexista;
}

function finishgamebutton() {
    var pname;
    if (playerturn == 1) {
        p1finishgame = 1;
        pname = document.getElementById("player_unu").innerHTML;
    }
    else {
        p2finishgame = 1;
        pname = document.getElementById("player_doi").innerHTML;
    }
    alert(pname + " vrea sa incheie jocul!");
    playerturn = 3 - playerturn;
    winningconditions();
}

function checkadjacency() {
    for (var i=1; i<16; i++) {
        for (var j=1; j<16; j++) {
            var x = document.getElementById("c"+i+"_"+j).innerHTML;
            if (x != "") {
                var ok = 0;
                var y;
                if (i != 1)
                    if(document.getElementById("c" + (i-1) + "_" + j).innerHTML != "")
                        ok = 1;
                if (i != 15)
                    if(document.getElementById("c" + (i+1) + "_" + j).innerHTML != "")
                        ok = 1;
                if (j != 1)
                    if(document.getElementById("c" + i + "_" + (j-1)).innerHTML != "")
                        ok = 1;
                if (j != 15)
                    if(document.getElementById("c" + i + "_" + (j+1)).innerHTML != "")
                        ok = 1;
                if (ok == 0)
                    return 0;
            }
        }
    }
    return 1;
}

function checksingleword() {
    if (coordsx.length == 0 || coordsy.length == 0) {  
        coordsx = [];
        coordsy = [];
        return 0;
    }
    alert("Coordonate: " + coordsx + "    " + coordsy);
    var i;
    var ok = 2;
    for (i = 1; i < coordsx.length; i++)
        if (coordsx[i] != coordsx[i-1])
            if (ok == 2)
                ok = 1;
    for (i = 1; i < coordsy.length; i++)
        if (coordsy[i] != coordsy[i-1])
            if (ok == 1)
                ok = 0;
    if (ok != 0) {
        coordsx = [];
        coordsy = [];
        return 1;
    }
    coordsx = [];
    coordsy = [];
    return 0;
}