//htmlの呼び出し
$(window).on('load', function() {
  $("#header").load('html/header.html');
  $("#main").load("html/main.html");
  $("#scroolbar").load("html/scroolbar.html");
  $("#footer").load("html/footer.html");
  $.getScript("js/script.js", function(){});
});

//ドロップダウンメニュー
$(function() {
  $('.main-menu').hover(
    function(){
      $(this).children('.sub-menu').slideDown(210);
    },
    function(){
      $(this).children('.sub-menu').hide();
    }
  );
});


//＋アイコンを-アイコンに変える
$(function(){
  $('.js-rm-line').hover(
    function(){
      $(this).parents('.main-menu').children('.main-menu__item').addClass('is-open');
    },
    function(){
      $(this).parents('.main-menu').children('.main-menu__item').removeClass('is-open');
    }
  );
});


//ハンバーガーメニュー
$(function() {
  $('.c-ham-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.p-header__nav__items').slideToggle(210);
  });
});


//リサイズ時に読み込み
$(window).resize(function(){
  let width = $(window).width();
  if(width <= 1200){   //リサイズ時の横並びナビメニュー再表示設定
    $('.p-header__nav__items').css( {'display':'none'});
  } else{
    $('.p-header__nav__items').css( {'display':'flex'});
  }
  $('.c-ham-btn').removeClass('active');
});