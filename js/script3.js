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
/*Закрытие по свайпу*/
    // $(function() {
    //     $(".burger-menu__layer-background").on("swiperight", swipeHandler);
      
    //     function swipeHandler(event) {
    //     $(".burger-menu_nav-menu-content").removeClass("new-slide");
    //     $(".burger-menu_nav-menu-content").removeClass("new-slide2");
    //     $(".burger-menu_nav-menu-content").removeClass("new-slide3");
    //     $(".burger-menu_nav-menu-content").removeClass("new-slide4");
    //     }
    //   });
/*Закрытие по свайпу*/
/*Навигация в бургер меню*/


/*Кнопка сайдбара*/
$(document).ready(function(){
    $('.layer-toggle').click(function () {
        $('.body').toggleClass('open-menu');
        // $('.body').toggleClass('overflow');
            });
        });

$(document).ready(function(){
    $('.layer-background').click(function () {
        $('.body').removeClass('open-menu');
            });
    });

$(document).ready(function(){
    $('.swipe-area').click(function () {
        $('.body').removeClass('open-menu');
            });
    });
/*Кнопка сайдбара*/

/*Свайп сайдбара*/
// $(function() {
//     $(".swipe-area").on("swipeleft", swipeHandler);
//     $(".swipe-area").on("swiperight", swipeHandler);
//     $(".layer-toggle").on("swipeleft", swipeHandler);
//     $(".layer-toggle").on("swiperight", swipeHandler);

//     function swipeHandler(event) {
//         $('.body').toggleClass('open-menu');
//         $('.body').toggleClass('overflow');
//     }
//   });
/*Свайп сайдбара*/

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