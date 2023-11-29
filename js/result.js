$(document).ready(function(){
	$('.age-button-svg').click(function () {
		$('.timeline-cup').toggleClass('profiles-color');
		});
	});


$(document).ready(function(){
	var isTransitionActive = false;
	
	$('.age-button-svg').click(function () {
	  if (!isTransitionActive) {
		$('.name-container a').css('transition', 'all .3s ease');
		isTransitionActive = true;
		setTimeout(function() {
		  $('.name-container a').css('transition', 'none');
		  isTransitionActive = false;
		}, 300);
	  }
	});
  });