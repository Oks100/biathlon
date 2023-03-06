  /* Бургер кнопка */
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    
  
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
    $(document).ready(function(){
      $('.burger-menu_button').click(function () {
        $('.body').toggleClass('overflow');
        });
      });
    
      $(document).ready(function(){
        $('.burger-menu_link').click(function () {
          $('.body').toggleClass('overflow');
          });
        });
  }
  
  burgerMenu('.burger-menu');
  /* Бургер кнопка */

/* Табы*/
$('.burger-menu__tab').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.burger-menu_nav-menu-list2[data-tab="'+ id +'"]');
    
    $('.burger-menu__tab.active').removeClass('active');
    $(this).addClass('active'); // 2
    
    $('.burger-menu_nav-menu-list2.active').removeClass('active');
    content.addClass('active');
  });
  /* Табы*/

/*Навигация в бургер меню*/
$(document).ready(function(){
    $('.more1').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide');
             });
    });
  
  
$(document).ready(function(){
    $('.burger-menu-back-tab.slide1').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide');
            });
    });
  
$(document).ready(function(){
    $('.burger-menu__layer-background').click(function () {
        $('.burger-menu_nav-menu-content').removeClass('new-slide');
            });
    });

 $(document).ready(function(){
    $('.more2').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide2');
            });
    });
      
      
$(document).ready(function(){
    $('.burger-menu-back-tab.slide2').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide2');
            });
    });
      
$(document).ready(function(){
    $('.burger-menu__layer-background').click(function () {
        $('.burger-menu_nav-menu-content').removeClass('new-slide2');
            });
    });

$(document).ready(function(){
    $('.more3').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide3');
            });
    });
          
          
$(document).ready(function(){
    $('.burger-menu-back-tab.slide3').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide3');
            });
    });
          
$(document).ready(function(){
    $('.burger-menu__layer-background').click(function () {
        $('.burger-menu_nav-menu-content').removeClass('new-slide3');
            });
    });

$(document).ready(function(){
    $('.more4').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide4');
            });
    });
              
              
$(document).ready(function(){
    $('.burger-menu-back-tab.slide4').click(function () {
        $('.burger-menu_nav-menu-content').toggleClass('new-slide4');
            });
    });
              
$(document).ready(function(){
    $('.burger-menu__layer-background').click(function () {
        $('.burger-menu_nav-menu-content').removeClass('new-slide4');
            });
    });

/*Кнопка сайдбара*/
$(document).ready(function(){
    $('.layer-toggle').click(function () {
        $('.body').toggleClass('open-menu');
            });
        });

$(document).ready(function(){
    $('.layer-background').click(function () {
        $('.body').removeClass('open-menu');
        $('.burger-menu').removeClass('burger-menu_active');
        $('.body').removeClass('overflow');
        $('.body').removeClass('log-in-window');
            });
    });

$(document).ready(function(){
    $('.swipe-area').click(function () {
        $('.body').removeClass('open-menu');
            });
    });
/*Кнопка сайдбара*/

/*Закрытие сайдбара по свайпу*/
$(function() {
    $(".swipe-area").on("swipeleft", swipeHandler);
    $(".swipe-area").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
      event.type == 'swipeleft' ? $(".body").toggleClass("open-menu") : $(".body").removeClass("open-menu");
    }
  });

  $(function() {
    $(".layer-background").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
      event.type == 'swipeleft' ? $(".body").toggleClass("open-menu") : $(".body").removeClass("open-menu");
    }
  });

  $(function() {
    $(".layer-toggle").on("swipeleft", swipeHandler);
    $(".layer-toggle").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
      event.type == 'swipeleft' ? $(".body").toggleClass("open-menu") : $(".body").removeClass("open-menu");
    }
  });
/*Закрытие сайдбара по свайпу*/

/*Закрытие слайдов в бургере*/
$(function() {
    $(".burger-menu__layer-background").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
      event.type == 'swipeleft' ? $(".burger-menu_nav-menu-content").toggleClass("new-slide") : $(".burger-menu_nav-menu-content").removeClass("new-slide");
      event.type == 'swipeleft' ? $(".burger-menu_nav-menu-content").toggleClass("new-slide2") : $(".burger-menu_nav-menu-content").removeClass("new-slide2");
      event.type == 'swipeleft' ? $(".burger-menu_nav-menu-content").toggleClass("new-slide3") : $(".burger-menu_nav-menu-content").removeClass("new-slide3");
      event.type == 'swipeleft' ? $(".burger-menu_nav-menu-content").toggleClass("new-slide4") : $(".burger-menu_nav-menu-content").removeClass("new-slide4");
    }
  });
/*Закрытие слайдов в бургере*/

/*Открытие окна уведомлений на мобилке*/
$(document).ready(function(){
    $('.header__mobile-link-massage2').click(function () {
        $('.body').toggleClass('mobile-notification-active');
        });
    });

$(document).ready(function(){
    $('.mobile-notification__close').click(function () {
        $('.body').removeClass('mobile-notification-active');
        });
    });
/*Открытие окна уведомлений на мобилке*/

/*Открытие окна гонок на мобилке*/
$(document).ready(function(){
    $('.mobile-timer__more-events').click(function () {
        $('.body').toggleClass('mobile-timer__more-events-active');
        });
    });

$(document).ready(function(){
    $('.mobile-timer__more-events_head-close').click(function () {
        $('.body').removeClass('mobile-timer__more-events-active');
        });
    });
/*Открытие окна гонок на мобилке*/

$(document).ready(function(){
    $('.exit').click(function () {
        $('.body').addClass('confirmation-menu');
        });
    });

$(document).ready(function(){
    $('.burger-menu__layer-background-global, .exit-yes, .exit-no').click(function () {
        $('.body').removeClass('confirmation-menu');
        });
    });

$(document).ready(function(){
    $('.exit-yes').click(function () {
        $('.body').addClass('guest');
        $('.body').removeClass('log-in-entered');
        });
    });

$(document).ready(function(){
    $('.sign-up').click(function () {
        $('.body').addClass('log-in-window sign-up-tab');
        });
    });

$(document).ready(function(){
    $('.log-in').click(function () {
        $('.body').addClass('log-in-window');
        $('.body').removeClass('log-in-confirmed');
        });
    });

$(document).ready(function(){
    $('.burger-menu__tab_sign-up').click(function () {
        $('.body').addClass('sign-up-tab');
        });
    });

$(document).ready(function(){
    $('.burger-menu__tab_log-in').click(function () {
        $('.body').removeClass('sign-up-tab');
        });
    });

$(document).ready(function(){
    $('.burger-menu__log-in-menu_close').click(function () {
        $('.body').removeClass('log-in-window sign-up-tab');
        });
    });

$(document).ready(function(){
    $('.burger-menu__enter-button').click(function () {
        $('.body').addClass('log-in-entered');
        $('.body').removeClass('guest');
        });
    });

$(document).ready(function(){
    $('.burger-menu__log-in_button-exit').click(function () {
        $('.body').removeClass('log-in-entered');
        $('.body').addClass('guest');
        });
    });

$(document).ready(function(){
    $('.sign-up-button').click(function () {
        $('.body').addClass('log-in-confirmed');
        });
    });

$(document).ready(function(){
    $('.banner__cookie_yes, .banner__cookie_no').click(function () {
        $('.body').addClass('banner__cookie_close');
        $('.body').addClass('banner__cookie_close');
        });
    });


$(document).ready(function(){
    $('.learn-more__text2-href').hover(
    function() {
        $('.swiper-button-prev-icon').addClass('rotate');
        },
    function() {
        $('.swiper-button-prev-icon').removeClass('rotate');
        },
    );
    });
      
    $(document).ready(function(){
    $('.learn-more__text2-href').hover(
    function() {
        $('.swiper-button-next-icon').addClass('rotate');
        },
    function() {
        $('.swiper-button-next-icon').removeClass('rotate');
        },
    );
    });
      
    $(document).ready(function(){
    $('.learn-more__text3-href').hover(
    function() {
        $('.swiper-button-prev-icon').addClass('rotate2');
        },
    function() {
        $('.swiper-button-prev-icon').removeClass('rotate2');
        },
    );
    });
      
    $(document).ready(function(){
    $('.learn-more__text3-href').hover(
    function() {
        $('.swiper-button-next-icon').addClass('rotate2');
        },
    function() {
        $('.swiper-button-next-icon').removeClass('rotate2');
        },
    );
    });
      