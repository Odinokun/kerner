$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin hide/open elements in mobile version
  require('./modules/hideOpenElements')();

  // begin change top menu background
  require('./modules/bgTopMenu')();

  // begin фиксируем информационную строку при скролле
  require('./modules/stickyHeader')();

  // begin фиксируем карточку заказа товара при скролле
  require('./modules/stickyRequestCard')();

  // begin Slick slider
  require('./modules/slick')();

  // begin scroll On/Off
  require('./modules/scrollOnOff')();

  // begin Popup
  require('./modules/popup')();

  // begin open/close mobile menu, catalog menu & search
  require('./modules/openCloseMobileMenuCatalogMenuAndSearch')();

  // begin jquery UI
  require('./modules/UI')();

  // begin phone mask
  require('./modules/maskedinput')();

  // begin счетчик в карте товара
  // begin появления счетчика по клику кнопки с слайдере каталога
  require('./modules/counter')();

  //begin выпадающий aside в мобильной версии
  require('./modules/aside')();

  //begin open/close пункты в мобильном меню каталога
  require('./modules/catalog-menu')();

  //begin аккордеон в FAQ
  require('./modules/acordeon')();

  //begin переключение десктопных табов в шапке карточки товара
  require('./modules/tabs')();

  //begin open/close пункты в меню бокового фильтра
  //begin open/close пункты в форме бокового фильтра
  require('./modules/aside-filter')();

  //begin выбор чекбокса в строке таблицы сравнения товаров
  require('./modules/checkbox')();

  //begin выбор варианта доставки на странице оформления заказа
  require('./modules/delivery')();

  //begin цвет кнопок в фильтре переключения вида (линейный/карты)
  require('./modules/topFilterBtns')();

});