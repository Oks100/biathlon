if (document.querySelector('.swiper-container4')) {
  new Swiper('.swiper-container4', {
    spaceBetween: 15,
    // Вывод стрелок навигации
     navigation: {
       nextEl: '.swiper-button-next',
       prevEl: '.swiper-button-prev',
     },
    loop: true,
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



tippy('.olsby-roeideland-marte', {
  content: document.querySelector('.olsby-roeideland-marte__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.oeverg-elvira-karin', {
  content: document.querySelector('.oeverg-elvira-karin__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 3509999],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  // animation: 'shift-toward',
  animation: 'scale',
  // animation: 'perspective',
  // followCursor: true,
  // offset: [0, 0],
});

tippy('.hauser-lisa-theresa', {
  content: document.querySelector('.hauser-lisa-theresa__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.oeberg-hanna', {
  content: document.querySelector('.oeberg-hanna__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.chevailier-anais-bouchet', {
  content: document.querySelector('.chevailier-anais-bouchet__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'scale',
  followCursor: true,
  // offset: [0, -98],
});

tippy('.herrmann-denise', {
  content: document.querySelector('.herrmann-denise__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
  // followCursor: true,
  // offset: [0, -98],
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
  animation: 'shift-away',
  // followCursor: true,
  // offset: [0, -98],
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
  animation: 'shift-away',
  // followCursor: true,
  // offset: [0, -98],
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
  animation: 'shift-away',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.braisaz-bouchet-justine', {
  content: document.querySelector('.braisaz-bouchet-justine__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.wierer-dorothea', {
  content: document.querySelector('.wierer-dorothea__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'scale',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.davidova-marketa', {
  content: document.querySelector('.davidova-marketa__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350000],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.fillon-maillet-quentin', {
  content: document.querySelector('.fillon-maillet-quentin__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.laegraid-sturla-holm', {
  content: document.querySelector('.laegraid-sturla-holm__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.samuelsson-sebastian', {
  content: document.querySelector('.samuelsson-sebastian__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'auto',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.christiansen-vetle-sjastad', {
  content: document.querySelector('.christiansen-vetle-sjastad__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'auto',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.jacquelin-emilien', {
  content: document.querySelector('.jacquelin-emilien__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.boe-tarjei', {
  content: document.querySelector('.boe-tarjei__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'scale',
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.doll-benedikt', {
  content: document.querySelector('.doll-benedikt__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-toward',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.bakken-sivert-guttorm', {
  content: document.querySelector('.bakken-sivert-guttorm__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
  // followCursor: true,
  // offset: [0, -98],
});

tippy('.lesser-erik', {
  content: document.querySelector('.lesser-erik__profile'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [1000, 350],
  placement: 'auto',
  duration: 350,
  maxWidth: 400,
  animation: 'perspective',
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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
  // followCursor: true,
  // offset: [0, -98],
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


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

// function switchTheme(e) {
//     if (e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//     }
//     else {
//         document.documentElement.setAttribute('data-theme', 'light');
//     }    
// }

// toggleSwitch.addEventListener('change', switchTheme, false);

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

// document.querySelector('.header__notification_all').addEventListener('click', () => {
//   document.querySelector('.notif-more').classList.toggle('three');
// });

// $('.oeverg-elvira-karin__profile_body').on('click', function(){
//   $('.header__notifications_item').toggleClass('actuall');
// });


// if(document.getElementsByClassName('main-cup__term').length > 0) {
//    document.getElementsByClassName('main-cup__lead')[0].classList.add('actual');
//  }


// $(document).ready(function(){
//   if($('#myDropdown').hasClass("show")) 
//      $("dropbtn").addClass("actual");
// });


// document.getElementById('more-button').onclick = function() {
//   document.getElementById('notif').classList.add('notif-more');
// }

// $(document).ready(function(){
// 	$(".main-cup__term term").click(function(){
// 		$(".main-cup__lead lead").toggleClass("notif-more"); return false;
// 	});
// });

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