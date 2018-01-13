$(document).ready(function(){
  //slick
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  //navbar
  var scrollNavbar = 0;
  $(window).scroll(function() {
    var goingDown = $(this).scrollTop();
    if (goingDown - scrollNavbar > 50) {
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      scrollNavbar = goingDown;
    } else if (scrollNavbar - goingDown > 50) {
      $('.navbar').animate({top: 0}, 150);
      scrollNavbar = goingDown;
    }
  });
});
