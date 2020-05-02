module.exports = function() {

  // begin index page mobile accordion
  $('.visible-767').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-767--parent');

    $(clickParent).find('.hidden-767').slideToggle();
    $(clickParent).find('.visible-767__open, .visible-767__close').fadeToggle(0);
  });
  // end index page mobile accordion

};