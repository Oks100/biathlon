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
 });

/*$(document).ready(function() {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', ()=>{
  document.body.classList.toggle('dark');
});*/


/*const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'progressbar'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});*/