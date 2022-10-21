window.addEventListener('DOMContentLoaded', (e) => {
  const btn = document.querySelector('.header__hamburger');
  const menu = document.querySelector('.header__menu');
  const menuItem = document.querySelectorAll('.header__menu-item');

  
  btn.addEventListener('click', (e) => {
    menu.classList.toggle('header__menu_active');
    btn.classList.toggle('header__hamburger_active');
  });


  menuItem.forEach(item => {
    item.addEventListener('click', (e) => {
      menu.classList.toggle('header__menu_active');
      btn.classList.toggle('header__hamburger_active');
    });
  });


});



$(document).ready(function(){
    $('.feedback__carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/reviews/reviews-left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/reviews/reviews-right.png"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
        $('.pageup').fadeIn();
    } else {
    $('.pageup').fadeOut();
    }
});



