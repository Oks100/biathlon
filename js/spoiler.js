$(document).ready(function() {
    $('.important-news__news-spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});