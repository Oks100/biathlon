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
var h_hght = 250; // высота шапки
var h_mrg = 0;	  // отступ когда шапка уже не видна
				
$(function(){

	var elem = $('#timeline-cup__navbar');
	var top = $(this).scrollTop();
	
	if(top > h_hght){
		elem.css('top', h_mrg);
	}			
	
	$(window).scroll(function(){
		top = $(this).scrollTop();
		
		if (top+h_mrg < h_hght) {
			elem.css('top', (h_hght-top));
		} else {
			elem.css('top', h_mrg);
		}
	});

});
/*Прилипающая шапка*/