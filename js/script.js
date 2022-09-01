if (document.querySelector('.swiper-container')) {
  new Swiper('.swiper-container', {
    // Вывод стрелок навигации
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
   pagination: {
     el: '.swiper-pagination',
   },
     // Вывод скроллбара
   scrollbar: {
     el: '.swiper-scrollbar',
      draggable: true,
   },
     // Прогрессбар
    pagination: {
        el: '.swiper-pagination',
        type: 'progressbar'
    },
    loop: true,
    preloadImages: false,
    // Lazy Loading (подзагрузка картинок)
    lazy: {
      // Подзагрузка на старте перключения слайда
      loadOnTransitionStart: true,
      // Подгрузить предыдущую и следующую картинки
      loadPrevNext: true,
    },
    effect: 'flip',
    flipEffect: {
      // Тень
      slideShadows: true,
      // Показ только активного слайда
      limitRotation: true,
    },
   })
};



if (document.querySelector('.swiper-container2')) {
	new Swiper('.swiper-container2', {
    spaceBetween: 5,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
    autoplay: {
      delay: 5000,
    },
		breakpoints: {
			800: {
				slidesPerView: 3,
			},
      551: {
				slidesPerView: 2,
			},
			550: {
				slidesPerView: 1,
			}
		}
	})
}

const slider = document.querySelector('.slider-container3');

let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 600 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
      effect: 'cards',
			slideClass: 'card',
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 600) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});



tippy('.olsby-roeideland-marte', {
  content: document.querySelector('.olsby-roeideland-marte__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto-start',
  duration: 350,
  maxWidth: 150,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.oeverg-elvira-karin', {
  content: document.querySelector('.oeverg-elvira-karin__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto-start',
  duration: 350,
  maxWidth: 400,
  // animation: 'shift-toward',
  animation: 'scale',
  // animation: 'perspective',
  // followCursor: true,
  // offset: [0, 0],
});