module.exports = function() {

  //begin выпадающий aside в мобильной версии
  $('.pages-aside__top-arr').on('click', function () {
    $('.pages-aside-menu').slideToggle();
    $(this).toggleClass('active');
  });
  //end выпадающий aside в мобильной версии

};