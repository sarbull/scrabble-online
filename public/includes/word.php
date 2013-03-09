<?php

$word = @$_GET['word'];

$mysqli = new mysqli('localhost', 'root', 'password', 'database');

$mysqli->query("SET NAMES 'utf8'");

$query = $mysqli->query("SELECT * FROM valid_words WHERE word = '$word';");

if (isset($query)) {
	echo "1";
} else {
	echo "0";
}

?>
