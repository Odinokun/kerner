$(function() {

  // begin SVG for IE
  require('./modules/svg4everybody')();

  // begin index page mobile accordion
  require('./modules/accordion')();

  // begin change top menu background
  require('./modules/bgTopMenu')();

  // begin фиксируем информационную строку при скролле
  require('./modules/stickyHeader')();

  // begin Slick slider
  require('./modules/slick')();






  // begin phone mask
  // require('./modules/maskedinput')();

  // begin Scroll2Ancor
  // require('./modules/scroll2ancor')();

  // begin Popup
  // require('./modules/popup')();


  // begin Fancybox3
  // require('./modules/fancybox')();

});