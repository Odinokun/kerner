module.exports = function() {

  //begin аккордеон в FAQ
  $('.faq__question').on('click', function (e) {
    e.preventDefault();
    let question = $(this).parents('.faq__item');
    $(question).toggleClass('active');
    $(question).find('.faq__answer').slideToggle();
  });
  //end аккордеон в FAQ

};