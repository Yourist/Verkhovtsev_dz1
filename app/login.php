<?php

	$name = $_POST['login'];


$data = array();
   	if ($name === '') {
		$data['mes'] = 'error';
		$data['text'] = "Вот только не надо крашить мой сайт, чувак";
	} else {
		$data['mes'] = 'OK';
		$data['text'] = "Залогинились и радуемся? Ну-ну";
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>