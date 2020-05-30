module.exports = function() {

  //begin выбор чекбокса в строке таблицы сравнения товаров
  $('.category-table__row').on('click', function (e) {
    let checkbox = $(this).find('input');
    let el1 = $('.popular-slider__basket');
    let el2 = $('.counter__count');
    let el3 = $('.counter__input');
    let el4 = $('.counter');

    if (!el1.is(e.target) && !el2.is(e.target) && !el3.is(e.target) && !el4.is(e.target)){
      if ($(checkbox).is(':checked')){
        $(checkbox).prop('checked', false);
      } else {
        $(checkbox).prop('checked', true);
      }
    }
  });
  //end выбор чекбокса в строке таблицы сравнения товаров

};