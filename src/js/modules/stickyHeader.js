module.exports = function() {

  // begin фиксируем информационную строку при скролле
  $(function() {
    let element = $("#info-line");
    let heightElem = element.offset().top;

    $("#info-line__wrap").css({
      "width": 100 + '%',
      "height": element.outerHeight()
    });

    $(window).scroll(function() {
      if($(window).scrollTop() > heightElem) {
        element.addClass("fixed");
      } else {
        element.removeClass("fixed");
      }
    });
  });
  // end фиксируем информационную строку при скролле

};