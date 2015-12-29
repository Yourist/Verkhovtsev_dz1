$(document).ready(function() {
    
	$('input, textarea').placeholder();
  
    
	// Проверка наличия JS, jQuery.
	console.log("js works");
	if($) {
		console.log("jQuery works");
	}

  	// Прослушка события: изменение инпута загрузки файла.
	var setUpListnerFileupload = function (){
		$('#fileupload').on('change', changefileUpload);
	};
    
    var $inputfile = $("#add_project_picture");
	// Функция добавления имени файла в инпут "filename".
	var changefileUpload = function (){
		var 
			inputFile = $('#fileupload'),
            filepath = inputFile.val(),	
            input = $("#filename");
            
            filepath = filepath.replace(/c:\\fakepath\\/gmi,""),
            input.val(filepath)
	};

	setUpListnerFileupload();

	changefileUpload();
});