<?php
	$name = $_POST['name'];
    $pic = $_POST['filename'];
    $url = $_POST['project_URL'];
    $descript = $_POST['description_add'];

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;
?>
