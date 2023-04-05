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
      $('.target-2').addClass('hide-on-plus');
      });
  });
  
$(document).ready(function(){
  $('.target-minus-2').click(function () {
      $('.target-2').addClass('hide-miss');
      $('.target-2').addClass('hide-on-minus');
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


  $(document).ready(function(){
    $('.target-plus-6, .percent-plus-6').click(function () {
        if($(".timeline__item-comments-target-percent").hasClass('percent-plus-6'))
        $('.target-6').addClass('hide-on-target');
        });
    });
        
  $(document).ready(function(){
    $('.target-minus-6').click(function () {
        $('.target-6').addClass('hide-miss');
        $('.timeline__item-comments-target-percent').removeClass('percent-plus-6');
        });
    });
  
  $(document).ready(function(){
    $('.target-6 .timeline__item-comments-target-percent').hover(
        function() {
            $(".target-6").addClass('plus-hover-6');
        }, function() {
            $(".target-6").removeClass('plus-hover-6');
        }
    );
    });





    $(document).ready(function(){
      $('.target-plus-7, .percent-plus-7').click(function () {
          if($(".timeline__item-comments-target-percent").hasClass('percent-plus-7'))
          $('.target-7').addClass('hide-on-target');
          });
      });
          
    $(document).ready(function(){
      $('.target-minus-7').click(function () {
          $('.target-7').addClass('hide-miss');
          $('.timeline__item-comments-target-percent').removeClass('percent-plus-7');
          });
      });
    
    $(document).ready(function(){
      $('.target-7 .timeline__item-comments-target-percent').hover(
          function() {
              $(".target-7").addClass('plus-hover-7');
          }, function() {
              $(".target-7").removeClass('plus-hover-7');
          }
      );
      });

      let copyText32 = document.querySelector(".ip-info32");
      copyText32.querySelector("button").addEventListener("click", function () {
        let input = copyText32.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText32.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText32.classList.remove("active");
        }, 2500);
      });

      let copyText31 = document.querySelector(".ip-info31");
      copyText31.querySelector("button").addEventListener("click", function () {
        let input = copyText31.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText31.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText31.classList.remove("active");
        }, 2500);
      });

      let copyText30 = document.querySelector(".ip-info30");
      copyText30.querySelector("button").addEventListener("click", function () {
        let input = copyText30.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText30.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText30.classList.remove("active");
        }, 2500);
      });

      let copyText29 = document.querySelector(".ip-info29");
      copyText29.querySelector("button").addEventListener("click", function () {
        let input = copyText29.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText29.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText29.classList.remove("active");
        }, 2500);
      });

      let copyText28 = document.querySelector(".ip-info28");
      copyText28.querySelector("button").addEventListener("click", function () {
        let input = copyText28.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText28.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText28.classList.remove("active");
        }, 2500);
      });

      let copyText27 = document.querySelector(".ip-info27");
      copyText27.querySelector("button").addEventListener("click", function () {
        let input = copyText27.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText27.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText27.classList.remove("active");
        }, 2500);
      });

      let copyText26 = document.querySelector(".ip-info26");
      copyText26.querySelector("button").addEventListener("click", function () {
        let input = copyText26.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText26.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText26.classList.remove("active");
        }, 2500);
      });

      let copyText25 = document.querySelector(".ip-info25");
      copyText25.querySelector("button").addEventListener("click", function () {
        let input = copyText25.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText25.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText25.classList.remove("active");
        }, 2500);
      });

      let copyText24 = document.querySelector(".ip-info24");
      copyText24.querySelector("button").addEventListener("click", function () {
        let input = copyText24.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText24.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText24.classList.remove("active");
        }, 2500);
      });

      let copyText23 = document.querySelector(".ip-info23");
      copyText23.querySelector("button").addEventListener("click", function () {
        let input = copyText23.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText23.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText23.classList.remove("active");
        }, 2500);
      });

      let copyText22 = document.querySelector(".ip-info22");
      copyText22.querySelector("button").addEventListener("click", function () {
        let input = copyText22.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText22.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText22.classList.remove("active");
        }, 2500);
      });


      let copyText21 = document.querySelector(".ip-info21");
      copyText21.querySelector("button").addEventListener("click", function () {
        let input = copyText21.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText21.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText21.classList.remove("active");
        }, 2500);
      });

      let copyText20 = document.querySelector(".ip-info20");
      copyText20.querySelector("button").addEventListener("click", function () {
        let input = copyText20.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText20.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText20.classList.remove("active");
        }, 2500);
      });

      let copyText19 = document.querySelector(".ip-info19");
      copyText19.querySelector("button").addEventListener("click", function () {
        let input = copyText19.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText19.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText19.classList.remove("active");
        }, 2500);
      });

      let copyText18 = document.querySelector(".ip-info18");
      copyText18.querySelector("button").addEventListener("click", function () {
        let input = copyText18.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText18.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText18.classList.remove("active");
        }, 2500);
      });

      let copyText17 = document.querySelector(".ip-info17");
      copyText17.querySelector("button").addEventListener("click", function () {
        let input = copyText17.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText17.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText17.classList.remove("active");
        }, 2500);
      });

      let copyText16 = document.querySelector(".ip-info16");
      copyText16.querySelector("button").addEventListener("click", function () {
        let input = copyText16.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText16.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText16.classList.remove("active");
        }, 2500);
      });

      let copyText15 = document.querySelector(".ip-info15");
      copyText15.querySelector("button").addEventListener("click", function () {
        let input = copyText15.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText15.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText15.classList.remove("active");
        }, 2500);
      });

      let copyText14 = document.querySelector(".ip-info14");
      copyText14.querySelector("button").addEventListener("click", function () {
        let input = copyText14.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText14.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText14.classList.remove("active");
        }, 2500);
      });

      let copyText13 = document.querySelector(".ip-info13");
      copyText13.querySelector("button").addEventListener("click", function () {
        let input = copyText13.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText13.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText13.classList.remove("active");
        }, 2500);
      });

      let copyText12 = document.querySelector(".ip-info12");
      copyText12.querySelector("button").addEventListener("click", function () {
        let input = copyText12.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText12.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText12.classList.remove("active");
        }, 2500);
      });

      let copyText11 = document.querySelector(".ip-info11");
      copyText11.querySelector("button").addEventListener("click", function () {
        let input = copyText11.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText11.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText11.classList.remove("active");
        }, 2500);
      });


      let copyText10 = document.querySelector(".ip-info10");
      copyText10.querySelector("button").addEventListener("click", function () {
        let input = copyText10.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText10.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText10.classList.remove("active");
        }, 2500);
      });

      let copyText9 = document.querySelector(".ip-info9");
      copyText9.querySelector("button").addEventListener("click", function () {
        let input = copyText9.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText9.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText9.classList.remove("active");
        }, 2500);
      });

      let copyText8 = document.querySelector(".ip-info8");
      copyText8.querySelector("button").addEventListener("click", function () {
        let input = copyText8.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText8.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText8.classList.remove("active");
        }, 2500);
      });

      let copyText7 = document.querySelector(".ip-info7");
      copyText7.querySelector("button").addEventListener("click", function () {
        let input = copyText7.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText7.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText7.classList.remove("active");
        }, 2500);
      });

      let copyText6 = document.querySelector(".ip-info6");
      copyText6.querySelector("button").addEventListener("click", function () {
        let input = copyText6.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText6.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText6.classList.remove("active");
        }, 2500);
      });

      let copyText5 = document.querySelector(".ip-info5");
      copyText5.querySelector("button").addEventListener("click", function () {
        let input = copyText5.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText5.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText5.classList.remove("active");
        }, 2500);
      });

      let copyText4 = document.querySelector(".ip-info4");
      copyText4.querySelector("button").addEventListener("click", function () {
        let input = copyText4.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText4.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText4.classList.remove("active");
        }, 2500);
      });

      let copyText3 = document.querySelector(".ip-info3");
      copyText3.querySelector("button").addEventListener("click", function () {
        let input = copyText3.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText3.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText3.classList.remove("active");
        }, 2500);
      });

      let copyText2 = document.querySelector(".ip-info2");
      copyText2.querySelector("button").addEventListener("click", function () {
        let input = copyText2.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText2.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText2.classList.remove("active");
        }, 2500);
      });

      let copyText1 = document.querySelector(".ip-info1");
      copyText1.querySelector("button").addEventListener("click", function () {
        let input = copyText1.querySelector("input.text");
        input.select();
        document.execCommand("copy");
        copyText1.classList.add("active");
        window.getSelection().removeAllRanges();
        setTimeout(function () {
          copyText1.classList.remove("active");
        }, 2500);
      });








      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   if (!element.contains(event.target)) {
      //     element.classList.remove('active');
      //   }
      // });


      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   if (!element.contains(event.target)) {
      //     element.classList.remove('active');
      //   }
      //   setTimeout(function() {
      //     element.classList.remove('active');
      //   }, 2000);
      // });



      // const element = document.querySelector('.copy-icon');

      // element.addEventListener('click', () => {
      //   element.classList.add('active');
      // });
      
      // document.addEventListener('click', (event) => {
      //   setTimeout(() => {
      //     if (!element.contains(event.target)) {
      //       element.classList.remove('active');
      //     }
      //   }, 1000);
      // });


      $(document).ready(function(){
        $('.timeline__item-comments-more-comments').click(function () {
            $('.timeline__item-comments-more-comments').addClass('hide');
            $('.timeline__item-comments-discussion').removeClass('hide');
            });
        });
