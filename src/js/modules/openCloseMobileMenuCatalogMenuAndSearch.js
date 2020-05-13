module.exports = function() {

  // begin open/close mobile menu, catalog menu & search

  //begin открытие catalog menu кнопкой hero и кнопкой в info-line
  $('.hero-main__open, .info-line__catalog-btn').on('click', function (e) {
    e.preventDefault();

    $('#catalog-menu').addClass('active');
    $('#catalog-mobile-menu').slideDown();

    //добавляем меню синий фон (нужно для мобилы)
    $('#header-mobile').addClass('open');
    //делаем бургер активным
    $('#header-mobile__burger input').prop('checked', true);
  });
  //end открытие catalog menu кнопкой hero и кнопкой в info-line

  //begin открытие catalog menu пунктом мобильного меню
  $('.header-mobile-menu__item--catalog').on('click', function (e) {
    e.preventDefault();

    $('#catalog-menu').addClass('active');
    $('#catalog-mobile-menu').slideDown();

    //закрываем основное меню
    $('#header-mobile-body').slideUp();
  });
  //end открытие catalog menu пунктом мобильного меню

  //begin закрытие catalog menu крестом (десктопная версия)
  $('.catalog-menu__close').on('click', function (e) {
    e.preventDefault();
    $('#catalog-menu').removeClass('active');

    //убираем у меню синий фон (нужно для мобилы)
    $('#header-mobile').removeClass('open');
    //делаем бургер неактивным
    $('#header-mobile__burger input').prop('checked', false);
  });
  //end закрытие catalog menu крестом (десктопная версия)

  //begin закрытие catalog menu "назад" (мобильная версия)
  $('.catalog-mobile-menu__close').on('click', function (e) {
    e.preventDefault();

    $('#catalog-mobile-menu').slideUp();
    //закрываем основной бургер
    $('#header-mobile__burger input').prop('checked', false);
  });
  //end закрытие catalog menu "назад" (мобильная версия)

  //begin закрытие catalog menu "основным бургером" (мобильная версия)
  //а так же,
  //открытие/закрытие основного меню
  $('.header-mobile__burger input').on('click', function () {

    //если меню раскрыто, то
    if($('#header-mobile').hasClass('open')) {
      //убираем у меню синий фон
      $('#header-mobile').removeClass('open');
      //прячем меню
      $('#header-mobile-body').slideUp();
      //прячем catalog menu (mobile ver)
      $('#catalog-mobile-menu').slideUp();
    } else {
      //добавляем меню синий фон
      $('#header-mobile').addClass('open');
      //открываем мобильное меню
      $('#header-mobile-body').slideDown();
    }
  });
  //end закрытие catalog menu "основным бургером" (мобильная версия)

  //begin открытие catalog menu пунктом меню (мобильная версия)
  $('.header-mobile-menu__item--catalog').on('click', function () {
    //прячем меню
    $('#header-mobile-body').slideUp();
    //открываем catalog menu (mobile ver)
    $('#catalog-mobile-menu').slideDown();
  });
  //end открытие catalog menu пунктом меню (мобильная версия)

  //begin закрытие catalog menu пунктом "назад" (мобильная версия)
  $('.catalog-mobile-menu__close').on('click', function () {
    //убираем у меню синий фон
    $('#header-mobile').removeClass('open');
    //прячем меню
    $('#header-mobile-body').slideUp();
    //прячем catalog menu (mobile ver)
    $('#catalog-mobile-menu').slideUp();
  });
  //end закрытие catalog menu пунктом "назад" (мобильная версия)

  // begin открытие меню search
  $('#header-mobile__search').on('click', function () {
    //убираем у меню синий фон
    $('#header-mobile').removeClass('open');
    //прячем меню
    $('#header-mobile-body').slideUp();
    //закрываем основной бургер
    $('#header-mobile__burger input').prop('checked', false);
    //закрываем catalog menu (мобильная версия)
    $('#catalog-mobile-menu').slideUp();
    //открываем сам search
    $('#header-mobile-search-result').slideDown();
  });
  // end открытие меню search

  // begin закрытие меню search
  $('.header-mobile-search-result__burger input ').on('click', function () {
    $('#header-mobile-search-result').slideUp();
  });
  // end закрытие меню search

  // end open/close mobile menu, catalog menu & search
};