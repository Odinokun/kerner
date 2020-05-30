module.exports = function() {

  //begin open/close пункты в меню бокового фильтра
  $('.filter-menu__item--first').on('click', function (e) {
    e.preventDefault();
    $(this).siblings().slideToggle();
  });
  //end open/close пункты в меню бокового фильтра

  //begin open/close пункты в форме бокового фильтра
  $('.filter-form-item__header--toggle').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).siblings().slideToggle();
  });
  //end open/close пункты в форме бокового фильтра

};