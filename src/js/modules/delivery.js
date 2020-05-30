module.exports = function() {

  //begin выбор варианта доставки на странице оформления заказа
  $('.request__delivery-radio').on('click', function () {
    if($('#request__delivery-service').prop('checked')){
      $('#request__delivery-company').slideDown();
    } else{
      $('#request__delivery-company').slideUp();
    }
  });
  //end выбор варианта доставки на странице оформления заказа

};