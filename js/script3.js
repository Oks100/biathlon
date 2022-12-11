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

$(function() {
    $(".swipe-area").on("swipeleft", swipeHandler);
    $(".swipe-area").on("swiperight", swipeHandler);
    $(".layer-background").on("swipeleft", swipeHandler);
    $(".layer-background").on("swiperight", swipeHandler);
  
    function swipeHandler(event) {
    //   $(event.target).removeClass("right left");
      event.type == 'swipeleft' ? $(".body").toggleClass("open-menu") : $(".body").removeClass("open-menu");
    }
  });