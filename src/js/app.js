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



  // begin Scroll2Ancor
  // require('./modules/scroll2ancor')();

  // begin Fancybox3
  // require('./modules/fancybox')();

});