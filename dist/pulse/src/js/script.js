$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/chevron-left-solid.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/chevron-right-solid.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
    
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
        $(item).each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            });
        });
    }

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    
    $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });

    $('.button_mini').each(function(i) {
        $(this).on('click', function() {
            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
            $('.overlay, #order').fadeIn('slow');
        });
    });

    function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                phone: "required",
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                phone: "Пожалуйста, введите свой номер телефона",
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    }

    validateForms('#consultation-form');
    validateForms('#consultation form');
    validateForms('#order form');

    $('input[name=phone]').mask("+7 (999) 999-99-99");

    $(window).scroll(function () {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
        $('.pageup').fadeOut();
        }
    });

    // new WOW().init();

});

// const tabContent = document.querySelectorAll('.catalog__content'),
//           tabWrapper = document.querySelector('.catalog__tabs'),
//           tabs = document.querySelectorAll('.catalog__tab');
 
//     function hideTabContent() {
//         tabContent.forEach(item => {
//             item.style.display = 'none';
//         });
//         tabs.forEach(item => {
//             item.classList.remove('catalog__tab_active');
//         });
//     }
 
//     function showTabContent(i=0) {
//         tabContent[i].style.display = 'flex';
//         tabs[i].classList.add('catalog__tab_active');
//     }

//     hideTabContent();
//     showTabContent();

//     tabWrapper.addEventListener('click', (e) => {
//         const target = e.target;
//         console.log(target);
//         if (target && target.closest('.catalog__tab')) { // 1
//             console.log('2click');
//             tabs.forEach((item, i) => {
//                 if (target == item || target.parentElement == item ) {  // 2
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//       });

// const button = document.querySelectorAll('[data-modal]');
// const modal = document.querySelector('#consultation');
// const overlay = document.querySelector('.overlay');
// const btnCloseModal = document.querySelectorAll('[data-close]');


// function closeModal () {
//     modal.style.display = 'none';
//     overlay.classList.remove('show');
//     document.body.style.overflow = '';

// }

// function openModal () {
//     modal.style.display = 'block';
//     overlay.classList.add('show');
//     document.body.style.overflow = 'hidden';

// }

// button.forEach(item => {
//     item.addEventListener('click', openModal);
// });

// btnCloseModal.forEach(item => {
//     item.addEventListener('click', closeModal);
// });



