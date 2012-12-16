<?php

function connectToDB() {
	global $link, $dbhost, $dbuser, $dbpass, $dbname;
	($link = mysql_pconnect("$dbhost", "$dbuser", "$dbpass")) || die("Couldn't connect to MySQL");
	mysql_select_db("$dbname", $link) || die("Couldn't open db: $dbname. Error if any was: " . mysql_error() );
}

$dbhost = "localhost";
$dbuser = "root";
$dbpass = "1234";
$dbname = "scrabble";
connectToDB();

//cuvant
$cuvant = $_GET['cuvant'];

// build query:
$sql = "SELECT * FROM cuvinte WHERE cuvant LIKE '$cuvant'";
 
// execute query:
$result = mysql_query($sql) or die('A error occured: ' . mysql_error());
 
// fetch results:
while ($row = mysql_fetch_assoc($result)) {
    $row_id = $row['id'];
    if($row_id != NULL){
    	echo "1";
    } else {
    	echo "0";
    }
}


?>