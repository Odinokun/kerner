module.exports = function() {

  // begin change top menu background
  $(function() {
    $(window).scroll(function() {
      let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
      let menu = document.getElementById('header-mobile');
      if (topToDocument <= 20) {
        $(menu).removeClass('colored');
      } else {
        $(menu).addClass('colored');
      }
    });

    let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
    let menu = document.getElementById('header');

    if (topToDocument <= 20) {
      $(menu).removeClass('colored');
    } else {
      $(menu).addClass('colored');
    }
  });
  // end change top menu background

  // begin change top menu background
  $(function() {
    $(document).ready(function() {
      let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
      let menu = document.getElementById('header-mobile');
      if (topToDocument <= 20) {
        $(menu).removeClass('colored');
      } else {
        $(menu).addClass('colored');
      }
    });

    let topToDocument = window.pageYOffset || document.documentElement.scrollTop;
    let menu = document.getElementById('header');

    if (topToDocument <= 20) {
      $(menu).removeClass('colored');
    } else {
      $(menu).addClass('colored');
    }
  });
  // end change top menu background

};