$(document).ready(function(){
  $('.target-plus-1, .percent-plus-1').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-1'))
      $('.target-1').addClass('hide-on-target');
      });
  });

$(document).ready(function(){
  $('.target-minus-1').click(function () {
      $('.target-1').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-1');
      });
  });

$(document).ready(function(){
  $('.target-1 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-1").addClass('plus-hover-1');
      }, function() {
          $(".target-1").removeClass('plus-hover-1');
      }
  );
  });



$(document).ready(function(){
  $('.target-plus-2, .percent-plus-2').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-2'))
      $('.target-2').addClass('hide-on-target');
      });
  });
  
$(document).ready(function(){
  $('.target-minus-2').click(function () {
      $('.target-2').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-2');
      });
  });

$(document).ready(function(){
  $('.target-2 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-2").addClass('plus-hover-2');
      }, function() {
          $(".target-2").removeClass('plus-hover-2');
      }
  );
  });




$(document).ready(function(){
  $('.target-plus-3, .percent-plus-3').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-3'))
      $('.target-3').addClass('hide-on-target');
      });
  });
      
$(document).ready(function(){
  $('.target-minus-3').click(function () {
      $('.target-3').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-3');
      });
  });

$(document).ready(function(){
  $('.target-3 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-3").addClass('plus-hover-3');
      }, function() {
          $(".target-3").removeClass('plus-hover-3');
      }
  );
  });



$(document).ready(function(){
  $('.target-plus-5, .percent-plus-5').click(function () {
      if($(".timeline__item-comments-target-percent").hasClass('percent-plus-5'))
      $('.target-5').addClass('hide-on-target');
      });
  });
  
$(document).ready(function(){
  $('.target-minus-5').click(function () {
      $('.target-5').addClass('hide-miss');
      $('.timeline__item-comments-target-percent').removeClass('percent-plus-5');
      });
  });
  
$(document).ready(function(){
  $('.target-5 .timeline__item-comments-target-percent').hover(
      function() {
          $(".target-5").addClass('plus-hover-5');
      }, function() {
          $(".target-5").removeClass('plus-hover-5');
      }
  );
  });