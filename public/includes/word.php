<?php

$word = @$_GET['word'];

$mysqli = new mysqli('localhost', 'root', 'password', 'database');

$mysqli->query("SET NAMES 'utf8'");

$query = $mysqli->query("SELECT * FROM valid_words WHERE word = '$word';");

if (isset($query)) {
	return 1;
} else {
	return 0;
}

?>