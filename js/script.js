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
			1025: {
				slidesPerView: 1,
			},
			500: {
				slidesPerView: 1,
			}
		}
	})
}
