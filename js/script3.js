  /* Бургер кнопка */
  function burgerMenu(selector) {
    let menu = $(selector);
    let button = menu.find('.burger-menu_button', '.burger-menu_lines');
    let links = menu.find('.burger-menu_link');
    
    button.on('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
    
    links.on('click', () => toggleMenu());
    
  
    function toggleMenu(){
      menu.toggleClass('burger-menu_active');
      
      if (menu.hasClass('burger-menu_active')) {
        $('body').css('overlow', 'hidden');
      } else {
        $('body').css('overlow', 'visible');
      }
    }
    $(document).ready(function(){
      $('.burger-menu_button').click(function () {
        $('.body').toggleClass('overflow');
        });
      });
    
      $(document).ready(function(){
        $('.burger-menu_link').click(function () {
          $('.body').toggleClass('overflow');
          });
        });
  }
  
  burgerMenu('.burger-menu');
  /* Бургер кнопка */

/* Табы*/
$('.burger-menu__tab').click(function() {
    var id = $(this).attr('data-tab'),
        content = $('.burger-menu_nav-menu-list2[data-tab="'+ id +'"]');
    
    $('.burger-menu__tab.active').removeClass('active');
    $(this).addClass('active'); // 2
    
    $('.burger-menu_nav-menu-list2.active').removeClass('active');
    content.addClass('active');
  });
  /* Табы*/

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

/*Кнопка сайдбара*/
$(document).ready(function(){
    $('.layer-toggle').click(function () {
        $('.body').toggleClass('open-menu');
            });
        });

$(document).ready(function(){
    $('.layer-background').click(function () {
        $('.body').removeClass('open-menu');
        $('.burger-menu').removeClass('burger-menu_active');
        $('.body').removeClass('overflow');
        $('.body').removeClass('log-in-window');
            });
    });

$(document).ready(function(){
    $('.swipe-area').click(function () {
        $('.body').removeClass('open-menu');
            });
    });
/*Кнопка сайдбара*/

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
        $('.body').removeClass('log-in-entered');
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
        $('.body').removeClass('log-in-confirmed');
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

$(document).ready(function(){
    $('.burger-menu__enter-button').click(function () {
        $('.body').addClass('log-in-entered');
        $('.body').removeClass('guest');
        });
    });

$(document).ready(function(){
    $('.burger-menu__log-in_button-exit').click(function () {
        $('.body').removeClass('log-in-entered');
        $('.body').addClass('guest');
        });
    });

$(document).ready(function(){
    $('.sign-up-button').click(function () {
        $('.body').addClass('log-in-confirmed');
        });
    });

$(document).ready(function(){
    $('.banner__cookie_yes, .banner__cookie_no').click(function () {
        $('.body').addClass('banner__cookie_close');
        $('.body').addClass('banner__cookie_close');
        });
    });


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


    // $(document).ready(function(){
    //   $('.number-item').click(function () {
    //       $('.timer__more_info').removeClass('calendar-open');
    //       });
    //   });

    // $(document).ready(function(){
    //     $('.spoiler').click(function () {
    //         $('#tippy-41').addClass('calendar-open');
    //         });
    //     });



    function CalendarControl() {
        const calendar = new Date();
        const calendarControl = {
          localDate: new Date(),
          prevMonthLastDate: null,
          calWeekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
          calMonthName: [
            "Январь",
            "Фефраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
          ],
          daysInMonth: function (month, year) {
            return new Date(year, month, 0).getDate();
          },
          firstDay: function () {
            return new Date(calendar.getFullYear(), calendar.getMonth(), 1);
          },
          lastDay: function () {
            return new Date(calendar.getFullYear(), calendar.getMonth() + 1, 0);
          },
          firstDayNumber: function () {
            return calendarControl.firstDay().getDay() + 1;
          },
          lastDayNumber: function () {
            return calendarControl.lastDay().getDay() + 1;
          },
          getPreviousMonthLastDate: function () {
            let lastDate = new Date(
              calendar.getFullYear(),
              calendar.getMonth(),
              0
            ).getDate();
            return lastDate;
          },
          navigateToPreviousMonth: function () {
            calendar.setMonth(calendar.getMonth() - 1);
            calendarControl.attachEventsOnNextPrev();
          },
          navigateToNextMonth: function () {
            calendar.setMonth(calendar.getMonth() + 1);
            calendarControl.attachEventsOnNextPrev();
          },
          navigateToCurrentMonth: function () {
            let currentMonth = calendarControl.localDate.getMonth();
            let currentYear = calendarControl.localDate.getFullYear();
            calendar.setMonth(currentMonth);
            calendar.setYear(currentYear);
            calendarControl.attachEventsOnNextPrev();
          },
          displayYear: function () {
            let yearLabel = document.querySelector(".calendar .calendar-year-label");
            yearLabel.innerHTML = calendar.getFullYear();
          },
          displayMonth: function () {
            let monthLabel = document.querySelector(
              ".calendar .calendar-month-label"
            );
            monthLabel.innerHTML = calendarControl.calMonthName[calendar.getMonth()];
          },
          selectDate: function (e) {
            console.log(
              `${e.target.textContent} ${
                calendarControl.calMonthName[calendar.getMonth()]
              } ${calendar.getFullYear()}`
            );
          },
          plotSelectors: function () {
            document.querySelector(
              ".calendar"
            ).innerHTML += `<div class="calendar-inner">
              <div class="calendar-controls">
              <div class="calendar-prev"><a href="#"><span class="calendar-prev-icon"></span></a></div>
              <div class="calendar-year-month">
              <div class="calendar-month-label"></div>
              <div class="calendar-year-label"></div>
              </div>
              <div class="calendar-next"><a href="#"><span class="calendar-next-icon"></span></a></div>
              <div class="calendar-close-crosshair"></div>
              </div>
              <div class="calendar-today-date">Сегодня: 
                ${calendarControl.calWeekDays[calendarControl.localDate.getDay()]}, 
                ${calendarControl.localDate.getDate()}, 
                ${calendarControl.calMonthName[calendarControl.localDate.getMonth()]} 
                ${calendarControl.localDate.getFullYear()}
              </div>
              <div class="calendar-body"></div>
              <div class="map-legend">
              <span class="map-legend-legend">Легенда:</span>
              <span class="map-legend-1">Кубок Мира/ЧМ/ОИ</span>
              <span class="map-legend-2">Кубок IBU/ЧЕ</span>
              <span class="map-legend-3">Юниорский Кубок IBU/ЮЧЕ/ЮЧМ</span>
              </div>
              </div>`;
          },
          plotDayNames: function () {
            for (let i = 0; i < calendarControl.calWeekDays.length; i++) {
              document.querySelector(
                ".calendar .calendar-body"
              ).innerHTML += `<div>${calendarControl.calWeekDays[i]}</div>`;
            }
          },
          plotDates: function () {
            document.querySelector(".calendar .calendar-body").innerHTML = "";
            calendarControl.plotDayNames();
            calendarControl.displayMonth();
            calendarControl.displayYear();
            let count = 1;
            let prevDateCount = 0;
      
            calendarControl.prevMonthLastDate = calendarControl.getPreviousMonthLastDate();
            let prevMonthDatesArray = [];
            let calendarDays = calendarControl.daysInMonth(
              calendar.getMonth() + 1,
              calendar.getFullYear()
            );
            // dates of current month
            for (let i = 1; i < calendarDays; i++) {
              if (i < calendarControl.firstDayNumber()) {
                prevDateCount += 1;
                document.querySelector(
                  ".calendar .calendar-body"
                ).innerHTML += `<div class="prev-dates"></div>`;
                prevMonthDatesArray.push(calendarControl.prevMonthLastDate--);
              } else {
                document.querySelector(
                  ".calendar .calendar-body"
                ).innerHTML += `<div class="number-item" data-num=${count}><span class="number-legend" data-num=${count}></span><a class="dateNumber" href="#">${count++}</a></div>`;
              }
            }
            //remaining dates after month dates
            for (let j = 0; j < prevDateCount + 1; j++) {
              document.querySelector(
                ".calendar .calendar-body"
              ).innerHTML += `<div class="number-item" data-num=${count}><span class="number-legend" data-num=${count}></span><a class="dateNumber" href="#">${count++}</a></div>`;
            }
            calendarControl.highlightToday();
            calendarControl.plotPrevMonthDates(prevMonthDatesArray);
            calendarControl.plotNextMonthDates();
          },
          attachEvents: function () {
            let prevBtn = document.querySelector(".calendar .calendar-prev a");
            let nextBtn = document.querySelector(".calendar .calendar-next a");
            let todayDate = document.querySelector(".calendar .calendar-today-date");
            let dateNumber = document.querySelectorAll(".calendar .dateNumber");
            prevBtn.addEventListener(
              "click",
              calendarControl.navigateToPreviousMonth
            );
            nextBtn.addEventListener("click", calendarControl.navigateToNextMonth);
            todayDate.addEventListener(
              "click",
              calendarControl.navigateToCurrentMonth
            );
            for (var i = 0; i < dateNumber.length; i++) {
                dateNumber[i].addEventListener(
                  "click",
                  calendarControl.selectDate,
                  false
                );
            }
          },
          highlightToday: function () {
            let currentMonth = calendarControl.localDate.getMonth() + 1;
            let changedMonth = calendar.getMonth() + 1;
            let currentYear = calendarControl.localDate.getFullYear();
            let changedYear = calendar.getFullYear();
            if (
              currentYear === changedYear &&
              currentMonth === changedMonth &&
              document.querySelectorAll(".number-item")
            ) {
              document
                .querySelectorAll(".number-item")
                [calendar.getDate() - 1].classList.add("calendar-today");
            }
          },
          plotPrevMonthDates: function(dates){
            dates.reverse();
            for(let i=0;i<dates.length;i++) {
                if(document.querySelectorAll(".prev-dates")) {
                    document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
                }
            }
          },
          plotNextMonthDates: function(){
           let childElemCount = document.querySelector('.calendar-body').childElementCount;
           //7 lines
           if(childElemCount > 42 ) {
               let diff = 49 - childElemCount;
               calendarControl.loopThroughNextDays(diff);
           }
    
           //6 lines
           if(childElemCount > 35 && childElemCount <= 42 ) {
            let diff = 42 - childElemCount;
            calendarControl.loopThroughNextDays(42 - childElemCount);
           }
    
          },
          loopThroughNextDays: function(count) {
            if(count > 0) {
                for(let i=1;i<=count;i++) {
                    document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
                }
            }
          },
          attachEventsOnNextPrev: function () {
            calendarControl.plotDates();
            calendarControl.attachEvents();
          },
          init: function () {
            calendarControl.plotSelectors();
            calendarControl.plotDates();
            calendarControl.attachEvents();
          }
        };
        calendarControl.init();
      }
      
      const calendarControl = new CalendarControl();




      document.querySelector('.calendar-close-crosshair').addEventListener('click', () => {
        document.querySelector('.timer__more_info').classList.remove('calendar-open');
      });
      document.querySelector('.calendar-body').addEventListener('click', () => {
        document.querySelector('.timer__more_info').classList.remove('calendar-open');
      });



      function CalendarControl2() {
        const calendar2 = new Date();
        const calendarControl2 = {
          localDate: new Date(),
          prevMonthLastDate: null,
          calWeekDays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
          calMonthName: [
            "Январь",
            "Фефраль",
            "Март",
            "Апрель",
            "Май",
            "Июнь",
            "Июль",
            "Август",
            "Сентябрь",
            "Октябрь",
            "Ноябрь",
            "Декабрь"
          ],
          daysInMonth: function (month, year) {
            return new Date(year, month, 0).getDate();
          },
          firstDay: function () {
            return new Date(calendar2.getFullYear(), calendar2.getMonth(), 1);
          },
          lastDay: function () {
            return new Date(calendar2.getFullYear(), calendar2.getMonth() + 1, 0);
          },
          firstDayNumber: function () {
            return calendarControl2.firstDay().getDay() + 1;
          },
          lastDayNumber: function () {
            return calendarControl2.lastDay().getDay() + 1;
          },
          getPreviousMonthLastDate: function () {
            let lastDate = new Date(
              calendar2.getFullYear(),
              calendar2.getMonth(),
              0
            ).getDate();
            return lastDate;
          },
          navigateToPreviousMonth: function () {
            calendar2.setMonth(calendar2.getMonth() - 1);
            calendarControl2.attachEventsOnNextPrev();
          },
          navigateToNextMonth: function () {
            calendar2.setMonth(calendar2.getMonth() + 1);
            calendarControl2.attachEventsOnNextPrev();
          },
          navigateToCurrentMonth: function () {
            let currentMonth = calendarControl2.localDate.getMonth();
            let currentYear = calendarControl2.localDate.getFullYear();
            calendar2.setMonth(currentMonth);
            calendar2.setYear(currentYear);
            calendarControl2.attachEventsOnNextPrev();
          },
          displayYear: function () {
            let yearLabel = document.querySelector(".calendar2 .calendar-year-label");
            yearLabel.innerHTML = calendar2.getFullYear();
          },
          displayMonth: function () {
            let monthLabel = document.querySelector(
              ".calendar2 .calendar-month-label"
            );
            monthLabel.innerHTML = calendarControl2.calMonthName[calendar2.getMonth()];
          },
          selectDate: function (e) {
            console.log(
              `${e.target.textContent} ${
                calendarControl2.calMonthName[calendar2.getMonth()]
              } ${calendar2.getFullYear()}`
            );
          },
          plotSelectors: function () {
            document.querySelector(
              ".calendar2"
            ).innerHTML += `<div class="calendar-inner">
              <div class="calendar-controls">
              <div class="calendar-year-month">
              <div class="calendar-month-label"></div>
              <div class="calendar-year-label"></div>
              </div>
              <div class="calendar-prev"><a href="#"><span class="calendar-prev-icon"></span></a></div>
              <div class="calendar-next"><a href="#"><span class="calendar-next-icon"></span></a></div>
              <div class="calendar-close-crosshair"></div>
              </div>
              <div class="calendar-today-date">Сегодня: 
                ${calendarControl2.calWeekDays[calendarControl2.localDate.getDay()]}, 
                ${calendarControl2.localDate.getDate()}, 
                ${calendarControl2.calMonthName[calendarControl2.localDate.getMonth()]} 
                ${calendarControl2.localDate.getFullYear()}
              </div>
              <div class="calendar-body"></div>
              <div class="map-legend">
              <span class="map-legend-legend">Легенда:</span>
              <span class="map-legend-1">Кубок Мира/ЧМ/ОИ</span>
              <span class="map-legend-2">Кубок IBU/ЧЕ</span>
              <span class="map-legend-3">Юниорский Кубок IBU/ЮЧЕ/ЮЧМ</span>
              </div>
              </div>`;
          },
          plotDayNames: function () {
            for (let i = 0; i < calendarControl2.calWeekDays.length; i++) {
              document.querySelector(
                ".calendar2 .calendar-body"
              ).innerHTML += `<div>${calendarControl2.calWeekDays[i]}</div>`;
            }
          },
          plotDates: function () {
            document.querySelector(".calendar2 .calendar-body").innerHTML = "";
            calendarControl2.plotDayNames();
            calendarControl2.displayMonth();
            calendarControl2.displayYear();
            let count = 1;
            let prevDateCount = 0;
      
            calendarControl2.prevMonthLastDate = calendarControl2.getPreviousMonthLastDate();
            let prevMonthDatesArray = [];
            let calendarDays = calendarControl2.daysInMonth(
              calendar2.getMonth() + 1,
              calendar2.getFullYear()
            );
            // dates of current month
            for (let i = 1; i < calendarDays; i++) {
              if (i < calendarControl2.firstDayNumber()) {
                prevDateCount += 1;
                document.querySelector(
                  ".calendar2 .calendar-body"
                ).innerHTML += `<div class="prev-dates"></div>`;
                prevMonthDatesArray.push(calendarControl2.prevMonthLastDate--);
              } else {
                document.querySelector(
                  ".calendar2 .calendar-body"
                ).innerHTML += `<div class="number-item" data-num=${count}><span class="number-legend" data-num=${count}></span><a class="dateNumber" href="#">${count++}</a></div>`;
              }
            }
            //remaining dates after month dates
            for (let j = 0; j < prevDateCount + 1; j++) {
              document.querySelector(
                ".calendar2 .calendar-body"
              ).innerHTML += `<div class="number-item" data-num=${count}><span class="number-legend" data-num=${count}></span><a class="dateNumber" href="#">${count++}</a></div>`;
            }
            calendarControl2.highlightToday();
            calendarControl2.plotPrevMonthDates(prevMonthDatesArray);
            calendarControl2.plotNextMonthDates();
          },
          attachEvents: function () {
            let prevBtn = document.querySelector(".calendar2 .calendar-prev a");
            let nextBtn = document.querySelector(".calendar2 .calendar-next a");
            let todayDate = document.querySelector(".calendar2 .calendar-today-date");
            let dateNumber = document.querySelectorAll(".calendar2 .dateNumber");
            prevBtn.addEventListener(
              "click",
              calendarControl2.navigateToPreviousMonth
            );
            nextBtn.addEventListener("click", calendarControl2.navigateToNextMonth);
            todayDate.addEventListener(
              "click",
              calendarControl2.navigateToCurrentMonth
            );
            for (var i = 0; i < dateNumber.length; i++) {
                dateNumber[i].addEventListener(
                  "click",
                  calendarControl2.selectDate,
                  false
                );
            }
          },
          highlightToday: function () {
            let currentMonth = calendarControl2.localDate.getMonth() + 1;
            let changedMonth = calendar2.getMonth() + 1;
            let currentYear = calendarControl2.localDate.getFullYear();
            let changedYear = calendar2.getFullYear();
            if (
              currentYear === changedYear &&
              currentMonth === changedMonth &&
              document.querySelectorAll(".number-item")
            ) {
              document
                .querySelectorAll(".number-item")
                [calendar2.getDate() - 1].classList.add("calendar-today");
            }
          },
          plotPrevMonthDates: function(dates){
            dates.reverse();
            for(let i=0;i<dates.length;i++) {
                if(document.querySelectorAll(".prev-dates")) {
                    document.querySelectorAll(".prev-dates")[i].textContent = dates[i];
                }
            }
          },
          plotNextMonthDates: function(){
           let childElemCount = document.querySelector('.calendar-body').childElementCount;
           //7 lines
           if(childElemCount > 42 ) {
               let diff = 49 - childElemCount;
               calendarControl2.loopThroughNextDays(diff);
           }
    
           //6 lines
           if(childElemCount > 35 && childElemCount <= 42 ) {
            let diff = 42 - childElemCount;
            calendarControl2.loopThroughNextDays(42 - childElemCount);
           }
    
          },
          loopThroughNextDays: function(count) {
            if(count > 0) {
                for(let i=1;i<=count;i++) {
                    document.querySelector('.calendar-body').innerHTML += `<div class="next-dates">${i}</div>`;
                }
            }
          },
          attachEventsOnNextPrev: function () {
            calendarControl2.plotDates();
            calendarControl2.attachEvents();
          },
          init: function () {
            calendarControl2.plotSelectors();
            calendarControl2.plotDates();
            calendarControl2.attachEvents();
          }
        };
        calendarControl2.init();
      }
      
      const calendarControl2 = new CalendarControl2();


      $(document).ready(function(){
        $('.calendar-mobile').click(function () {
            $('.mobile-timer__more-events-window').addClass('calendar-open');
            });
        });

        $(document).ready(function(){
          $('.calendar-close-crosshair').click(function () {
              $('.mobile-timer__more-events-window').removeClass('calendar-open');
              });
          });

          $(document).ready(function(){
            $('.calendar-body').click(function () {
                $('.mobile-timer__more-events-window').removeClass('calendar-open');
                });
            });


            $(document).ready(function(){
              $('.birthday-block__congratulations').click(function () {
                  $('.birthday-block__congratulations').addClass('vote');
                  });
              });


              $(document).ready(function(){
                $('.layer__chat-debates-tabs').click(function () {
                    $('.layer__chat').addClass('onon');
                    });
                });



                $(document).ready(function(){
                  $('.timeline-my-comments__head').click(function () {
                    $('.timeline-my-comments__head').addClass('votefff');
                    });
                  });
                
                


/*Фильтры */
                  // var button = document.getElementById("filter-button");
                  // var container = document.getElementById("filter-container");
                  // var input = document.querySelectorAll("input");
                  
                  // button.onclick = function (e) {
                  //   e.stopPropagation();
                  //   if (container.classList.contains("filters--active")) {
                  //   container.classList.remove("filters--active");
                  //   } else {
                  //   container.classList.add("filters--active");
                  //   }
                  // };
                  
                  // container.onclick = function (e) {
                  //   e.stopPropagation();
                  // };
                  
                  // window.onclick = function () {
                  //   container.classList.remove("filters--active");
                  // };
                  
                  // console.log(input);
                  
                  // for (var i = 0; i < input.length; i++) {
                  //   var currentInput = input[i];
                  
                  //   currentInput.onclick = function () {
                  //   var isChecked = false;
                  //   for (var j = 0; j < input.length; j++) {
                  //     if (input[j].checked) {
                  //     isChecked = true;
                  //     break;
                  //     }
                  //   }
                  
                  //   if (isChecked) {
                  //     button.classList.add("button--highlight");
                  //   } else {
                  //     button.classList.remove("button--highlight");
                  //   }
                  //   };
                  // }
/*Фильтры */

var button = document.getElementById("filter-button");
var container = document.getElementById("filter-container");

button.onclick = function (e) {
  e.stopPropagation();
  if (container.classList.contains("filters--active")) {
  container.classList.remove("filters--active");
  } else {
  container.classList.add("filters--active");
  }
};

container.onclick = function (e) {
  e.stopPropagation();
};

window.onclick = function () {
  container.classList.remove("filters--active");
};


// var select = document.querySelector('select');
// var filters = document.querySelector('.timeline-athletes__filters');

// // Добавляем обработчик на изменение значения select
// select.addEventListener('change', function() {
//   // Получаем выбранную опцию
//   var selectedOption = this.options[this.selectedIndex];
  
//   // Очищаем все классы у элемента .timeline-athletes__filters
//   filters.classList.remove('one');
//   filters.classList.remove('two');
//   filters.classList.remove('three');

//   // Если значение выбранной опции равно "chos"
//   if (selectedOption.value === "chos") {
//     // Добавляем класс "one" к элементу с классом "timeline-athletes__filters"
//     filters.classList.add('one');
//   } else if (selectedOption.value === "chos2") {
//     // Добавляем класс "two" к элементу с классом "timeline-athletes__filters"
//     filters.classList.add('two');
//   } else if (selectedOption.value === "chos3") {
//     // Добавляем класс "three" к элементу с классом "timeline-athletes__filters"
//     filters.classList.add('three');
//   }
// });

// // Получаем элемент с классом "timeline-athletes__filters"
// const filters = document.querySelector('.timeline-athletes__filters');

// // Получаем элементы select и добавляем обработчик события change
// const select = document.querySelector('select');
// select.addEventListener('change', (event) => {
//   // Получаем выбранную опцию
//   const selectedOption = event.target.value;

//   if (selectedOption === 'chos') {
//     // Добавляем класс "one" к элементу с классом "timeline-athletes__filters"
//     filters.classList.add('one');
//   }
// });

// // Получаем элемент с классом "timeline-athletes__filters"
// const filters2 = document.querySelector('.timeline-athletes__filters');

// // Получаем элементы select и добавляем обработчик события change
// const select2 = document.querySelector('select');
// select2.addEventListener('change', (event) => {
//   // Получаем выбранную опцию
//   const selectedOption = event.target.value;

//   if (selectedOption === 'chos2') {
//     // Добавляем класс "one" к элементу с классом "timeline-athletes__filters"
//     filters2.classList.add('two');
//   }
// });

// // Получаем элемент с классом "timeline-athletes__filters"
// const filters = document.querySelector('.timeline-athletes__filters');

// // Получаем элементы select и добавляем обработчик события change
// const select = document.querySelector('select');
// select.addEventListener('change', (event) => {
//   // Получаем выбранную опцию
//   const selectedOption = event.target.value;

//   if (selectedOption === 'chos3') {
//     // Добавляем класс "one" к элементу с классом "timeline-athletes__filters"
//     filters.classList.add('three');
//   }
// });

// Получаем элемент с классом "timeline-athletes__filters"
const filterss = document.querySelector('.timeline-athletes__filters');

// Получаем элементы select и добавляем обработчик события change
const selectt = document.querySelector('#f1');
selectt.addEventListener('change', (event) => {
  // Получаем выбранную опцию
  const selectedOption = event.target.value;

  if (selectedOption === 'chos') {
    // Добавляем класс "two" к элементу с классом "timeline-athletes__filters"
    filterss.classList.add('one');
  } else {
    // Если выбрана другая опция, удаляем класс "two"
    filterss.classList.remove('one');
  }
});

// Получаем элемент с классом "timeline-athletes__filters"
const filters = document.querySelector('.timeline-athletes__filters');

// Получаем элементы select и добавляем обработчик события change
const select = document.querySelector('#f2');
select.addEventListener('change', (event) => {
  // Получаем выбранную опцию
  const selectedOption = event.target.value;

  if (selectedOption === 'chos2') {
    // Добавляем класс "two" к элементу с классом "timeline-athletes__filters"
    filters.classList.add('two');
  } else {
    // Если выбрана другая опция, удаляем класс "two"
    filters.classList.remove('two');
  }
});

// Получаем элемент с классом "timeline-athletes__filters"
const filtersss = document.querySelector('.timeline-athletes__filters');

// Получаем элементы select и добавляем обработчик события change
const selecttt = document.querySelector('#f3');
selecttt.addEventListener('change', (event) => {
  // Получаем выбранную опцию
  const selectedOption = event.target.value;

  if (selectedOption === 'chos3') {
    // Добавляем класс "two" к элементу с классом "timeline-athletes__filters"
    filtersss.classList.add('three');
  } else {
    // Если выбрана другая опция, удаляем класс "two"
    filtersss.classList.remove('three');
  }
});

// Получаем элемент с классом "timeline-athletes__filters"
const filterssss = document.querySelector('.timeline-athletes__filters');

// Получаем элементы select и добавляем обработчик события change
const selectttt = document.querySelector('#f4');
selectttt.addEventListener('change', (event) => {
  // Получаем выбранную опцию
  const selectedOption = event.target.value;

  if (selectedOption === 'chos4') {
    // Добавляем класс "two" к элементу с классом "timeline-athletes__filters"
    filterssss.classList.add('four');
  } else {
    // Если выбрана другая опция, удаляем класс "two"
    filterssss.classList.remove('four');
  }
});

// setInterval(() => {
//   const filterstwo = document.querySelector('.timeline-athletes__filters');
//   const circleButton = document.querySelector('.circle-for-button');
  
//   if (filterstwo.classList.contains('four')) {
//     circleButton.textContent = '1';
//   }
// }, 1);


// setInterval(() => {
//   const filtersw = document.querySelector('.timeline-athletes__filters');
//   const circleButton = document.querySelector('.circle-for-button');
//   const classList = filtersw.classList;
  
//   if (classList.contains('one') || classList.contains('two') || classList.contains('three') || classList.contains('four')) {
//     let count = 0;
    
//     if (classList.contains('one')) {
//       count++;
//     }
    
//     if (classList.contains('two')) {
//       count++;
//     }
    
//     if (classList.contains('three')) {
//       count++;
//     }
    
//     if (classList.contains('four')) {
//       count++;
//     }
    
//     circleButton.textContent = count;
//   }
// }, 1);

setInterval(() => {
  const filters = document.querySelector('.timeline-athletes__filters');
  const circleButton = document.querySelector('.circle-for-button');
  const classList = filters.classList;
  
  if (!classList.contains('one') && !classList.contains('two') && !classList.contains('three') && !classList.contains('four')) {
    circleButton.textContent = '';
  }
  else if (classList.contains('one') || classList.contains('two') || classList.contains('three') || classList.contains('four')) {
    let count = 0;
    
    if (classList.contains('one')) {
      count++;
    }
    
    if (classList.contains('two')) {
      count++;
    }
    
    if (classList.contains('three')) {
      count++;
    }
    
    if (classList.contains('four')) {
      count++;
    }
    
    circleButton.textContent = count;
  }
}, 1);


$(document).ready(function(){
  $('.apply-button').click(function () {
      $('.filters').removeClass('filters--active');
          });
  });

//   const filtersq = document.querySelector('.filters');
//   const timelineFiltersq = document.querySelector('.timeline-athletes__filters');
//   const buttonq = document.querySelector('.filters-remove');
  
//   buttonq.addEventListener('click', () => {
//     filtersq.classList.remove('filters--active');
//     timelineFiltersq.className = 'timeline-athletes__filters';
//   });


const filtersq = document.querySelector('.filters');
const timelineFiltersq = document.querySelector('.timeline-athletes__filters');

const optionsq = document.querySelectorAll('#f4 option, #f3 option, #f2 option, #f1 option');
const buttonq = document.querySelector('.filters-remove');

buttonq.addEventListener('click', () => {
  filtersq.classList.remove('filters--active');
  timelineFiltersq.className = 'timeline-athletes__filters';
  optionsq.forEach(option => option.selected = false);
});