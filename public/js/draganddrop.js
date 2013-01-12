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
    }
}
