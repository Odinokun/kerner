module.exports = function() {

  //begin выравнивание высоты ячеек в сравнении
  $(document).ready(function () {
    tdHeight();
  });

  function tdHeight() {
    for (let i = 1; i < 50; i++){
      let max_col_height = 0; // максимальная высота, первоначально 0
      $('.compare__slide-row--' + i).each(function(){ // цикл "для каждой из колонок"
        if ($(this).height() > max_col_height) { // если высота колонки больше значения максимальной высоты,
          max_col_height = $(this).height(); // то она сама становится новой максимальной высотой
        }
      });
      $('.compare__slide-row--' + i).height(max_col_height); // устанавливаем высоту каждой колонки равной значению максимальной высоты
    }
  }
  //end выравнивание высоты ячеек в сравнении

};