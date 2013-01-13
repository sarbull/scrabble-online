//functie de inlaturare dintr-un vector
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

//toate literele aflate la inceput
var saculetculitere = ["A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B",
                       "C", "C", "C", "C", "C", "D", "D", "D", "D", "E", "E", "E", "E",
                       "E", "E", "E", "E", "E", "F", "F", "G", "G", "H", "I", "I", "I",
                       "I", "I", "I", "I", "I", "I", "I", "J", "L", "L", "L", "L", "M",
                       "M", "M", "N", "N", "N", "N", "N", "N", "O", "O", "O", "O", "O",
                       "P", "P", "P", "P", "R", "R", "R", "R", "R", "R", "R", "S", "S",
                       "S", "S", "S", "T", "T", "T", "T", "T", "T", "T", "U", "U", "U",
                       "U", "U", "U", "V", "V", "X", "Z"];
var litereramaseinsac = 98;
var playerturn = 1;
var cuvintedepetabela = [];
var gamewon = 0;
var firstturn = 1;

//variabile folosite pentru restore
var arrayrestore = [];
var lp1restore = [];
var lp2restore = [];

//variabile ce vor avea valoarea 1 in cazul apasarii butonului de incheiere joc
var p1finishgame = 0;
var p2finishgame = 0;

//vectori ce vor contine coordonatele literelor introduse
var coordsx = [];
var coordsy = [];