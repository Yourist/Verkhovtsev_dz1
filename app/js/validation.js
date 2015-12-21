$(document).ready(function () {
 
    $('#login-form').validate({
  
    focusCleanup:true,
       rules:{
           login: {
               required: true,
           },
           password: {
               required: true,
           }
       },messages: {
           login: {
               required: "введите логин"
           },
           password: {
               required: "введите пароль"
           }
            },
        submitHandler: function(form) {  
        $('#login-form').ajaxSubmit({
            type: "POST",
            url:  $('#login-form').attr("action"),
            datatype: "JSON",
            data: $('#login-form').serialize(),
    });
        }
   });
    
    $('.contact_form').validate({
        focusCleanup:true,
              rules:{
           your_name:{
                required: true,
              },
           your_email:{
                required: true,
              },
           your_descript:{
                required: true,
              },
           you_not_robot:{
                required: true,
           } 
       },
       messages: {
           your_name:{
                required: "Вы не ввели имя",
              },
           your_email:{
                required: "Вы не ввели email",
              },
           your_descript:{
                required: "Ваш вопрос",
              },
           you_not_robot:{
                required: "Вы не ввели код",
           } 

        },
        submitHandler: function(form) {
             
        $('.contact_form').ajaxSubmit({
            type: "POST",
            url:  $('.contact_form').attr("action"),
            datatype: "JSON",
            data: $('.contact_form').serialize(),
    });
        }
   });

    
});


    $(".contact_form").on('reset', function(){
        var validator = $( ".contact_form" ).validate();
        validator.resetForm();
        console.log("reset");
    });

    $(".b-close").on('click', function(){
        var validator = $( "#add_project" ).validate();
        validator.resetForm();
        console.log("reset");
    });

console.log('ready');
        

$('#add_project').submit(valid);

var valid = $('#add_project').validate({
        focusCleanup:true,
        
              rules:{
           name_project: {
               required: true,
           },
           project_URL: {
               required: true,
           },
           files_la: {
               required: true,
               minlength: 1,
               
           },
           filename: {
               required: true,
               minlength: 1,
               
           },
           fileurl: {
               required: true,
               minlength: 1,
               
           },
           description_add: {
               required: true,
           },
       },
       messages: {
           name_project: {
               required: "введите название"
           },
           project_URL: {
               required: "ссылка на проект"
           },
           filename: {
               required: "изображение"
           },
           description_add: {
               required: "описание проекта"
           },
        },
        submitHandler: function(form) {
             
        $("#add_project").ajaxSubmit({
            type: "POST",
            url:  $("#add_project").attr("action"),
            datatype: "JSON",
            data: $("#add_project").serialize(),
    });
        }
   });
console.log($("#add_project").serialize());
       console.log('Imin');  



/* Validation JS with disabled attribyte of input fileupload*/
/*    var inputFile = $("#add_project").find('.file_valid');
    var filebox = $("#add_project").find("#add_file_box");
        console.log(inputFile);

var validFile = function(inputFile){
    if(inputFile.length === 0) {
        var errorMessage = document.createElement('label')
            newDiv.className = 'error'
            newDiv.id = 'file_upload-error'
            newDiv.style.backgroundColor = 'red'
            newDiv.innerHTML = 'Привет, мир!'
        filebox.appendChild(errorMessage);
        valid = false;
    }else{
        valid = true;
    }
    return valid;
}
    */   



$(document).ready(function() {
	
	// Проверка наличия JS, jQuery.
	console.log("js works");
	if($) {
		console.log("jQuery works");
	}
  
  	// Прослушка события: изменение инпута загрузки файла.
	var setUpListnerFileupload = function (){
		$('#fileupload').on('change', changefileUpload);
	};

	// Функция добавления имени файла в инпут "filename".
	var changefileUpload = function (){
		var 
			input = $(this), // Инпут type="file"
			name = input[0].files[0].name; // Имя загруженного файла
		$('#filename').val(name) // Добавление имени в инпут "filename".
	};

	setUpListnerFileupload();

	changefileUpload();
});