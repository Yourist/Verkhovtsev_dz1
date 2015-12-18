<?php

$name = $_POST['name_project'];
$data = array();


if ($name === '') {
    $data['status'] = 'error';
    $data['text'] = 'Заполните имя!';
}else{
    
    $data['text'] = 'Вы молодец, заполнили имя!';
    $data['status'] = 'OK';
}

header("Content-Type: application/json");
echo json_encode($data);
exit;

?>