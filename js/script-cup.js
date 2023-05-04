// const menu = document.getElementById('timeline-cup__navbar');
// const menuTopOffset = menu.offsetTop;

// function fixMenu() {
//   if (window.pageYOffset >= menuTopOffset) {
//     menu.classList.add('fixed-menu');
//   } else {
//     menu.classList.remove('fixed-menu');
//   }
// }

// window.addEventListener('scroll', fixMenu);


/*Прилипающая шапка*/
// var h_hght = 250; // высота шапки
// var h_mrg = 0;	  // отступ когда шапка уже не видна
				
// $(function(){

// 	var elem = $('#timeline-cup__navbar');
// 	var top = $(this).scrollTop();
	
// 	if(top > h_hght){
// 		elem.css('top', h_mrg);
// 	}			
	
// 	$(window).scroll(function(){
// 		top = $(this).scrollTop();
		
// 		if (top+h_mrg < h_hght) {
// 			elem.css('top', (h_hght-top));
// 		} else {
// 			elem.css('top', h_mrg);
// 		}
// 	});

// });
/*Прилипающая шапка*/

// const timelineCup = document.querySelector('.timeline-cup');
// const timelineCupHead = document.querySelector('.timeline-cup__head');

// window.addEventListener('scroll', () => {
//   if (window.scrollY >= 10) {
//     timelineCup.classList.add('fixed');
//   } else {
//     timelineCup.classList.remove('fixed');
//   }
// });


// const timelineCup = document.querySelector('.timeline-cup');
// const timelineCupHead = document.querySelector('.timeline-cup__head');
// const timelineCupHeadPosition = timelineCupHead.getBoundingClientRect().top + window.pageYOffset;

// window.addEventListener('scroll', () => {
//   if (window.pageYOffset >= timelineCupHeadPosition + 100) {
//     timelineCup.classList.add('fixed');
//   } else {
//     timelineCup.classList.remove('fixed');
//   }
// });

// const timelineCup = document.querySelector('.timeline-cup');
// const timelineCupHead = document.querySelector('.timeline-cup__head');
// const timelineCupHeadPosition = timelineCupHead.getBoundingClientRect().bottom + window.pageYOffset - timelineCupHead.offsetHeight;

// function handleScroll() {
//   if (window.pageYOffset >= timelineCupHeadPosition + 100) {
//     timelineCup.classList.add('fixed');
//   } else {
//     timelineCup.classList.remove('fixed');
//   }
// }

// if (window.innerWidth <= 992) {
//   window.addEventListener('scroll', handleScroll);
// }

// const timelineCup = document.querySelector('.timeline-cup');
// const timelineCupHead = document.querySelector('.timeline-cup__head');
// const timelineCupHeadPosition = timelineCupHead.getBoundingClientRect().bottom + window.pageYOffset - timelineCupHead.offsetHeight;

// function handleScroll() {
//   if (window.pageYOffset >= timelineCupHeadPosition + 100) {
//     timelineCup.classList.add('fixed');
//   } else {
//     timelineCup.classList.remove('fixed');
//   }
// }

// if (window.innerWidth <= 992) {
//   window.addEventListener('scroll', handleScroll);
// }

/* Скрит, который добавляет класс при скролле */

// function handleResize() {
// 	if (window.innerWidth <= 992) {
// 	  window.addEventListener('scroll', handleScroll);
// 	} else {
// 	  window.removeEventListener('scroll', handleScroll);
// 	  timelineCup.classList.remove('fixed');
// 	}
//   }
  
//   function handleScroll() {
// 	const timelineCupHeadPosition = timelineCupHead.getBoundingClientRect().bottom + window.pageYOffset - timelineCupHead.offsetHeight;
	
// 	if (window.pageYOffset >= timelineCupHeadPosition + 50) {
// 	  timelineCup.classList.add('fixed');
// 	} else {
// 	  timelineCup.classList.remove('fixed');
// 	}
//   }
  
//   let timelineCup = document.querySelector('.body');
//   let timelineCupHead = document.querySelector('.timeline-cup__head');
  
//   handleResize();
//   window.addEventListener('resize', handleResize);

/* Скрит, который добавляет класс при скролле */




//   document.querySelectorAll('.norway-string img').forEach(img => {
// 	img.addEventListener('click', () => {
// 	  document.querySelector('.timeline-cup').classList.remove('class1', 'class2', 'class3');
// 	  document.querySelector('.timeline-cup').classList.add('norway'); 
// 	});
//   });


// document.querySelectorAll('.norway-string img').forEach(img => {
// 	img.addEventListener('click', () => {
// 	  let norwayStrings = document.querySelectorAll('.norway-string');
// 	  norwayStrings.forEach(norwayString => {
// 		norwayString.classList.add('active');
// 	  });
// 	});
//   });

document.querySelectorAll('.norway-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.norway-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.sweden-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.sweden-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.france-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.france-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.germany-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.germany-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.austria-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.austria-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.italy-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.italy-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.finland-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.finland-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.r-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.r-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.b-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.b-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.ukraine-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.ukraine-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.lithuania-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.lithuania-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.switzerland-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.switzerland-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.poland-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.poland-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.japan-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.japan-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.united-states-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.united-states-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.canada-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.canada-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.bulgaria-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.bulgaria-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.slovenia-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.slovenia-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.slovakia-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.slovakia-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.czech-republic-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.czech-republic-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.new-zealand-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.new-zealand-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.south-korea-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.south-korea-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.china-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.china-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.estonia-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.estonia-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.belgium-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.belgium-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.romania-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.romania-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.croatia-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.croatia-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.kazakhstan-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.kazakhstan-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.united-kingdom-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.united-kingdom-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.latvia-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.latvia-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });

  document.querySelectorAll('.moldova-string img').forEach(img => {
	img.addEventListener('click', () => {
	  let chosenStrings = document.querySelectorAll('.chosen-string');
	  chosenStrings.forEach(chosenString => {
		chosenString.classList.remove('active');
	  });
	  let norwayStrings = document.querySelectorAll('.moldova-string');
	  norwayStrings.forEach(norwayString => {
		norwayString.classList.add('active');
	  });
	});
  });