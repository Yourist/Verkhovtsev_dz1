<?php

	$name = $_POST['login'];


$data = array();
   	if ($name === '') {
		$data['mes'] = 'error';
		$data['text'] = "Вот только не надо крашить мой сайт, чувак";
	} else {
		$data['mes'] = 'OK';
		$data['text'] = "В ближайшее время изучу вашу творческую идею. Я рад, что вы смотрите в консоль";
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>