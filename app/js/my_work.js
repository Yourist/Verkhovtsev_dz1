var myModule = (function () {
   
    // Инициализирует наш модуль
var init = function () {
        _setUpListeners();
    };
    
    
// прослушивает события    
var _setUpListeners = function () {
        $(".img_link").on('click', _showModal); // открыть модальное окно

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

    
// Возвращаем объект (публичные методы)
return {
        init: init
    };
})();
myModule.init();

