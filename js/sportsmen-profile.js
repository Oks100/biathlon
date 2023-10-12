const skipped = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [22.40, NaN, 15.20, 17.70, 14.60, 8.80, 4.70, 3.70, 6.10, 5.40, 2.90, 3.10, 4.60, 6.10, 4.50],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, NaN, NaN, 15.30, 10.10, 6.90, 9.20, 7.50, 5.10, 4.70, 10.10, 7.20, 6.30, 5.10, 9.10],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Скорость за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        reverse: true,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect = document.getElementById('chartSelect');
chartSelect.addEventListener('change', function () {
  const selectedValue = chartSelect.value;

  if (selectedValue === 'dataset1') {
    myChart.data.datasets[1].data = [NaN, NaN, NaN, 15.30, 10.10, 6.90, 9.20, 7.50, 5.10, 4.70, 10.10, 7.20, 6.30, 5.10, 9.10];
    myChart.data.datasets[1].label = 'Жулья Симон';
  } else if (selectedValue === 'dataset2') {
    myChart.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 19.30, 14.00, 12.10, 13.70, 12.70, 17.20];
    myChart.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart.data.datasets[1].data = [NaN, NaN, NaN, NaN, 14.70, 7.70, 10.60, 4.70, 6.20, 3.60, 1.00, 0.20, 0.50, 1.50, 2.50];
    myChart.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart.update();
});


window.addEventListener('resize', function () {
  myChart.resize();
});










const skipped2 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down2 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Остерсунд, Индивидуальная гонка', 'Остерсунд, Спринт', 'Остерсунд, Спринт', 'Остерсунд, Гонка преследования', 'Остерсунд, Эстафета', 'Хохфильцен, Спринт', 'Хохфильцен, Эстафета', 'Хохфильцен, Гонка преследования', 'Аннеси - Ле-Гран-Борнан, Спринт', 'Аннеси - Ле-Гран-Борнан, Гонка преследования', 'Аннеси - Ле-Гран-Борнан, Масс-старт', 'Оберхоф, Спринт', 'Оберхоф, Смешанная эстафета', 'Оберхоф, Гонка преследования', 'Рупольдинг, Спринт', 'Рупольдинг, Эстафета', 'Рупольдинг, Гонка преследования', 'Антхольц-Антерсельва, Индивидуальная гонка', 'Антхольц-Антерсельва, Эстафета', 'Антхольц-Антерсельва, Масс-старт', 'Пекин, Смешанная эстафета', 'Пекин, Индивидуальная гонка', 'Пекин, Спринт', 'Пекин, Гонка преследования', 'Пекин, Эстафета', 'Пекин, Масс-старт', 'Контиолахти, Эстафета', 'Контиолахти, Спринт', 'Контиолахти, Гонка преследования', 'Отепяя, Спринт', 'Отепяя, Масс-старт', 'Отепяя, Одиночная смешанная эстафета', 'Холменколлен, Спринт', 'Холменколлен, Масс-старт'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [37, 23, 16, 13, 6, 33, NaN, 31, 19, 10, 4, 10, 7, 15, 3, 6, 7, 5, 4, 1, 9, 18, 3, 6, 5, 22, 3, 17, 2, 21, 21, NaN, 67, 12],
        fill: 'start',
        backgroundColor: 'rgba(255, 52, 52, 0.1)',
        borderColor: 'rgba(255, 52, 52, 0.5)',
        pointBackgroundColor: 'rgba(255, 52, 52, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped2(ctx,
            'rgba(255, 52, 52, 0.5)'),
          borderDash: ctx => skipped2(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [22, 50, 19, 14, 10, 15, 5, 49, 40, NaN, 28, 21, 10, 36, 37, 9, 24, 80, NaN, 28, 13, 10, 8, 13, 7, 7],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped2(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped2(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Все результаты в сезоне 2021/2022',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        beginAtZero: true,
        reverse: true,
        // suggestedMax: 1,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect2 = document.getElementById('chartSelect2');
chartSelect2.addEventListener('change', function () {
  const selectedValue = chartSelect2.value;

  if (selectedValue === 'dataset1') {
    myChart2.data.datasets[1].data = [22, 50, 19, 14, 10, 15, 5, 49, 40, 28, 21, 10, 36, 37, 9, 24, 80, 28, 13, 10, 8, 13, 7, 7];
    myChart2.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart2.data.datasets[1].data = [67, 89, NaN, NaN, 12, 88, 10, NaN, 39, 65, 62, 64, 14, NaN, 71, 8, NaN, 83, 15, NaN, 16, 79, 56, 50, 15, NaN, 9, 38, 35, 54, NaN, 17, 41, 35];
    myChart2.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart2.data.datasets[1].data = [10, 3, 12, 1, 4, 3, NaN, 1, 1, 4, 6, 1, 1, 1, 2, 7, 1, NaN, NaN, NaN, 1, 3, 1, 1, 4, 3, 1, 8, 4, 10, 3, 1, 3, 2, 1];
    myChart2.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart2.update();
});


window.addEventListener('resize', function () {
  myChart2.resize();
});








const skipped3 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down3 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Остерсунд, Индивидуальная гонка', 'Остерсунд, Спринт', 'Остерсунд, Спринт', 'Остерсунд, Гонка преследования', 'Хохфильцен, Спринт', 'Хохфильцен, Гонка преследования', 'Аннеси - Ле-Гран-Борнан, Спринт', 'Аннеси - Ле-Гран-Борнан, Гонка преследования', 'Аннеси - Ле-Гран-Борнан, Масс-старт', 'Оберхоф, Спринт', 'Оберхоф, Гонка преследования', 'Рупольдинг, Спринт', 'Рупольдинг, Гонка преследования', 'Антхольц-Антерсельва, Индивидуальная гонка', 'Антхольц-Антерсельва, Масс-старт', 'Пекин, Индивидуальная гонка', 'Пекин, Спринт', 'Пекин, Гонка преследования', 'Пекин, Масс-старт', 'Контиолахти, Спринт', 'Контиолахти, Гонка преследования', 'Отепяя, Спринт', 'Отепяя, Масс-старт', 'Холменколлен, Спринт', 'Холменколлен, Масс-старт'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [37, 23, 16, 13, 33, 31, 19, 10, 4, 10, 15, 3, 7, 5, 1, 18, 3, 6, 22, 17, 2, 21, 21, 67, 12],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped3(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped3(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [22, 50, 19, 14, 15, 49, 40, NaN, 28, 21, 36, 37, 24, 80, 28, 10, 8, 13, 7],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped3(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped3(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Личные результаты в сезоне 2021/2022',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        beginAtZero: true,
        reverse: true,
        suggestedMax: 1,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect3 = document.getElementById('chartSelect3');
chartSelect3.addEventListener('change', function () {
  const selectedValue = chartSelect3.value;

  if (selectedValue === 'dataset1') {
    myChart3.data.datasets[1].data = [22, 50, 19, 14, 15, 49, 40, NaN, 28, 21, 36, 37, 24, 80, 28, 10, 8, 13, 7];
    myChart3.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart3.data.datasets[1].data = [67, 89, NaN, NaN, 88, NaN, 39, 65, 62, 64, NaN, 71, NaN, 83, NaN, 79, 56, 50, NaN, 38, 35, 54, NaN, 41, 35];
    myChart3.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart3.data.datasets[1].data = [10, 3, 12, 1, 3, 1, 1, 4, 6, 1, 1, 2, 1, NaN, NaN, 3, 1, 1, 3, 8, 4, 10, 3, 1, 2, 1];
    myChart3.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart3.update();
});


window.addEventListener('resize', function () {
  myChart3.resize();
});





const skipped4 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down4 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart4').getContext('2d');
var myChart4 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [80.0, NaN, 85.0, 76.7, 85.9, 85.6, 86.3, 86.9, 85.0, 86.2, 85.5, 82.7, 86.4, 83.4, 88.1],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, NaN, NaN, 84.2, 87.7, 86.3, 88.5, 88.1, 84.1, 87.9, 88.4, 84.9, 84.3, 77.2, 85.6],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Точность стрельбы за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        suggestedMax: 100,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect4 = document.getElementById('chartSelect4');
chartSelect4.addEventListener('change', function () {
  const selectedValue = chartSelect4.value;

  if (selectedValue === 'dataset1') {
    myChart4.data.datasets[1].data = [NaN, NaN, NaN, 84.2, 87.7, 86.3, 88.5, 88.1, 84.1, 87.9, 88.4, 84.9, 84.3, 77.2, 85.6];
    myChart4.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart4.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 83.3, 90.9, 85.2, 85.3, 80.1, 75.4, 77.2, 77.4];
    myChart4.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart4.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, 82.7, 80.8, 81.8, 82.9, 82.4, 83.2, 84.8, 84.0, 90.8, 89.7];
    myChart4.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart4.update();
});


window.addEventListener('resize', function () {
  myChart4.resize();
});





const skipped5 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down5 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [17, 71, 27, 29, 14, 21, 31, 33, 30, 29, 14, 43, 19],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped5(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped5(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, 24, 12, 20, 4, 14, 36, 15, 13, 12, 22, 89, 31],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped5(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped5(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Рейтинг стрельбы за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        beginAtZero: true,
        reverse: true,
        suggestedMax: 1,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect5 = document.getElementById('chartSelect5');
chartSelect5.addEventListener('change', function () {
  const selectedValue = chartSelect5.value;

  if (selectedValue === 'dataset1') {
    myChart5.data.datasets[1].data = [NaN, 24, 12, 20, 4, 14, 36, 15, 13, 12, 22, 89, 31];
    myChart5.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart5.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 41, 32, 53, 93, 90, 102];
    myChart5.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart5.data.datasets[1].data = [NaN, NaN, NaN, 53, 55, 70, 50, 59, 47, 14, 27, 5, 6, 19];
    myChart5.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart5.update();
});


window.addEventListener('resize', function () {
  myChart5.resize();
});






const skipped6 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down6 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart6').getContext('2d');
var myChart6 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [25.4, NaN, 26.3, 26.7, 25.6, 25.7, 26.0, 25.9, 26.2, 25.6, 26.9, 26.0, 25.9, 26.2, 25.6],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, NaN, NaN, 26.4, 27.7, 26.4, 27.3, 27.5, 27.3, 27.8, 26.9, 26.7, 27.5, 27.6, 26.8],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Скорострельность за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        // suggestedMax: 100,
        // beginAtZero: true,
        reverse: true,
        // suggestedMax: 1,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect6 = document.getElementById('chartSelect6');
chartSelect6.addEventListener('change', function () {
  const selectedValue = chartSelect6.value;

  if (selectedValue === 'dataset1') {
    myChart6.data.datasets[1].data = [NaN, NaN, NaN, 26.4, 27.7, 26.4, 27.3, 27.5, 27.3, 27.8, 26.9, 26.7, 27.5, 27.6, 26.8];
    myChart6.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart6.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 24.7, 24.5, 25.1, 24.8, 24.3, 25.2, 24.6, 24.7];
    myChart6.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart6.data.datasets[1].data = [NaN, NaN, NaN, NaN, 25.6, 25.7, 25.4, 26.2, 26.8, 26.5, 26.4, 26.1, 25.7, 25.9, 25.8];
    myChart6.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart6.update();
});


window.addEventListener('resize', function () {
  myChart6.resize();
});




const skipped7 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down7 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart7').getContext('2d');
var myChart7 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [NaN, NaN, 45, 51, 33, 29, 39, 46, 51, 58, 37, 38, 41, 43, 47],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, NaN, NaN, 47, 49, 43, 58, 57, 62, 55, 68, 64, 62, 59, 52],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Рейтинг скорострельности за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        // beginAtZero: true,
        reverse: true,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});



const chartSelect7 = document.getElementById('chartSelect7');
chartSelect7.addEventListener('change', function () {
  const selectedValue = chartSelect7.value;

  if (selectedValue === 'dataset1') {
    myChart7.data.datasets[1].data = [NaN, NaN, NaN, 47, 49, 43, 58, 57, 62, 55, 68, 64, 62, 59, 52];
    myChart7.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart7.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, 32, 25, 34, 27, 29, 30, 36, 28];
    myChart7.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart7.data.datasets[1].data = [NaN, NaN, NaN, NaN, 59, 54, 53, 56, 43, 41, 44, 30, 28, 25, 32];
    myChart7.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart7.update();
});


window.addEventListener('resize', function () {
  myChart7.resize();
});




const skipped9 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down9 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart9').getContext('2d');
var myChart9 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [125, NaN, 81, 90, 78, 54, 13, 11, 23, 19, 9, 7, 21, 26, 16],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, NaN, NaN, 81, 47, 33, 43, 39, 12, 13, 70, 35, 30, 22, 60],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Рейтинг скорости за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        // beginAtZero: true,
        reverse: true,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect9 = document.getElementById('chartSelect9');
chartSelect9.addEventListener('change', function () {
  const selectedValue = chartSelect9.value;

  if (selectedValue === 'dataset1') {
    myChart9.data.datasets[1].data = [NaN, NaN, NaN, 81, 47, 33, 43, 39, 12, 13, 70, 35, 30, 22, 60];
    myChart9.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart9.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 130, 101, 81, 104, 87, 106];
    myChart9.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart9.data.datasets[1].data = [NaN, NaN, NaN, NaN, 79, 45, 57, 21, 24, 10, 3, 1, 2, 4, 6];
    myChart9.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart9.update();
});


window.addEventListener('resize', function () {
  myChart9.resize();
});





var ctx = document.getElementById('myChart10').getContext('2d');
var myChart10 = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Скорость', 'Точность', 'Скорострельность'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [29.1, 34.5, 51.2],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      },
      {
        label: 'Юлия Джима',
        data: [40.4, 24.3, 56.7],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
      }
    ]
  },
  options: {
    scales: {
      r: {
        // beginAtZero: true,
        suggestedMax: 100,
        reverse: true,
      },
      x: {
        ticks: {
          // rotation: 90,
          autoSkip: false,
          display: false
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Сбалансированность результатов за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
  }
});

const chartSelect10 = document.getElementById('chartSelect10');
chartSelect10.addEventListener('change', function() {
  const selectedValue = chartSelect10.value;

  if (selectedValue === 'dataset1') {
    myChart10.data.datasets[1].data = [40.4, 24.3, 56.7];
    myChart10.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart10.data.datasets[1].data = [101.5, 68.5, 37.1];
    myChart10.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart10.data.datasets[1].data = [17.3, 36.8, 47.2];
    myChart10.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart10.update();
});

window.addEventListener('resize', function() {
  myChart10.resize();
});




var ctx = document.getElementById('myChart11').getContext('2d');
var myChart11 = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['Скорость', 'Точность', 'Скорострельность'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [26, 43, 47],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      },
      {
        label: 'Юлия Джима',
        data: [22, 89, 59],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
      }
    ]
  },
  options: {
    scales: {
      r: {
        // beginAtZero: true,
        suggestedMax: 100,
        reverse: true,
      },
      x: {
        ticks: {
          autoSkip: false,
          display: false
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Сбалансированность результатов в сезоне 2021/2022',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
  }
});

const chartSelect11 = document.getElementById('chartSelect11');
chartSelect11.addEventListener('change', function() {
  const selectedValue = chartSelect11.value;

  if (selectedValue === 'dataset1') {
    myChart11.data.datasets[1].data = [22, 89, 59];
    myChart11.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart11.data.datasets[1].data = [87, 90, 36];
    myChart11.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart11.data.datasets[1].data = [4, 5, 25];
    myChart11.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart11.update();
});

window.addEventListener('resize', function() {
  myChart11.resize();
});




const skipped12 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down12 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart12').getContext('2d');
var myChart12 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Доротея Вирер',
        data: [51, 87, 38, 16, 8, 3, 5, 5, 1, 1, 5, 9, 2],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgba(255, 0, 0, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      },
      {
        label: 'Юлия Джима',
        data: [NaN, 60, 30, 17, 21, 13, 8, 11, 37, 36, 17, 41, 33],
        fill: 'start',
        backgroundColor: 'rgb(255, 147, 83, 0.1)',
        borderColor: 'rgb(255, 147, 83, 0.5)',
        pointBackgroundColor: 'rgb(255, 147, 83)',
        tension: 0.3,
        segment: {
          borderColor: ctx => skipped4(ctx,
            'rgb(255, 147, 83, 0.5)'),
          borderDash: ctx => skipped4(ctx, [6, 6]),
        },
        spanGaps: true,
      }
    ]
  },
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Общая позиция за карьеру',
        color: '#1f7ec4',
        font: {
          size: 18,
          family: 'Arial',
        }
      }
    },
    scales: {
      y: {
        responsive: true,
        maintainAspectRatio: true,
        // beginAtZero: true,
        reverse: true,
      },
      x: {
        ticks: {
          maxRotation: 0,
          minRotation: 0,
          display: false
        }
      }
    }
  },
  animation: {
    tension: {
      duration: 2000,
      easing: 'linear'
    }
  }
});

const chartSelect12 = document.getElementById('chartSelect12');
chartSelect12.addEventListener('change', function () {
  const selectedValue = chartSelect12.value;

  if (selectedValue === 'dataset1') {
    myChart12.data.datasets[1].data = [NaN, 60, 30, 17, 21, 13, 8, 11, 37, 36, 17, 41, 33];
    myChart12.data.datasets[1].label = 'Юлия Джима';
  } else if (selectedValue === 'dataset2') {
    myChart12.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, 76, 54, NaN, 91, NaN];
    myChart12.data.datasets[1].label = 'Регина Ойя';
  }
  else if (selectedValue === 'dataset3') {
    myChart12.data.datasets[1].data = [NaN, NaN, 81, 53, 44, 22, 12, 14, 4, 5, 2, 1, 15];
    myChart12.data.datasets[1].label = 'Марте Олсбю Ройселанд';
  }

  myChart12.update();
});


window.addEventListener('resize', function () {
  myChart12.resize();
});




















(function ($) {
  $.easyPieChart = function (el, options) {
    var addScaleLine, animateLine, drawLine, easeInOutQuad, rAF, renderBackground, renderScale, renderTrack,
      _this = this;
    this.el = el;
    this.$el = $(el);
    this.$el.data("easyPieChart", this);
    this.init = function () {
      var percent, scaleBy;
      _this.options = $.extend({}, $.easyPieChart.defaultOptions, options);
      percent = parseInt(_this.$el.data('percent'), 10);
      _this.percentage = 0;
      _this.canvas = $("<canvas width='" + _this.options.size + "' height='" + _this.options.size + "'></canvas>").get(0);
      _this.$el.append(_this.canvas);
      if (typeof G_vmlCanvasManager !== "undefined" && G_vmlCanvasManager !== null) {
        G_vmlCanvasManager.initElement(_this.canvas);
      }
      _this.ctx = _this.canvas.getContext('2d');
      if (window.devicePixelRatio > 1) {
        scaleBy = window.devicePixelRatio;
        $(_this.canvas).css({
          width: _this.options.size,
          height: _this.options.size
        });
        _this.canvas.width *= scaleBy;
        _this.canvas.height *= scaleBy;
        _this.ctx.scale(scaleBy, scaleBy);
      }
      _this.ctx.translate(_this.options.size / 2, _this.options.size / 2);
      _this.ctx.rotate(_this.options.rotate * Math.PI / 180);
      _this.$el.addClass('easyPieChart');
      _this.$el.css({
        width: _this.options.size,
        height: _this.options.size,
        lineHeight: "" + _this.options.size + "px"
      });
      _this.update(percent);
      return _this;
    };
    this.update = function (percent) {
      percent = parseFloat(percent) || 0;
      if (_this.options.animate === false) {
        drawLine(percent);
      } else {
        animateLine(_this.percentage, percent);
      }
      return _this;
    };
    renderScale = function () {
      var i, _i, _results;
      _this.ctx.fillStyle = _this.options.scaleColor;
      _this.ctx.lineWidth = 1;
      _results = [];
      for (i = _i = 0; _i <= 24; i = ++_i) {
        _results.push(addScaleLine(i));
      }
      return _results;
    };
    addScaleLine = function (i) {
      var offset;
      offset = i % 6 === 0 ? 0 : _this.options.size * 0.017;
      _this.ctx.save();
      _this.ctx.rotate(i * Math.PI / 12);
      _this.ctx.fillRect(_this.options.size / 2 - offset, 0, -_this.options.size * 0.05 + offset, 1);
      _this.ctx.restore();
    };
    renderTrack = function () {
      var offset;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2, true);
      _this.ctx.closePath();
      _this.ctx.strokeStyle = _this.options.trackColor;
      _this.ctx.lineWidth = _this.options.lineWidth;
      _this.ctx.stroke();
    };
    renderBackground = function () {
      if (_this.options.scaleColor !== false) {
        renderScale();
      }
      if (_this.options.trackColor !== false) {
        renderTrack();
      }
    };
    drawLine = function (percent) {
      var offset;
      renderBackground();
      _this.ctx.strokeStyle = $.isFunction(_this.options.barColor) ? _this.options.barColor(percent) : _this.options.barColor;
      _this.ctx.lineCap = _this.options.lineCap;
      _this.ctx.lineWidth = _this.options.lineWidth;
      offset = _this.options.size / 2 - _this.options.lineWidth / 2;
      if (_this.options.scaleColor !== false) {
        offset -= _this.options.size * 0.08;
      }
      _this.ctx.save();
      _this.ctx.rotate(-Math.PI / 2);
      _this.ctx.beginPath();
      _this.ctx.arc(0, 0, offset, 0, Math.PI * 2 * percent / 100, false);
      _this.ctx.stroke();
      _this.ctx.restore();
    };
    rAF = (function () {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
        return window.setTimeout(callback, 1000 / 60);
      };
    })();
    animateLine = function (from, to) {
      var anim, startTime;
      _this.options.onStart.call(_this);
      _this.percentage = to;
      Date.now || (Date.now = function () {
        return +(new Date);
      });
      startTime = Date.now();
      anim = function () {
        var currentValue, process;
        process = Date.now() - startTime;
        if (process < _this.options.animate) {
          rAF(anim);
        }
        _this.ctx.clearRect(-_this.options.size / 2, -_this.options.size / 2, _this.options.size, _this.options.size);
        renderBackground.call(_this);
        currentValue = [easeInOutQuad(process, from, to - from, _this.options.animate)];
        _this.options.onStep.call(_this, currentValue);
        drawLine.call(_this, currentValue);
        if (process >= _this.options.animate) {
          return _this.options.onStop.call(_this, currentValue, to);
        }
      };
      rAF(anim);
    };
    easeInOutQuad = function (t, b, c, d) {
      var easeIn, easing;
      easeIn = function (t) {
        return Math.pow(t, 2);
      };
      easing = function (t) {
        if (t < 1) {
          return easeIn(t);
        } else {
          return 2 - easeIn((t / 2) * -2 + 2);
        }
      };
      t /= d / 2;
      return c / 2 * easing(t) + b;
    };
    return this.init();
  };
  $.easyPieChart.defaultOptions = {
    barColor: '#005bbb',
    trackColor: '#f2f2f2',
    scaleColor: '#dfe0e0',
    lineCap: 'arrow',
    rotate: 0,
    size: 60,
    lineWidth: 5,
    animate: false,
    onStart: $.noop,
    onStop: $.noop,
    onStep: $.noop
  };
  $.fn.easyPieChart = function (options) {
    return $.each(this, function (i, el) {
      var $el, instanceOptions;
      $el = $(el);
      if (!$el.data('easyPieChart')) {
        instanceOptions = $.extend({}, options, $el.data());
        return $el.data('easyPieChart', new $.easyPieChart(el, instanceOptions));
      }
    });
  };
  return void 0;
})(jQuery);

$(function () {
  $('.chart').easyPieChart({
    size: 45,
    barColor: '#81aad5',
    trackColor: '#f2f2f2',
    scaleColor: false,
    lineWidth: 5,
    lineCap: 'round',
    animate: 1000,
    onStart: $.noop,
    onStop: $.noop
  });
});





// Получаем все элементы с классом .menu-tab
const menuTabs = document.querySelectorAll('.menu-tab');

// Обработчик клика на элементе
function handleClick1(event) {
  const clickedTab = event.currentTarget;

  // Удаляем класс active у всех элементов .menu-tab
  menuTabs.forEach(tab => tab.classList.remove('active'));

  // Добавляем класс active только к кликнутому элементу
  clickedTab.classList.add('active');
}

// Добавляем обработчик клика к каждому элементу .menu-tab
menuTabs.forEach(tab => tab.addEventListener('click', handleClick1));




// Получаем все элементы с классом .menu-tab-2
const menuTabs2 = document.querySelectorAll('.menu-tab-2');

// Обработчик клика на элементе
function handleClick2(event) {
  const clickedTab = event.currentTarget;

  // Удаляем класс active у всех элементов .menu-tab-2
  menuTabs2.forEach(tab => tab.classList.remove('active'));

  // Добавляем класс active только к кликнутому элементу
  clickedTab.classList.add('active');
}

// Добавляем обработчик клика к каждому элементу .menu-tab-2
menuTabs2.forEach(tab => tab.addEventListener('click', handleClick2));




// Получаем все элементы с классом .menu-tab-2
const menuTabs3 = document.querySelectorAll('.menu-tab-3');

// Обработчик клика на элементе
function handleClick3(event) {
  const clickedTab = event.currentTarget;

  // Удаляем класс active у всех элементов .menu-tab-2
  menuTabs3.forEach(tab => tab.classList.remove('active'));

  // Добавляем класс active только к кликнутому элементу
  clickedTab.classList.add('active');
}

// Добавляем обработчик клика к каждому элементу .menu-tab-2
menuTabs3.forEach(tab => tab.addEventListener('click', handleClick3));



$(document).on('click', '.timeline-sportsmen-profile__body-table-button', function () {
  $('.timeline-sportsmen-profile__body-add-info').toggleClass('open');
});

$(document).on('click', function (event) {
  var target = $(event.target);
  var infoBlock = $('.timeline-sportsmen-profile__body-add-info');
  var menuBlock = $('.timeline-sportsmen-profile__body-add-info-menu');

  if (!target.closest(infoBlock).length && !target.hasClass('timeline-sportsmen-profile__body-table-button') && !target.closest(menuBlock).length) {
    infoBlock.removeClass('open');
  }
});




/* Продвинутое автоувеличение поля ввода*/

// Targets all textareas with class "text-field"
let textareas = document.querySelectorAll('.text-field'),
  hiddenDiv = document.createElement('div'),
  content = null;

// Adds a class to all textareas
for (let j of textareas) {
  j.classList.add('txtstuff');
}

// Build the hidden div's attributes

// The line below is needed if you move the style lines to CSS
// hiddenDiv.classList.add('hiddendiv');

// Add the "text-field" styles, which are common to both textarea and hiddendiv
// If you want, you can remove those from CSS and add them via JS
hiddenDiv.classList.add('text-field');

// Add the styles for the hidden div
// These can be in the CSS, just remove these three lines and uncomment the CSS
hiddenDiv.style.display = 'none';
hiddenDiv.style.whiteSpace = 'pre-wrap';
hiddenDiv.style.wordWrap = 'break-word';

// Loop through all the textareas and add the event listener
for (let i of textareas) {
  (function (i) {
    // Note: Use 'keyup' instead of 'input'
    // if you want older IE support
    i.addEventListener('input', function () {

      // Append hiddendiv to parent of textarea, so the size is correct
      i.parentNode.appendChild(hiddenDiv);

      // Remove this if you want the user to be able to resize it in modern browsers
      i.style.resize = 'none';

      // This removes scrollbars
      i.style.overflow = 'hidden';

      // Every input/change, grab the content
      content = i.value;

      // Add the same content to the hidden div

      // This is for old IE
      content = content.replace(/\n/g, '<br>');

      // The <br ..> part is for old IE
      // This also fixes the jumpy way the textarea grows if line-height isn't included
      hiddenDiv.innerHTML = content + '<br style="line-height: 3px;">';

      // Briefly make the hidden div block but invisible
      // This is in order to read the height
      hiddenDiv.style.visibility = 'hidden';
      hiddenDiv.style.display = 'block';
      i.style.height = hiddenDiv.offsetHeight + 'px';

      // Make the hidden div display:none again
      hiddenDiv.style.visibility = 'visible';
      hiddenDiv.style.display = 'none';
    });
  })(i);
}

/* Продвинутое автоувеличение поля ввода*/



// Получаем элементы select и блок timeline-sportsmen-profile__body-chart
const select55 = document.getElementById("chart-filter");
const chartBlock55 = document.querySelector(".timeline-sportsmen-profile__body-chart");

// Добавляем обработчик события изменения выбранной опции в select
select55.addEventListener("change", function () {
  // Получаем выбранное значение
  const selectedValue55 = select55.value;

  // Проверяем выбранное значение и добавляем/удаляем класс tab-2
  if (selectedValue55 === "chart") {
    chartBlock55.classList.add("tab-2");
    chartBlock55.classList.remove("tab-2-2");
  } else if (selectedValue55 === "chart-2") {
    chartBlock55.classList.remove("tab-2");
    chartBlock55.classList.add("tab-2-2");
  }
});


// Получаем элементы select и блок timeline-sportsmen-profile__body-chart
const select66 = document.getElementById("chart-filter-2");
const chartBlock66 = document.querySelector(".timeline-sportsmen-profile__body-chart-2");

// Добавляем обработчик события изменения выбранной опции в select
select66.addEventListener("change", function () {
  // Получаем выбранное значение
  const selectedValue66 = select66.value;

  // Проверяем выбранное значение и добавляем/удаляем класс tab-2
  if (selectedValue66 === "chart") {
    chartBlock66.classList.add("tab-3");
    chartBlock66.classList.remove("tab-3-3");
  } else if (selectedValue66 === "chart-3") {
    chartBlock66.classList.remove("tab-3");
    chartBlock66.classList.add("tab-3-3");
  }
});


// Получаем элементы select и блок timeline-sportsmen-profile__body-chart
const select77 = document.getElementById("chart-filter-3");
const chartBlock77 = document.querySelector(".timeline-sportsmen-profile__body-chart-3");

// Добавляем обработчик события изменения выбранной опции в select
select77.addEventListener("change", function () {
  // Получаем выбранное значение
  const selectedValue77 = select77.value;

  // Проверяем выбранное значение и добавляем/удаляем класс tab-2
  if (selectedValue77 === "chart") {
    chartBlock77.classList.add("tab-4");
    chartBlock77.classList.remove("tab-4-4");
  } else if (selectedValue77 === "chart-4") {
    chartBlock77.classList.remove("tab-4");
    chartBlock77.classList.add("tab-4-4");
  }
});



// Получаем элементы select и блок timeline-sportsmen-profile__body-chart
const select88 = document.getElementById("chart-filter-4");
const chartBlock88 = document.querySelector(".timeline-sportsmen-profile__body-chart-4");

// Добавляем обработчик события изменения выбранной опции в select
select88.addEventListener("change", function () {
  // Получаем выбранное значение
  const selectedValue88 = select88.value;

  // Проверяем выбранное значение и добавляем/удаляем класс tab-2
  if (selectedValue88 === "chart") {
    chartBlock88.classList.add("tab-5");
    chartBlock88.classList.remove("tab-5-5");
  } else if (selectedValue88 === "chart-5") {
    chartBlock88.classList.remove("tab-5");
    chartBlock88.classList.add("tab-5-5");
  }
});


// Получаем элементы select и блок timeline-sportsmen-profile__body-chart
const select99 = document.getElementById("chart-filter-5");
const chartBlock99 = document.querySelector(".timeline-sportsmen-profile__body-chart-5");

// Добавляем обработчик события изменения выбранной опции в select
select99.addEventListener("change", function () {
  // Получаем выбранное значение
  const selectedValue99 = select99.value;

  // Проверяем выбранное значение и добавляем/удаляем класс tab-2
  if (selectedValue99 === "chart") {
    chartBlock99.classList.add("tab-6");
    chartBlock99.classList.remove("tab-6-6");
  } else if (selectedValue99 === "chart-6") {
    chartBlock99.classList.remove("tab-6");
    chartBlock99.classList.add("tab-6-6");
  }
});



var inputCopyGroups = document.querySelectorAll('.input-group-copy');

for (var i = 0; i < inputCopyGroups.length; i++) {
  var _this = inputCopyGroups[i];
  var btn = _this.getElementsByClassName('btn-copy')[0];
  var input = _this.getElementsByClassName('form-control')[0];

  input.addEventListener('click', function(e) {
    this.select();
  });
  btn.addEventListener('click', function(e) {
    var input = this.parentNode.parentNode.getElementsByClassName('form-control')[0];
    input.select();
    try {
      var success = document.execCommand('copy');
      console.log('Copying ' + (success ? 'Succeeded' : 'Failed'));
    } catch (err) {
      console.log('Copying failed');
    }
  });
}




$(document).ready(function(){
  $('.sportsmen-profile__table-wrapper-text').click(function () {
    $(this).closest('.sportsmen-profile__table-wrapper').removeClass('lock');
  });
});    