$(document).ready(function() {
    $('.important-news__news-spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

$(document).ready(function() {
    $('.slider-main-cup-spoiler').click(function(event) {
        $('.slider-main-cup').slideToggle(300);
        $('.slider-main-cup').toggleClass('active');
    });
});

// $(document).ready(function() {
//     $('.main-cup__next').click(function(event) {
//         $('.shooting-statistics').slideToggle(300);
//         $('.main-cup__body2').toggleClass('active').next().slideToggle(300);
//         $('.athletes-speed').toggleClass('active');
//     });
// });