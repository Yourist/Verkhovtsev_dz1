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
    
/*    if(valid = false){return false};*/
        
        //Объявляем переменные
        var form = $(this),// делаем из простого this jQuery объект
            url = 'add_project.php';
           
        
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
    
    
// Возвращаем объект (публичные методы)
return {
        init: init
    };
})();
myModule.init();

