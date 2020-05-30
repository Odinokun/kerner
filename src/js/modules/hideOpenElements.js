module.exports = function() {

  // begin hide/open elements in desktop version
  $('.visible-desktop').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-desktop--parent');

    $(clickParent).find('.hidden-desktop').slideToggle();
    $(clickParent).find('.visible-desktop__open, .visible-desktop__close').fadeToggle(0);
  });
  // end hide/open elements in desktop version

  // begin hide/open elements in mobile version
  $('.visible-767').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-767--parent');

    $(clickParent).find('.hidden-767').slideToggle();
    $(clickParent).find('.visible-767__open, .visible-767__close').fadeToggle(0);
  });
  // end hide/open elements in mobile version

  // begin hide/open elements in mobile version
  $('.visible-480').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.hidden-480--parent');

    $(clickParent).find('.hidden-480').slideToggle();
    $(clickParent).find('.visible-480__open, .visible-480__close').fadeToggle(0);
  });
  // end hide/open elements in mobile version

  // begin brand page hide/open elements in mobile version
  $('.brand-item__open').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.brand-item');

    $(clickParent).toggleClass('active');
    $(clickParent).find('.brand-item__inn').slideToggle();
  });

  $('.brand-item__close').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.brand-item');

    $(clickParent).removeClass('active');
    $(clickParent).find('.brand-item__inn').slideUp();
  });
  // end brand page hide/open elements in mobile version

  // begin card page hide/open elements in mobile version
  $('.card-tab__open').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.card-tab');

    $(clickParent).toggleClass('open');
    $(clickParent).find('.card-tab__inn').slideToggle();
  });

  $('.card-tab__close').on('click', function (e) {
    e.preventDefault();
    let clickParent = $(this).parents('.card-tab');

    $(clickParent).removeClass('open');
    $(clickParent).find('.card-tab__inn').slideUp();
  });
  // end card page hide/open elements in mobile version

};