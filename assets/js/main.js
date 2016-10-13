$(document).ready(function(){
  $('.menu-btn').click(function(){
    $('.mobile-nav .nav').toggle();
  });

  $(window).resize(function(){
    if($(window).width() > 680) {
      $('.nav').removeAttr('style');
    }
  });
});