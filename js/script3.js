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
        $('.body').toggleClass('overflow');
            });
    });

$(document).ready(function(){
    $('.layer-background').click(function () {
        $('.body').removeClass('open-menu');
        $('.body').removeClass('overflow');
            });
    });
/*Кнопка сайдбара*/