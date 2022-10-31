$(document).ready(function() {
    $('.important-news__news-spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// Спойлер топ 10
// $(document).ready(function() {
//     $('.slider-main-cup-spoiler').click(function(event) {
//         $('.slider-main-cup').slideToggle(300);
//         $('.slider-main-cup').toggleClass('active');
//     });
// });

// $(document).ready(function() {
//     $('.main-cup__next').click(function(event) {
//         $('.shooting-statistics').slideToggle(300);
//         $('.main-cup__body2').toggleClass('active').next().slideToggle(300);
//         $('.athletes-speed').toggleClass('active');
//     });
// });

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