	// Получаем все элементы с классом "shooting-type"
    var shootingTypes = document.getElementsByClassName('shooting-type');
  
    // Проходимся по каждому элементу и назначаем обработчик события "click"
    for (var i = 0; i < shootingTypes.length; i++) {
      shootingTypes[i].addEventListener('click', function() {
        // Удаляем класс "active" у всех элементов с классом "shooting-type"
        for (var j = 0; j < shootingTypes.length; j++) {
          shootingTypes[j].classList.remove('active');
        }
        
        // Добавляем класс "active" только к текущему элементу
        this.classList.add('active');
      });
    }
    