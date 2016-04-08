$(document).ready(function(){
  $('.parallax').parallax();
  $('.scrollspy').scrollSpy();
});

$('nav a').click(function () {
 var $href = $(this).attr('href');
 $('body').stop().animate({
   scrollTop: $($href).offset().top
 }, 500);
 return false;
});
