module.exports = function() {

  // begin фиксируем информационную строку при скролле
  let element = $("#info-line");
  let heightElem;

  if(element.length > 0) {
    heightElem = element.offset().top;
  } else {
    heightElem = 0;
  }

  $("#info-line__wrap").css({
    "height": element.outerHeight()
  });

  $(window).scroll(function() {
    if($(window).scrollTop() > heightElem) {
      element.addClass("fixed");
    } else {
      element.removeClass("fixed");
    }
  });
  // end фиксируем информационную строку при скролле

};