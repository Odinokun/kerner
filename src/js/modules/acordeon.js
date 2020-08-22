module.exports = function() {

  //begin аккордеон в FAQ
  $('.faq__question').on('click', function (e) {
    e.preventDefault();
    let question = $(this).parents('.faq__item');
    $(question).toggleClass('active');
    $(question).find('.faq__answer').slideToggle();
  });
  //end аккордеон в FAQ

  //begin аккордеон в кабинете
  $('.cabinet-tab-order__more').on('click', function (e) {
    e.preventDefault();
    let order = $(this).parents('.cabinet-tab-order');

    $(this).toggleClass('active');
    $(order).toggleClass('active');

    $(order).find('.cabinet-tab-order__basket').slideToggle();
  });
  //end аккордеон в кабинете

};