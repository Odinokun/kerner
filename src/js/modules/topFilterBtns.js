module.exports = function() {

  //begin цвет кнопок в фильтре переключения вида (линейный/карты)
  $('.category-sort-filter__right-link').on('click', function (e) {
    e.preventDefault();
    $('.category-sort-filter__right-link').removeClass('active');
    $(this).addClass('active');
  });
  //end цвет кнопок в фильтре переключения вида (линейный/карты)

};