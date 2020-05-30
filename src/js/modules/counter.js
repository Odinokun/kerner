module.exports = function() {

  // begin счетчик в карте товара
  $('.counter__count').on('click', function() {
    const targetCounter = $(this).parent('.counter');
    const counter = $(targetCounter).children('.counter__input');
    let   counterVal = $(counter).val();

    if ($(this).hasClass('counter__count--up')) {
      counterVal++;
    } else {
      counterVal--;
    }

    counterVal = counterVal < 1 ? 1 : counterVal;
    $(counter).val(counterVal);
  });
  // end счетчик в карте товара

  //begin появления счетчика по клику кнопки с слайдере каталога
  $('.popular-slider__basket').on('click', function (e) {
    e.preventDefault();
    $(this).parents('.popular-slider__footer').addClass('active');
  });
  //end появления счетчика по клику кнопки с слайдере каталога

};