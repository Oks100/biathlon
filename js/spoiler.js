$(document).ready(function() {
    $('.important-news__news-spoiler').click(function(event) {
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// $(document).ready(function() {
//     $('.timeline-season__body-nav-title').click(function(event) {
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });
$(document).ready(function() {
    $('.timeline-season__body-nav-title').each(function() {
      if (!$(this).hasClass('active')) {
        $(this).next().hide();
      }
    });
  
    $('.timeline-season__body-nav-title').click(function(event) {
      $(this).toggleClass('active').next().slideToggle(300);
    });
  });