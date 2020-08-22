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

};