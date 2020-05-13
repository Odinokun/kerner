module.exports = function() {

  // begin scroll On/Off
    const allBtnOnOff = document.querySelectorAll('.scroll-on-off'),
    allBtnOn = document.querySelectorAll('.scroll-on'),
    allBtnOff = document.querySelectorAll('.scroll-off');

  let disableScroll = function () {
    let pagePosition = window.scrollY;
    document.body.classList.add('disable-scroll');
    document.body.dataset.position = pagePosition;
    document.body.style.top = -pagePosition + 'px';
  };

  let enableScroll = function () {
    let pagePosition = parseInt(document.body.dataset.position, 10);
    document.body.style.top = 'auto';
    document.body.classList.remove('disable-scroll');
    window.scroll({top: pagePosition, left: 0});
    document.body.removeAttribute('data-position');
  };

  //удаляем класс active у всех универсальных кнопок
  let removeActive = function () {
    let allBtnOnOff = document.querySelectorAll('.scroll-on-off');

    for (let i = 0; i < allBtnOnOff.length; i++){
      allBtnOnOff[i].classList.remove('active');
    }
  };

  if (allBtnOnOff) {
    for (const btnOnOff of allBtnOnOff) {
      btnOnOff.addEventListener('click', (e) => {
        //если универсальная кнопка активна (меню открыто)
        if(e.currentTarget.classList.contains('active')) {
          enableScroll();//включаем скролл
          removeActive();//удаляем класс active у всех универсальных кнопок
        } else {
          disableScroll();//выключаем скролл
          removeActive();//удаляем класс active у всех универсальных кнопок
          //добавляем класс active кнопке по которой кликнули
          e.currentTarget.classList.add('active');
        }
      });
    }
  }

  if (allBtnOff) {
    for (const btnOff of allBtnOff) {
      btnOff.addEventListener('click', (e) => {
        disableScroll();
        removeActive();
      });
    }
  }

  if (allBtnOn) {
    for (const btnOn of allBtnOn) {
      btnOn.addEventListener('click', (e) => {
        enableScroll();
        removeActive();
      });
    }
  }
  // end scroll On/Off

};