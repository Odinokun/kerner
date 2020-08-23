module.exports = function() {

  //begin переключение десктопных табов в шапке карточки товара
  $('.card-tabs-header__link').on('click', function (e) {
    e.preventDefault();
    let tabActive = $(this).data('tab');

    $('.card-tabs-header__link, .card-tab').removeClass('active');
    $(this).addClass('active');
    $(tabActive).addClass('active');
  });
  //end переключение десктопных табов в шапке карточки товара

  //begin переключение табов в кабинете
  $('.cabinet-tabs-header__link').on('click', function (e) {
    e.preventDefault();
    let tabActive = $(this).data('tab');

    $('.cabinet-tabs-header__link, .cabinet-tab').removeClass('active');
    $(this).addClass('active');
    $(tabActive).addClass('active');
  });
  //end переключение табов в кабинете

  //begin переключение табов в поисковой выдаче
  $('.search-res-tabs-header__link').on('click', function (e) {
    e.preventDefault();
    let tabActive = $(this).data('tab');

    $('.search-res-tabs-header__link, .search-res-tab').removeClass('active');
    $(this).addClass('active');
    $(tabActive).addClass('active');
  });
  //end переключение табов в поисковой выдаче

  //begin переключение табов в поисковой выдаче(мобильная версия)
  $( ".search-res-tabs__header-select" ).selectmenu({
    select: function( event, ui ) {
      let tabActive = ui.item.value;

      $('.search-res-tabs-header__link, .search-res-tab').removeClass('active');
      $(this).addClass('active');
      $(tabActive).addClass('active');
    }
  });
  //end переключение табов в поисковой выдаче(мобильная версия)

};