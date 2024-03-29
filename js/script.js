if (document.querySelector('.swiper-container5')) {
  new Swiper('.swiper-container5', {
    spaceBetween: 15,
    // Вывод стрелок навигации
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
			992: {
				allowTouchMove: false,
			},
		}
   })
};

if (document.querySelector('.swiper-container4')) {
  new Swiper('.swiper-container4', {
    spaceBetween: 15,
    // Вывод стрелок навигации
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    loop: true,
    autoHeight: true,
    allowTouchMove: true,
    breakpoints: {
			992: {
				allowTouchMove: false,
			},
		}
   })
};

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
    allowTouchMove: true,
    // speed: 1500,
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


tippy('.dzhima-yuliia', {
  content: document.querySelector('.dzhima-yuliia__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.dzhima-yuliia2', {
  content: document.querySelector('.dzhima-yuliia2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.dzhima-yuliia3', {
  content: document.querySelector('.dzhima-yuliia3__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.bilosyuk-olena', {
  content: document.querySelector('.bilosyuk-olena__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.bilosyuk-olena2', {
  content: document.querySelector('.bilosyuk-olena2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.blashko-darya', {
  content: document.querySelector('.blashko-darya__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.blashko-darya2', {
  content: document.querySelector('.blashko-darya2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.blashko-darya3', {
  content: document.querySelector('.blashko-darya3__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.semerenko-valj', {
  content: document.querySelector('.semerenko-valj__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.semerenko-valj2', {
  content: document.querySelector('.semerenko-valj2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.semerenko-vita', {
  content: document.querySelector('.semerenko-vita__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.bekh-ekaterina', {
  content: document.querySelector('.bekh-ekaterina__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.kryvonos-anna', {
  content: document.querySelector('.kryvonos-anna__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.belkina-nadiia', {
  content: document.querySelector('.belkina-nadiia__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.horodna-yulia', {
  content: document.querySelector('.horodna-yulia__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.moskalenko-oksana', {
  content: document.querySelector('.moskalenko-oksana__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.merkushyna-oleksandra', {
  content: document.querySelector('.merkushyna-oleksandra__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.skrypko-hanna', {
  content: document.querySelector('.skrypko-hanna__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.steblyna-liliia', {
  content: document.querySelector('.steblyna-liliia__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.petrenko-iryna', {
  content: document.querySelector('.petrenko-iryna__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.boe-johannes-thingnes', {
  content: document.querySelector('.boe-johannes-thingnes__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.kinash-stepan', {
  content: document.querySelector('.kinash-stepan__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.borovyk-roman', {
  content: document.querySelector('.borovyk-roman__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.grushchak-dmytro', {
  content: document.querySelector('.grushchak-dmytro__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.mandzyn-vitaliy', {
  content: document.querySelector('.mandzyn-vitaliy__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.chihar-vladislav', {
  content: document.querySelector('.chihar-vladislav__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.pryma-artem', {
  content: document.querySelector('.pryma-artem__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.tsymbal-bogdan', {
  content: document.querySelector('.tsymbal-bogdan__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.tsymbal-bogdan2', {
  content: document.querySelector('.tsymbal-bogdan2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.dudchenko-anton', {
  content: document.querySelector('.dudchenko-anton__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.lesyuk-taras', {
  content: document.querySelector('.lesyuk-taras__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.tishchenko-artem', {
  content: document.querySelector('.tishchenko-artem__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.pidruchnuy-dmytro', {
  content: document.querySelector('.pidruchnuy-dmytro__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.pidruchnuy-dmytro2', {
  content: document.querySelector('.pidruchnuy-dmytro2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.pidruchnuy-dmytro3', {
  content: document.querySelector('.pidruchnuy-dmytro3__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.nasyko-denys', {
  content: document.querySelector('.nasyko-denys__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.nasyko-denys2', {
  content: document.querySelector('.nasyko-denys2__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.trush-vitaliy', {
  content: document.querySelector('.trush-vitaliy__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.orlyk-andrіi', {
  content: document.querySelector('.orlyk-andrіi__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.dotdenko-andriy', {
  content: document.querySelector('.dotdenko-andriy__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.bryhadyr-ruslan', {
  content: document.querySelector('.bryhadyr-ruslan__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.ponomarenko-oleksandr', {
  content: document.querySelector('.ponomarenko-oleksandr__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
});

tippy('.timer__more-events', {
  content: document.querySelector('.timer__more_info'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.header__profile', {
  content: document.querySelector('.header__profile-button-info'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip32', {
  content: document.querySelector('.ip-info32'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip31', {
  content: document.querySelector('.ip-info31'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip30', {
  content: document.querySelector('.ip-info30'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip29', {
  content: document.querySelector('.ip-info29'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip28', {
  content: document.querySelector('.ip-info28'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip27', {
  content: document.querySelector('.ip-info27'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip26', {
  content: document.querySelector('.ip-info26'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip25', {
  content: document.querySelector('.ip-info25'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip24', {
  content: document.querySelector('.ip-info24'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip23', {
  content: document.querySelector('.ip-info23'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip22', {
  content: document.querySelector('.ip-info22'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip21', {
  content: document.querySelector('.ip-info21'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip20', {
  content: document.querySelector('.ip-info20'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip19', {
  content: document.querySelector('.ip-info19'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip18', {
  content: document.querySelector('.ip-info18'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip17', {
  content: document.querySelector('.ip-info17'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip16', {
  content: document.querySelector('.ip-info16'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip15', {
  content: document.querySelector('.ip-info15'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip14', {
  content: document.querySelector('.ip-info14'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip13', {
  content: document.querySelector('.ip-info13'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip12', {
  content: document.querySelector('.ip-info12'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip11', {
  content: document.querySelector('.ip-info11'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip10', {
  content: document.querySelector('.ip-info10'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip9', {
  content: document.querySelector('.ip-info9'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip8', {
  content: document.querySelector('.ip-info8'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip7', {
  content: document.querySelector('.ip-info7'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip6', {
  content: document.querySelector('.ip-info6'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip5', {
  content: document.querySelector('.ip-info5'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip4', {
  content: document.querySelector('.ip-info4'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip3', {
  content: document.querySelector('.ip-info3'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-ip2', {
  content: document.querySelector('.ip-info2'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});
tippy('.comments-ip1', {
  content: document.querySelector('.ip-info1'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete32', {
  content: document.querySelector('.delete32'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete31', {
  content: document.querySelector('.delete31'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete30', {
  content: document.querySelector('.delete30'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete29', {
  content: document.querySelector('.delete29'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete28', {
  content: document.querySelector('.delete28'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete27', {
  content: document.querySelector('.delete27'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete26', {
  content: document.querySelector('.delete26'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete25', {
  content: document.querySelector('.delete25'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete24', {
  content: document.querySelector('.delete24'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete23', {
  content: document.querySelector('.delete23'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


tippy('.comments-delete22', {
  content: document.querySelector('.delete22'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete21', {
  content: document.querySelector('.delete21'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete20', {
  content: document.querySelector('.delete20'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete19', {
  content: document.querySelector('.delete19'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.timeline-private-messages__remove-spam', {
  content: document.querySelector('.spam'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete18', {
  content: document.querySelector('.delete18'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete17', {
  content: document.querySelector('.delete17'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete16', {
  content: document.querySelector('.delete16'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


tippy('.comments-delete15', {
  content: document.querySelector('.delete15'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete14', {
  content: document.querySelector('.delete14'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


tippy('.comments-delete13', {
  content: document.querySelector('.delete13'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete12', {
  content: document.querySelector('.delete12'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete11', {
  content: document.querySelector('.delete11'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


tippy('.comments-delete10', {
  content: document.querySelector('.delete10'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete9', {
  content: document.querySelector('.delete9'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete8', {
  content: document.querySelector('.delete8'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete7', {
  content: document.querySelector('.delete7'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete6', {
  content: document.querySelector('.delete6'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete5', {
  content: document.querySelector('.delete5'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete4', {
  content: document.querySelector('.delete4'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete3', {
  content: document.querySelector('.delete3'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete2', {
  content: document.querySelector('.delete2'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.comments-delete1', {
  content: document.querySelector('.delete1'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-1', {
  content: document.querySelector('.message-delete-1-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-2', {
  content: document.querySelector('.message-delete-2-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-3', {
  content: document.querySelector('.message-delete-3-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-4', {
  content: document.querySelector('.message-delete-4-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-5', {
  content: document.querySelector('.message-delete-5-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-6', {
  content: document.querySelector('.message-delete-6-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-7', {
  content: document.querySelector('.message-delete-7-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-8', {
  content: document.querySelector('.message-delete-8-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-9', {
  content: document.querySelector('.message-delete-9-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});

tippy('.message-delete-10', {
  content: document.querySelector('.message-delete-10-body'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


tippy('.header__notifications', {
  content: document.querySelector('.header__notifications_conteiner'),
  arrow: true,
  interactive: true,
  trigger: 'click',
  delay: [0, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
});


const toggleSwitch = document.querySelector('.light-dark input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

/* Выбор языка */
$(".js-dropdown").each(function(){
	var $dropdown = $(this),
		$dropdownToggler = $dropdown.find(".js-dropdown-toggler"),
		$dropdownBox = $dropdown.find(".js-dropdown-box"),
		dropdownType = $dropdown.data("dropdown-type"),
		close = function(e){
			var $target = $(e.target),
				inBox = $target.closest($dropdownBox[0]).length,
				inButton = $target.closest($dropdownToggler[0]).length,
				outside = (!inButton) ? (dropdownType !== "closing") ? (!inBox) ? true : false : true : false;
			if(outside){
				$dropdown.removeClass("open");
				$(document).unbind("click", close);
			}
		},
		open = function(){
			if(!$dropdown.hasClass("open")){
				$(document).bind("click", close);
			} else {
				$(document).unbind("click", close);
			}
			$dropdown.toggleClass("open");
		};
	$dropdownToggler.on("click", open);
});

$(".js-lang").each(function(){
	var $lang = $(this),
		$langDisplay = $lang.find(".js-lang-display"),
		$langToggler = $lang.find(".js-lang-toggler")
		;
	$langToggler.on("click", function(){
		var lang = $(this).attr("href").substring(1);
		$langDisplay.text(lang);
	});
});
/* Выбор языка */

/* Выбор темы*/
jQuery(($) => {
  $('.select').on('click', '.select__head', function () {
      if ($(this).hasClass('open')) {
          $(this).removeClass('open');
          $(this).next().fadeOut();
      } else {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
          $(this).addClass('open');
          $(this).next().fadeIn();
      }
  });

  $('.select').on('click', '.select__item', function () {
      $('.select__head').removeClass('open');
      $(this).parent().fadeOut();
      $(this).parent().prev().text($(this).text());
      $(this).parent().prev().prev().val($(this).text());
  });

  // Закрытие окна по клику вне окна
  $(document).click(function (e) {
      if (!$(e.target).closest('.select').length) {
          $('.select__head').removeClass('open');
          $('.select__list').fadeOut();
      }
  });
});


function themeToggle() {
	var toggleEl = document.querySelector("[data-toggle-theme]");
	(function(theme = localStorage.getItem("theme")) {
		if (localStorage.getItem("theme")) {
			document.documentElement.setAttribute("data-theme", theme);
			if (toggleEl) {
				[...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
					el.classList.add(toggleEl.getAttribute("data-act-class"))
				})
			}
		}
	})();
	if (toggleEl) {
		[...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
			el.addEventListener("click", function() {
				var themesList = el.getAttribute("data-toggle-theme");
				if (themesList) {
					var themesArray = themesList.split(",");
					if (document.documentElement.getAttribute("data-theme") == themesArray[0]) {
						if (themesArray.length == 1) {
							document.documentElement.removeAttribute("data-theme");
							localStorage.removeItem("theme")
						} else {
							document.documentElement.setAttribute("data-theme", themesArray[1]);
							localStorage.setItem("theme", themesArray[1])
						}
					} else {
						document.documentElement.setAttribute("data-theme", themesArray[0]);
						localStorage.setItem("theme", themesArray[0])
					}
				}[...document.querySelectorAll("[data-toggle-theme]")].forEach(el => {
					el.classList.toggle(this.getAttribute("data-act-class"))
				})
			})
		})
	}
}

function themeBtn() {
	(function(theme = localStorage.getItem("theme")) {
		if (theme != undefined && theme != "") {
			if (localStorage.getItem("theme") && localStorage.getItem("theme") != "") {
				document.documentElement.setAttribute("data-theme", theme);
				var btnEl = document.querySelector("[data-set-theme='" + theme.toString() + "']");
				if (btnEl) {
					[...document.querySelectorAll("[data-set-theme]")].forEach(el => {
						el.classList.remove(el.getAttribute("data-act-class"))
					});
					if (btnEl.getAttribute("data-act-class")) {
						btnEl.classList.add(btnEl.getAttribute("data-act-class"))
					}
				}
			} else {
				var btnEl = document.querySelector("[data-set-theme='']");
				if (btnEl.getAttribute("data-act-class")) {
					btnEl.classList.add(btnEl.getAttribute("data-act-class"))
				}
			}
		}
	})();
	[...document.querySelectorAll("[data-set-theme]")].forEach(el => {
		el.addEventListener("click", function() {
			document.documentElement.setAttribute("data-theme", this.getAttribute("data-set-theme"));
			localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
			[...document.querySelectorAll("[data-set-theme]")].forEach(el => {
				el.classList.remove(el.getAttribute("data-act-class"))
			});
			if (el.getAttribute("data-act-class")) {
				el.classList.add(el.getAttribute("data-act-class"))
			}
		})
	})
}

function themeSelect() {
	(function(theme = localStorage.getItem("theme")) {
		if (localStorage.getItem("theme")) {
			document.documentElement.setAttribute("data-theme", theme);
			var optionToggler = document.querySelector("select[data-choose-theme] [value='" + theme.toString() + "']");
			if (optionToggler) {
				[...document.querySelectorAll("select[data-choose-theme] [value='" + theme.toString() + "']")].forEach(el => {
					el.selected = true
				})
			}
		}
	})();
	if (document.querySelector("select[data-choose-theme]")) {
		[...document.querySelectorAll("select[data-choose-theme]")].forEach(el => {
			el.addEventListener("change", function() {
				document.documentElement.setAttribute("data-theme", this.value);
				localStorage.setItem("theme", document.documentElement.getAttribute("data-theme"));
				[...document.querySelectorAll("select[data-choose-theme] [value='" + localStorage.getItem("theme") + "']")].forEach(el => {
					el.selected = true
				})
			})
		})
	}
}

function themeChange(attach = true) {
	if (attach === true) {
		document.addEventListener("DOMContentLoaded", function(event) {
			themeToggle();
			themeSelect();
			themeBtn()
		})
	} else {
		themeToggle();
		themeSelect();
		themeBtn()
	}
}
if (typeof exports != "undefined") {
	module.exports = {
		themeChange: themeChange
	}
} else {
	themeChange()
}
/* Выбор темы*/


/* Кнопка наверх */
var btn = $('#back-to-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 1000) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
/* Кнопка наверх */

/* Аккордеон для подвала*/
$(document).ready(function(){
  $(".footer__column-min").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).find('.footer__column-content').slideUp(200);
    }else{
      $(".footer__column-min").removeClass("active");
      $(this).addClass("active");
      $('.footer__column-content').slideUp(200);
      $(this).find('.footer__column-content').slideDown(200);
    }
  });
});
/* Аккордеон для подвала*/








