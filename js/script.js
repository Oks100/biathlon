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
  delay: [1000, 350],
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
  delay: [1000, 350],
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
  animation: 'perspective',
  inertia: true,
});

tippy('.header__profile-button', {
  content: document.querySelector('.header__profile-button-info'),
  arrow: true,
  interactive: true,
  trigger: 'mouseenter',
  delay: [250, 0],
  placement: 'bottom',
  duration: 350,
  maxWidth: 400,
  animation: 'shift-away',
  inertia: true,
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


// if(document.getElementsByClassName('dropbtn').length > 0) {
//   document.getElementsByClassName('show')[0].classList.add('actual');
// }


// $(document).ready(function(){
//   if($('#myDropdown').hasClass("show")) 
//      $("dropbtn").addClass("actual");
// });