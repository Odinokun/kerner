module.exports = function() {

  // begin hide/open elements in mobile version
  $('.visible-767').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-767--parent');

    $(clickParent).find('.hidden-767').slideToggle();
    $(clickParent).find('.visible-767__open, .visible-767__close').fadeToggle(0);
  });
  // end index page mobile accordion

  // begin index page mobile accordion
  $('.visible-480').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-480--parent');

    $(clickParent).find('.hidden-480').slideToggle();
    $(clickParent).find('.visible-480__open, .visible-480__close').fadeToggle(0);
  });
  // end hide/open elements in mobile version

};