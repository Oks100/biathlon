// // Получаем селект и блок
// const selecttd = document.getElementById('sport-vote-1');
// const tabletd = document.querySelector('.sportsmen-votes__table');

// // Добавляем обработчик события на изменение значения селекта
// selecttd.addEventListener('change', function() {
//   // Проверяем выбранную опцию
//   if (selecttd.value === 'sport-vote-1') {
//     // Добавляем класс hide к блоку
//     tabletd.classList.add('hide-td-1');
//   }
// });

// Получаем селект и блок
const selecttd = document.getElementById('sport-vote-1');
const tabletd = document.querySelector('.sportsmen-votes__table');

// Добавляем обработчик события на изменение значения селекта
selecttd.addEventListener('change', function() {
  // Проверяем выбранную опцию
  if (selecttd.value === 'sport-vote-1') {
    // Добавляем класс hide к блоку
    tabletd.classList.add('hide-td-1');
    // Удаляем блок с классом vote-hide-1-2
    const voteHideBlock = document.querySelector('#sport-vote-1');
    if (voteHideBlock) {
      voteHideBlock.remove();
    }
  }
});


// Получаем селект и блок
const selecttd2 = document.getElementById('sport-vote-2');
const tabletd2 = document.querySelector('.sportsmen-votes__table');

// Добавляем обработчик события на изменение значения селекта
selecttd2.addEventListener('change', function() {
  // Проверяем выбранную опцию
  if (selecttd2.value === 'sport-vote-2') {
    // Добавляем класс hide к блоку
    tabletd2.classList.add('hide-td-2');
    // Удаляем блок с классом vote-hide-1-2
    const voteHideBlock2 = document.querySelector('#sport-vote-2');
    if (voteHideBlock2) {
      voteHideBlock2.remove();
    }
  }
});

