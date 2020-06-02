module.exports = function() {

  //begin open/close пункты в меню бокового фильтра
  $('.filter-menu__item--first').on('click', function (e) {
    e.preventDefault();
    $(this).siblings().slideToggle();
  });
  //end open/close пункты в меню бокового фильтра

  //begin open/close пункты в форме бокового фильтра
  $('.filter-form-item__header--toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
  });
  //end open/close пункты в форме бокового фильтра

  //begin open/close пункты в форме бокового фильтра (mobile)
  $('.filter-mobile-form-item__header--toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
  });
  //end open/close пункты в форме бокового фильтра

  $('.filter-aside-mobile__menu-subtitle').on('click', function (e) {
    e.preventDefault();

    $(this).toggleClass('active');
    $(this).siblings('.filter-mobile-menu__list-wrap').slideToggle();

  });

  //открываем мобильный фильтр
  $('.mobile-filter__header-btn--filter').on('click', function (e) {
    e.preventDefault();
    //добавляем меню синий фон (нужно для мобилы)
    $('#header-mobile').addClass('blue');

    $(this).addClass('active');
    $('#filter-aside-mobile').addClass('active');
  });

  //закрываем мобильный фильтр
  $('#filter-aside-mobile .catalog-mobile-menu__close').on('click', function (e) {
    e.preventDefault();

    //убираем меню синий фон (нужно для мобилы)
    $('#header-mobile').removeClass('blue');

    $('.mobile-filter__header-btn--filter').removeClass('active');
    $('#filter-aside-mobile').removeClass('active');
  });

  //открываем подменю категорий
  $('.filter-aside-mobile__menu-all').on('click', function (e) {
    e.preventDefault();

    $('#filter-aside-mobile-category-menu').addClass('active');
  });

  //закрываем подменю категорий
  $('#filter-aside-mobile-category-menu .catalog-mobile-menu__close').on('click', function (e) {
    e.preventDefault();

    $('#filter-aside-mobile-category-menu').removeClass('active');
  });

  //открываем мобильную сортировку
  $('.mobile-filter__header-btn--sort').on('click', function (e) {
    e.preventDefault();
    //добавляем меню синий фон (нужно для мобилы)
    $('#header-mobile').addClass('blue');

    $(this).addClass('active');
    $('#filter-aside-mobile-sorted').addClass('active');
  });

  //закрываем мобильную сортировку
  $('#filter-aside-mobile-sorted .catalog-mobile-menu__close').on('click', function (e) {
    e.preventDefault();

    //убираем меню синий фон (нужно для мобилы)
    $('#header-mobile').removeClass('blue');

    $('.mobile-filter__header-btn--sort').removeClass('active');
    $('#filter-aside-mobile-sorted').removeClass('active');
  });

};