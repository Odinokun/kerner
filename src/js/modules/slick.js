module.exports = function() {

  // begin Slick slider

  $('#team-slider__list').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 1L2 6L6 11\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 11L5 6L1 1\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('#popular-slider__list').slick({
    dots: true,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 1L2 6L6 11\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 11L5 6L1 1\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 861,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('#success-slider__list').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<div class='prev'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 1L2 6L6 11\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 11L5 6L1 1\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 861,
        settings: {
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product-card-slider__list').slick({
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1151,
        settings: {
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 861,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          dots: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 481,
        settings: {
          dots: true,
          slidesToShow: 1
        }
      }
    ]
  });


  $('#card-body-slider-lg__list').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    adaptiveHeight: true,
    asNavFor: '#card-body-slider-sm__list'
  });
  $('#card-body-slider-sm__list').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '#card-body-slider-lg__list',
    prevArrow: "<div class='prev'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6 1L2 6L6 11\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    nextArrow: "<div class='next'><svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M1 11L5 6L1 1\" stroke=\"white\" stroke-width=\"2\"/></svg></div>",
    dots: true,
    infinite: false,
    centerMode: true,
    focusOnSelect: true
  });




  // end Slick slider

};