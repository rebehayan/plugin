$(document).ready(function(){
  $('.visual').slick({
    autoplay: true,
    autoplaySpeed: 1000
  });
  $('.play').on('click', function(){
    $('.visual').slick('slickPlay');
  });
  $('.pause').on('click', function(){
    $('.visual').slick('slickPause');
  });
});
