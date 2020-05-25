module.exports = function() {

  // begin фиксируем карточку заказа товара при скролле
  let element = $("#request__card-wrap");
  let heightElem;

  if(element.length > 0) {
    heightElem = element.offset().top;
  } else {
    heightElem = 0;
  }

  // $("#request__card").css({
  //   "height": element.outerHeight()
  // });

  $(window).scroll(function() {
    if($(window).scrollTop() > (heightElem - 100)) {
      element.addClass("fixed-card");
    } else {
      element.removeClass("fixed-card");
    }
  });
  // end фиксируем карточку заказа товара при скролле

};