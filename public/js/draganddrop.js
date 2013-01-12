function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev){
	ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev){
	ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    if (ev.target.innerHTML == "") {
    	ev.target.innerHTML = document.getElementById(data).innerHTML;
    	document.getElementById(data).innerHTML = "";
    	var theid = ev.target.id;
    	var x = theid[1];
    	if (theid[2] != "_")
    		x = x + theid[2];
    	var y = theid[theid.length - 1];
    	if (theid[theid.length - 2] != "_")
    		y = theid[theid.length - 2] + y;
    	coordsx = coordsx.concat(x);
    	coordsy = coordsy.concat(y);
    }
}
