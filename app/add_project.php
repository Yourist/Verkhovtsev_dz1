<?php

	$name = $_POST['name_project'];
    $pic = $_POST['filename'];
    $url = $_POST['project_URL'];
    $descript = $_POST['description_add'];

$data = array();
   	if ($name === '') {
		$data['mes'] = 'error';
		$data['text'] = "Вот только не надо крашить мой сайт, чувак";
	} else {
		$data['mes'] = 'OK';
		$data['text'] = "Великодушно пропускаю тебя, гость";
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>
