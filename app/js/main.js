

 
   var validLogin = $('#login-form').validate({
        onfocusout: false,
        onclick: false,
        focusInvalid: false,
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
   });
    
   var validContact = $('.contact_form').validate({
        onfocusout: false,
        onclick: false,
        focusInvalid: false,
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
        onfocusout: false,
        onclick: false,
        focusInvalid: false,
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
     });


 $('#add_project').on('submit',function(e) {
			e.preventDefault();

			if (valid.form()) {
                $.ajax({
                url: $('.form').attr('action'),
                type: 'POST',
                dataType: 'json',
                data: $('#add_project').serialize()
    });
			console.log('ajax');  	
                $('.success-mes').show();
			}
		});

 $('.contact_form').on('submit',function(e) {
			e.preventDefault();

			if (validContact.form()) {
                $.ajax({
                url: $('.contact_form').attr('action'),
                type: 'POST',
                dataType: 'json',
                data: $('.contact_form').serialize()
    });
			console.log('ajax');  	
              
			}
		});

 $('#login-form').on('submit',function(e) {
			e.preventDefault();

			if (validLogin.form()) {
                $.ajax({
                url: $('#login-form').attr('action'),
                type: 'POST',
                dataType: 'json',
                data: $('#login-form').serialize()
    });
			console.log('ajax');  	
                
			}
		});




