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
    $(function() {
        $(".burger-menu__layer-background").on("swiperight", swipeHandler);
      
        function swipeHandler(event) {
        $(".burger-menu_nav-menu-content").removeClass("new-slide");
        $(".burger-menu_nav-menu-content").removeClass("new-slide2");
        $(".burger-menu_nav-menu-content").removeClass("new-slide3");
        $(".burger-menu_nav-menu-content").removeClass("new-slide4");
        }
      });
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
//         $(".body").toggleClass("open-menu");
//         $('.body').toggleClass('overflow');
//     }
//   });
/*Свайп сайдбара*/

/*Закрытие сайдбара по свайпу*/
$(function() {
    $(".swipe-area").on("swipeleft", swipeHandler);
    $(".swipe-area").on("swiperight", swipeHandler);
    // $(".layer-background").on("swipeleft", swipeHandler);
    // $(".layer-background").on("swiperight", swipeHandler);
    // $(".layer-toggle").on("swipeleft", swipeHandler);
    // $(".layer-toggle").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
    //   $(event.target).removeClass("right left");
      event.type == 'swipeleft' ? $(".body").toggleClass("open-menu") : $(".body").removeClass("open-menu");
    }
  });

  $(function() {
    // $(".layer-background").on("swipeleft", swipeHandler);
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
