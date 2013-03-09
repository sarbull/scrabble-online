function verifyword(str) {
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      return xmlhttp.responseText;
    }
  }
  //word.php will search for the $_GET['word'] existance in
  //the words database and return 1 for valid, 0 for invalid in plain text
  xmlhttp.open("GET", "word.php?word=" + str, true);
  xmlhttp.send();
}
