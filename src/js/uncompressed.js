// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'about',
    'brands',
    'brand',
    'reviews',
    'contacts',
    'catalog',
    'category',
    'selection'
    ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}

// END Меню для навигации при разработке


//====== Begin Programmer code ======

//выпадающий aside в мобильной версии
$('.pages-aside__top-arr').on('click', function () {
  $('.pages-aside-menu').slideToggle();
  $(this).toggleClass('active');
});

//счетчик в карте товара
$('.counter__count').on('click', function() {
  const targetCounter = $(this).parent('.counter');
  const counter = $(targetCounter).children('.counter__input');
  let   counterVal = $(counter).val();

  if ($(this).hasClass('counter__count--up')) {
    counterVal++;
  } else {
    counterVal--;
  }

  counterVal = counterVal < 1 ? 1 : counterVal;
  $(counter).val(counterVal);
});

//появления счетчика по клику кнопки с слайдере каталога
$('.popular-slider__basket').on('click', function (e) {
  e.preventDefault();
  $(this).parents('.popular-slider__footer').addClass('active');
});


//open/close пункты в мобильном меню каталога
$('.catalog-mobile-menu__item--first').on('click', function () {
  if($(this).hasClass('active')) {
    $(this).siblings().slideUp();
    $(this).removeClass('active');
  } else {
    $('.catalog-mobile-menu__item--first').siblings().slideUp();
    $('.catalog-mobile-menu__item--first').removeClass('active');
    $(this).siblings().slideToggle();
    $(this).toggleClass('active');
  }
});

//open/close пункты в меню бокового фильтра
$('.filter-menu__item--first').on('click', function (e) {
  e.preventDefault();
  $(this).siblings().slideToggle();
});

//open/close пункты в форме бокового фильтра
$('.filter-form-item__header--toggle').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('active');
  $(this).siblings().slideToggle();
});

//цвет кнопок в фильтре переключения вида (линейный/карты)
$('.category-sort-filter__right-link').on('click', function () {
  $('.category-sort-filter__right-link').removeClass('active');
  $(this).addClass('active');
});