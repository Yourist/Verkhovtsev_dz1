$(document).ready(function () {
    $('#login-form').validate({
       rules:{
           login: {
               required: true,
           },
           password: {
               required: true,
           }
       },
       messages: {
           login: {
               required: "введите логин"
           },
           password: {
               required: "введите пароль"
           }
                  }
   });
    $('.contact_form').validate({
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
    $('#add_project').validate({
              rules:{
           name_project: {
               required: true,
           },
           project_URL: {
               required: true,
           },
           filename: {
               required: true,
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
    
});

    $("#reset_btn").on('click', _resetFunction);
    var _resetFunction = (function () {
        console.log('gfgd');
    });
console.log('ready');