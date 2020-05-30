module.exports = function() {

  //begin open/close пункты в мобильном меню каталога
  $('.catalog-mobile-menu__item--first').on('click', function () {
    if($(this).hasClass('active')) {
      $(this).siblings().slideUp();
      $(this).removeClass('active');
    } else {
      $('.catalog-mobile-menu__item--first').siblings().slideUp();
      $('.catalog-mobile-menu__item--first').removeClass('active');
      $(this).siblings().slideToggle();
      $(this).toggleClass('active');
    }
  });
  //end open/close пункты в мобильном меню каталога

};