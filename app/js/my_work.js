var myModule = (function () {
    var init = function () {
        _setUpListeners();
    };
    
    var _setUpListeners = function () {
        $(".img_link").on('click', _showModal); // открыть модальное окно
        $('#add_project').on('submit', _addProject); // добавление проекта
    };
    
var _showModal = function(ev) {
    console.log('Открыть модальное окно');
    ev.preventDefault(); // Отменяем стандартное поведение ссылки
    $('.hide_popup_block').bPopup({
        speed: 650,
        transition: "slideDown"
    }); 
};
    
    var _addProject = function(ev){
        console.log('Добавление проекта');
        ev.preventDefault();
        
        //Объявляем переменные
        var form = $(this),// делаем из простого this jQuery объект
            url = 'add_project.php',
            data = form.serialize();
        
        console.log($('#add_input_name').val());
        console.log(data);
        // Ajax запрос на сервер
        $.ajax ({
            url: '',
            type: "POST",
            datatype: 'json',
            data: data,
        })
        
    }
    
    
    return {
        init: init
    };
})();
myModule.init();