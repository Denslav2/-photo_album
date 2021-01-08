/* Smooth scroll */
$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 100;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
});

/*Scroll BTN*/
$(function () {
    $('.scrollup').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    })
  })
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
  });