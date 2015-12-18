var myModule = (function () {
   
    // Инициализирует наш модуль
var init = function () {
        _setUpListeners();
    };
    
    
// прослушивает события    
var _setUpListeners = function () {
        $(".img_link").on('click', _showModal); // открыть модальное окно
        $('#add_project').on('submit', _addProject); // добавление проекта
    };

// Работает с модальным окном
var _showModal = function(ev) {
    console.log('Открыть модальное окно');
    ev.preventDefault(); // Отменяем стандартное поведение ссылки
    var divPopup = $('.hide_popup_block');
        form = divPopup.find('#add_project');
    
    divPopup.bPopup({
        speed: 650,
        transition: "slideDown",
        onClose: function(){
            form.find('.server-mes').text('').hide();
            form.trigger('reset');
        }
    }); 
};

// Добавляет проект
var _addProject = function(ev){
        console.log('Добавление проекта');
        ev.preventDefault();
        
        //Объявляем переменные
        var form = $(this),// делаем из простого this jQuery объект
            url = 'add_project.php',
            myServerGiveMeAnAnswer = _ajaxForm(form, url);
        
        myServerGiveMeAnAnswer.done(function(ans) {
            var succesBox = form.find('.success-mes'),
                errorBox = form.find('.error-mes');
            if(ans.status === 'OK'){
                console.log(ans.text);
                errorBox.hide();
                succesBox.text(ans.text).show();
            }else{
                console.log(ans.text);
                succesBox.hide();
                errorBox.text(ans.text).show(); // Блок в кавычках нужно будет сделать самому
            }
        }) 
    };
    
// Универсальная функция 
    // Для её работы используется 
    // @form - форма файла
    // @url - адрес php документа, к которому обращаемся
        //1. Собирает данные из формы
        //2. Проверяет форму
        //3. Делает запрос на сервер и возвращает ответ с сервера
var _ajaxForm = function(form, url) {

        
        // if(!valid) return false;
        data = form.serialize();
        
        var result =  $.ajax({
            url: url,
            type: "POST",
            datatype: 'json',
            data: data,
        }).fail( function(ans) {
            console.log('проблемы в PHP');
            /*form.find('.error-mes').text('На сервере произошла ошибка').show();*/
        })
        return result;
    };
    
// Возвращаем объект (публичные методы)
return {
        init: init
    };
})();
myModule.init();

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