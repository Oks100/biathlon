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



  $(document).ready(function(){
	$('.toggle-style-table').click(function () {
		$('.timeline-cup-result').toggleClass('modern');
		$('.timeline-cup-result').toggleClass('old');
		});
	});









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
	
	  document.querySelectorAll('.australia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.australia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.mongilia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.mongilia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.greece-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.greece-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.greenland-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.greenland-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.serbia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.serbia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.spain-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.spain-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.mongolia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.mongolia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.bosnia-and-herzegovina-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.bosnia-and-herzegovina-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.hungary-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.hungary-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	  
	  document.querySelectorAll('.netherlands-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.netherlands-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.turkey-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.chosen-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.turkey-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	
	
	
	  document.querySelectorAll('.nations-france-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-france-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-norway-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-norway-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-germany-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-germany-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-sweden-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-sweden-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-italy-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-italy-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-r-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-r-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-austria-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-austria-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-switzerland-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-switzerland-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-czech-republic-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-czech-republic-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-finland-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-finland-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-slovenia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-slovenia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-canada-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-canada-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-united-states-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-united-states-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-b-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-b-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-ukraine-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-ukraine-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-lithuania-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-lithuania-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-japan-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-japan-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-estonia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-estonia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-bulgaria-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-bulgaria-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-slovakia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-slovakia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-romania-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-romania-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-belgium-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-belgium-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-poland-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-poland-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-kazakhstan-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-kazakhstan-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-latvia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-latvia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-moldova-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-moldova-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-china-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-china-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-south-korea-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-south-korea-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-netherlands-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-netherlands-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-croatia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-croatia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-serbia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-serbia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-mongilia-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-mongilia-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-greece-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-greece-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });
	
	  document.querySelectorAll('.nations-moldova-string img').forEach(img => {
		img.addEventListener('click', () => {
		  let chosenStrings = document.querySelectorAll('.nations-string');
		  chosenStrings.forEach(chosenString => {
			chosenString.classList.remove('active');
		  });
		  let norwayStrings = document.querySelectorAll('.nations-moldova-string');
		  norwayStrings.forEach(norwayString => {
			norwayString.classList.add('active');
		  });
		});
	  });