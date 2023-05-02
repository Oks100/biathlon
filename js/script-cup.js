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


function handleResize() {
	if (window.innerWidth <= 992) {
	  window.addEventListener('scroll', handleScroll);
	} else {
	  window.removeEventListener('scroll', handleScroll);
	  timelineCup.classList.remove('fixed');
	}
  }
  
  function handleScroll() {
	const timelineCupHeadPosition = timelineCupHead.getBoundingClientRect().bottom + window.pageYOffset - timelineCupHead.offsetHeight;
	
	if (window.pageYOffset >= timelineCupHeadPosition + 150) {
	  timelineCup.classList.add('fixed');
	} else {
	  timelineCup.classList.remove('fixed');
	}
  }
  
  let timelineCup = document.querySelector('.timeline-cup');
  let timelineCupHead = document.querySelector('.timeline-cup__head');
  
  handleResize();
  window.addEventListener('resize', handleResize);