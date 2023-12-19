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
        label: 'Украина',
        data: [13.5, 11.1, 11.3, 11.3, 8.7, 9.8, 11.6, 9.6, 11.2, 9.2, 12.9, 9.8, 9.5, 15.4, 14.3],
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
        label: 'Италия',
        data: [17.4, 18, 14.3, 16.8, 12.9, 11.1, 8.4, 8.5, 10.2, 7.4, 8.6, 7.1, 9, 12.2, 6.8],
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
        text: 'Скорость сборной',
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
    myChart.data.datasets[1].data = [17.4, 18, 14.3, 16.8, 12.9, 11.1, 8.4, 8.5, 10.2, 7.4, 8.6, 7.1, 9, 12.2, 6.8];
    myChart.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart.data.datasets[1].label = 'Конго';
  }

  myChart.update();
});


window.addEventListener('resize', function () {
  myChart.resize();
});





const skipped32 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down32 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart32').getContext('2d');
var myChart32 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Спринт 1', 'Спринт 2', 'Спринт 3', 'Спринт 4', 'Спринт 5', 'Спринт 6', 'Спринт 7', 'Спринт 8', 'Спринт 9', 'Спринт 10'],
    datasets: [
      {
        label: 'Украина',
        data: [6.20, 6.00, 6.30, 6.20, 6.00, 6.10, 5.70, 5.40, 4.90, 5.10],
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
        label: 'Италия',
        data: [5.50, 5.20, 5.10, 5.20, 5.30, 5.10, 4.70, 4.80, 4.60, 4.50],
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
        text: 'Скорость сборной за сезон',
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

const chartSelect32 = document.getElementById('chartSelect32');
chartSelect32.addEventListener('change', function () {
  const selectedValue32 = chartSelect32.value;

  if (selectedValue32 === 'dataset1') {
    myChart32.data.datasets[1].data = [5.50, 5.20, 5.10, 5.20, 5.30, 5.10, 4.70, 4.80, 4.60, 4.50];
    myChart32.data.datasets[1].label = 'Италия';
  } else if (selectedValue32 === 'dataset2') {
    myChart32.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart32.data.datasets[1].label = 'Конго';
  }

  myChart32.update();
});


window.addEventListener('resize', function () {
  myChart32.resize();
});













const skipped2 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down2 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1992/1993', '1993/1994', '1994/1995', '1995/1996', '1996/1997', '1997/1998', '1998/1999', '1999/2000', '2000/2001', '2001/2002', '2002/2003', '2003/2004', '2004/2005', '2005/2006', '2006/2007', '2007/2008', '2008/2009', '2009/2010', '2010/2011', '2011/2012', '2012/2013', '2013/2014', '2014/2015', '2015/2016', '2016/2017', '2017/2018', '2018/2019', '2019/2020', '2020/2021', '2021/2022', '2022/2023'],
    datasets: [
      {
        label: 'Украина',
        data: [35.3, 32.2, 30.3, 27.5, 40.6, 36.7, 28.9, 35.8, 33.8, 33, 46.2, 49, 52.3, 45.9, 41.2, 43.2, 38.1, 38, 31.1, 31.8, 23.8, 33.2, 36.1, 35.2, 40.4, 37.6, 47.9, 35.6, 40.4, 48.8, 51.9],
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
        label: 'Италия',
        data: [NaN, NaN, NaN, NaN, 51.1, 66.2, 47.2, 49.9, 42.8, 47.7, 48, 42.6, 50.2, 42.9, 50.3, 46.8, 46, 58, 44.4, 44.5, 42.1, 39.8, 29.1, 31.4, 32.9, 28.4, 33.9, 37.3, 42.4, 49.9, 32.3],
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
        text: 'Средние результаты в спринте за все время',
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
    myChart2.data.datasets[1].data = [NaN, NaN, NaN, NaN, 51.1, 66.2, 47.2, 49.9, 42.8, 47.7, 48, 42.6, 50.2, 42.9, 50.3, 46.8, 46, 58, 44.4, 44.5, 42.1, 39.8, 29.1, 31.4, 32.9, 28.4, 33.9, 37.3, 42.4, 49.9, 32.3];
    myChart2.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart2.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart2.data.datasets[1].label = 'Конго';
  }

  myChart2.update();
});


window.addEventListener('resize', function () {
  myChart2.resize();
});




const skipped20 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down20 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart20').getContext('2d');
var myChart20 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['1996/1997', '1997/1998', '1998/1999', '1999/2000', '2000/2001', '2001/2002', '2002/2003', '2003/2004', '2004/2005', '2005/2006', '2006/2007', '2007/2008', '2008/2009', '2009/2010', '2010/2011', '2011/2012', '2012/2013', '2013/2014', '2014/2015', '2015/2016', '2016/2017', '2017/2018', '2018/2019', '2019/2020', '2020/2021', '2021/2022', '2022/2023'],
    datasets: [
      {
        label: 'Украина',
        data: [8, 21, 2, 5, 3, 8, 30, 49, 34, 20, 17, 25, 10, 18, 13, 12, 8, 9, 5, 5, 13, 10, 30, 21, 16, 35, 33],
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
        label: 'Италия',
        data: [29, 17, 41, 30, 38, 29, 26, 18, 25, 14, 38, 14, 18, 61, 23, 26, 18, 16, 4, 3, 8, 7, 2, 2, 4, 13, 2],
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
        text: 'Лидер в спринтах за все время',
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

const chartSelect20 = document.getElementById('chartSelect20');
chartSelect20.addEventListener('change', function () {
  const selectedValue = chartSelect20.value;

  if (selectedValue === 'dataset1') {
    myChart20.data.datasets[1].data = [NaN, NaN, NaN, NaN, 51.1, 66.2, 47.2, 49.9, 42.8, 47.7, 48, 42.6, 50.2, 42.9, 50.3, 46.8, 46, 58, 44.4, 44.5, 42.1, 39.8, 29.1, 31.4, 32.9, 28.4, 33.9, 37.3, 42.4, 49.9, 32.3];
    myChart20.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart20.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart20.data.datasets[1].label = 'Конго';
  }

  myChart20.update();
});


window.addEventListener('resize', function () {
  myChart20.resize();
});







const skipped3 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down3 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart3').getContext('2d');
var myChart3 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Контиолахти', 'Хохфильцен', 'Аннеси - Ле-Гран-Борнан', 'Поклюка', 'Антхольц-Антерсельва', 'Оберхоф', 'Нове-Место', 'Холменколлен'],
    datasets: [
      {
        label: 'Украина',
        data: [58.3, 58.6, 57.4, 45.3, 46.8, 50, 34.4, 65.2],
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
        label: 'Италия',
        data: [25, 33.6, 36.2, 45.8, 27.4, 27.4, 44.6, 44.6],
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
        text: 'Средние результаты в спринте 2021/2022',
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
    myChart3.data.datasets[1].data = [25, 33.6, 36.2, 45.8, 27.4, 27.4, 44.6, 44.6];
    myChart3.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart3.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart3.data.datasets[1].label = 'Конго';
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
    labels: ['Сезон 98/99', 'Сезон 99/00', 'Сезон 00/01', 'Сезон 01/02', 'Сезон 02/03', 'Сезон 03/04', 'Сезон 04/05', 'Сезон 05/06', 'Сезон 06/07', 'Сезон 07/08', 'Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Украина',
        data: [83.7, 81.8, 82, 79, 76.1, 76.3, 73.6, 79.4, 83.3, 82.3, 78.8, 81.3, 84.8, 81.8, 82.7, 83.3, 80.9, 84.8, 82.4, 87.3, 85.1, 84.9, 83.3, 85.1, 83.6],
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
        label: 'Италия',
        data: [87.7, 88.9, 73, 76.1, 73.3, 73.6, 76.7, 83.5, 84.1, 84.1, 86.9, 83.5, 85.3, 80, 82.4, 82.2, 80.9, 84.3, 80.1, 82.5, 81.8, 75.5, 78.4, 77.4, 84.1],
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
        text: 'Средняя точность стрельбы сборной',
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
    myChart4.data.datasets[1].data = [87.7, 88.9, 73, 76.1, 73.3, 73.6, 76.7, 83.5, 84.1, 84.1, 86.9, 83.5, 85.3, 80, 82.4, 82.2, 80.9, 84.3, 80.1, 82.5, 81.8, 75.5, 78.4, 77.4, 84.1];
    myChart4.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart4.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart4.data.datasets[1].label = 'Конго';
  }

  myChart4.update();
});


window.addEventListener('resize', function () {
  myChart4.resize();
});






const skipped30 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down30 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart30').getContext('2d');
var myChart30 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Идив. гонка 1', 'Спринт 1', 'Спринт 2', 'Эстафета 1', 'Гонка преследования 1', 'Спринт 2', 'Гонка преследования 2', 'Спринт 3', 'Гонка преследования 3', 'Масс-старт 1', 'Смешанная эстафета 1', 'Спринт 4', 'Гонка преследования 4', 'Спринт 5', 'Эстафета 2', 'Гонка преследования 5', 'Идив. гонка 2', 'Эстафета 3', 'Масс-старт 2', 'Идив. гонка 1', 'Спринт 1', 'Спринт 2', 'Эстафета 1', 'Гонка преследования 1', 'Спринт 2', 'Гонка преследования 2', 'Спринт 3', 'Гонка преследования 3', 'Масс-старт 1', 'Смешанная эстафета 1', 'Спринт 4', 'Гонка преследования 4'],
    datasets: [
      {
        label: 'Украина',
        data: [90.0, 95.0, 90.0, 87.3, 87.2, 87.6, 87.9, 87.1, 86.3, 86.7, 87.7, 87.8, 88.0, 87.8, 87.7, 87.7, 87.5, 87.5, 87.4, 87.2, 87.2, 87.3, 87.4, 87.6, 87.7, 87.5, 87.7, 87.9, 88.0, 88.2, 88.0, 88.1],
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
        label: 'Италия',
        data: [80.0, 80.0, 85.0, 83.2, 84.0, 83.1, 83.1, 83.7, 83.6, 83.9, 83.7, 83.8, 83.6, 83.9, 83.9, 84.0, 84.2, 84.1, 84.3, 84.5, 84.4, 84.6, 84.7, 84.3, 84.2, 84.4, 84.6, 84.8, 84.9, 85.1, 85.2, 85.3],
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
        text: 'Средняя точность сборной за сезон',
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

const chartSelect30 = document.getElementById('chartSelect30');
chartSelect30.addEventListener('change', function () {
  const selectedValue = chartSelect30.value;

  if (selectedValue === 'dataset1') {
    myChart30.data.datasets[1].data = [80.0, 80.0, 85.0, 83.2, 84.0, 83.1, 83.1, 83.7, 83.6, 83.9, 83.7, 83.8, 83.6, 83.9, 83.9, 84.0, 84.2, 84.1, 84.3, 84.5, 84.4, 84.6, 84.7, 84.3, 84.2, 84.4, 84.6, 84.8, 84.9, 85.1, 85.2, 85.3];
    myChart30.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart30.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart30.data.datasets[1].label = 'Конго';
  }

  myChart30.update();
});


window.addEventListener('resize', function () {
  myChart30.resize();
});
















const skipped5 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down5 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart5').getContext('2d');
var myChart5 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 98/99', 'Сезон 99/00', 'Сезон 00/01', 'Сезон 01/02', 'Сезон 02/03', 'Сезон 03/04', 'Сезон 04/05', 'Сезон 05/06', 'Сезон 06/07', 'Сезон 07/08', 'Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Украина',
        data: [29.9, 41.4, 33.5, 49, 39.2, 76.3, 56, 56.3, 38.5, 52.5, 57.5, 53.6, 20.2, 49.7, 43.2, 40, 45.4, 41, 45.8, 24.8, 37.4, 18.3, 33, 35.7, 43.3],
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
        label: 'Италия',
        data: [10, 6, 61.5, 62, 62.7, 73.6, 64.8, 32.3, 32.8, 29, 22.4, 44.4, 15, 43.5, 44.6, 49.8, 41.8, 45, 56.2, 53.8, 52.4, 73.6, 68, 81.6, 39],
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
        text: 'Рейтинг стрельбы сборной',
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
    myChart5.data.datasets[1].data = [10, 6, 61.5, 62, 62.7, 73.6, 64.8, 32.3, 32.8, 29, 22.4, 44.4, 15, 43.5, 44.6, 49.8, 41.8, 45, 56.2, 53.8, 52.4, 73.6, 68, 81.6, 43.3, 39];
    myChart5.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart5.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart5.data.datasets[1].label = 'Конго';
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
        label: 'Украина',
        data: [25.4, 25.9, 26.3, 26.7, 25.6, 25.7, 26.0, 25.9, 26.2, 25.6, 26.9, 26.0, 25.9, 26.2, 25.6],
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
        label: 'Италия',
        data: [25.5, 26.1, 26.8, 26.4, 27.7, 26.4, 27.3, 27.5, 27.3, 27.8, 26.9, 26.7, 27.5, 27.6, 26.8],
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
        text: 'Средняя скорострельность сборной',
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
    myChart6.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart6.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart6.data.datasets[1].label = 'Конго';
  }

  myChart6.update();
});


window.addEventListener('resize', function () {
  myChart6.resize();
});




const skipped31 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down31 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart31').getContext('2d');
var myChart31 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Идив. гонка 1', 'Спринт 1', 'Спринт 2', 'Эстафета 1', 'Гонка преследования 1', 'Спринт 2', 'Гонка преследования 2', 'Спринт 3', 'Гонка преследования 3', 'Масс-старт 1', 'Смешанная эстафета 1', 'Спринт 4', 'Гонка преследования 4', 'Спринт 5', 'Эстафета 2', 'Гонка преследования 5', 'Идив. гонка 2', 'Эстафета 3', 'Масс-старт 2', 'Идив. гонка 1', 'Спринт 1', 'Спринт 2', 'Эстафета 1', 'Гонка преследования 1', 'Спринт 2', 'Гонка преследования 2', 'Спринт 3', 'Гонка преследования 3', 'Масс-старт 1', 'Смешанная эстафета 1', 'Спринт 4', 'Гонка преследования 4'],
    datasets: [
      {
        label: 'Украина',
        data: [25.8, 25.7, 25.8, 25.7, 25.6, 25.7, 25.8, 26.0, 26.2, 26.3, 26.8, 26.7, 26.7, 26.8, 26.8, 26.7, 26.7, 26.6, 26.7, 26.7, 26.7, 26.7, 26.9, 26.7, 26.6, 26.8, 26.6, 26.8, 26.7, 26.7, 26.6, 26.7],
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
        label: 'Италия',
        data: [26.9, 27.0, 27.0, 27.1, 27.2, 27.2, 27.2, 27.3, 27.2, 27.2, 27.3, 27.4, 27.3, 27.4, 27.3, 27.4, 27.2, 27.3, 27.2, 27.2, 27.1, 27.1, 27.1, 27.0, 27.0, 26.9, 26.8, 26.9, 26.9, 26.8, 26.8, 26.7],
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
        text: 'Сред. скорострельность сборной за сезон',
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

const chartSelect31 = document.getElementById('chartSelect31');
chartSelect31.addEventListener('change', function () {
  const selectedValue = chartSelect31.value;

  if (selectedValue === 'dataset1') {
    myChart31.data.datasets[1].data = [26.9, 27.0, 27.0, 27.1, 27.2, 27.2, 27.2, 27.3, 27.2, 27.2, 27.3, 27.4, 27.3, 27.4, 27.3, 27.4, 27.2, 27.3, 27.2, 27.2, 27.1, 27.1, 27.1, 27.0, 27.0, 26.9, 26.8, 26.9, 26.9, 26.8, 26.8, 26.7];
    myChart31.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart31.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart31.data.datasets[1].label = 'Конго';
  }

  myChart31.update();
});


window.addEventListener('resize', function () {
  myChart31.resize();
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
        label: 'Украина',
        data: [39, 41, 45, 51, 33, 29, 39, 46, 51, 58, 37, 38, 41, 43, 47],
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
        label: 'Италия',
        data: [37, 48, 43, 47, 49, 43, 58, 57, 62, 55, 68, 64, 62, 59, 52],
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
        text: 'Рейтинг скорострельности сборной',
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
    myChart7.data.datasets[1].data = [37, 48, 43, 47, 49, 43, 58, 57, 62, 55, 68, 64, 62, 59, 52];
    myChart7.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart7.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,];
    myChart7.data.datasets[1].label = 'Конго';
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
        label: 'Украина',
        data: [42.41, 57.7, 52.1, 49.6, 35.6, 60.7, 63.8, 60.7, 68.7, 51.3, 82.5, 60.7, 63, 97.8, 91],
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
        label: 'Италия',
        data: [97.4, 109.8, 74.2, 84.7, 67.2, 72, 41.8, 53.7, 60.2, 36, 51.8, 39.2, 60, 79.2, 38.1],
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
        text: 'Рейтинг скорости сборной',
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
    myChart9.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart9.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart9.data.datasets[1].label = 'Конго';
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
    labels: ['Скорость', 'Точн.', 'Скоростр.'],
    datasets: [
      {
        label: 'Украина',
        data: [62.5, 42.5, 51.2],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      },
      {
        label: 'Италия',
        data: [64.35, 46.63, 32.2],
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
        text: 'Сбалансированность результатов за все время',
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
    myChart10.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart10.data.datasets[1].data = [NaN, NaN, NaN];
    myChart10.data.datasets[1].label = 'Конго';
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
        label: 'Украина',
        data: [91, 43.3, 47.2],
        fill: 'start',
        backgroundColor: 'rgba(255, 0, 0, 0.1)',
        borderColor: 'rgba(255, 0, 0, 0.5)',
        pointBackgroundColor: 'rgba(255, 0, 0, 1)',
      },
      {
        label: 'Италия',
        data: [38.1, 39, 41.9],
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
    myChart11.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart11.data.datasets[1].data = [NaN, NaN, NaN];
    myChart11.data.datasets[1].label = 'Конго';
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
    labels: ['Сезон 05/06', 'Сезон 06/07', 'Сезон 07/08', 'Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Украина',
        data: [9, 9, 6, 4, 5, 6, 6, 4, 3, 5, 5, 3, 6, 7, 6, 7, 14, 10],
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
        label: 'Италия',
        data: [12, 14, 11, 11, 13, 8, 10, 8, 9, 7, 4, 5, 3, 4, 8, 9, 6, 5],
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
        text: 'Позиция в Кубке наций',
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
    myChart12.data.datasets[1].data = [12, 14, 11, 11, 13, 8, 10, 8, 9, 7, 4, 5, 3, 4, 8, 9, 6, 5];
    myChart12.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart12.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN,];
    myChart12.data.datasets[1].label = 'Конго';
  }

  myChart12.update();
});


window.addEventListener('resize', function () {
  myChart12.resize();
});





const skipped14 = (ctx, value) => ctx.p0.skip
  || ctx.p1.skip ? value : undefined;
const down14 = (ctx, value) => ctx.p0.parsed.y >
  ctx.p1.parsed.y ? value : undefined;

var ctx = document.getElementById('myChart14').getContext('2d');
var myChart14 = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Сезон 92/93', 'Сезон 93/94', 'Сезон 94/95', 'Сезон 95/96', 'Сезон 96/97', 'Сезон 97/98', 'Сезон 98/99', 'Сезон 99/00', 'Сезон 00/01', 'Сезон 01/02', 'Сезон 02/03', 'Сезон 03/04', 'Сезон 04/05', 'Сезон 05/06', 'Сезон 06/07', 'Сезон 07/08', 'Сезон 08/09', 'Сезон 09/10', 'Сезон 10/11', 'Сезон 11/12', 'Сезон 12/13', 'Сезон 13/14', 'Сезон 14/15', 'Сезон 15/16', 'Сезон 16/17', 'Сезон 17/18', 'Сезон 18/19', 'Сезон 19/20', 'Сезон 20/21', 'Сезон 21/22', 'Сезон 22/23'],
    datasets: [
      {
        label: 'Украина',
        data: [1, 2, 2, 7, 7, 4, 21, 17, 11, 8, 2, 1, 0, 2, 3, 3, 3, 1, 3, 3, 11, 9, 7, 6, 2, 6, 2, 2, 3, 0, 0],
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
        label: 'Италия',
        data: [4, 7, 1, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 4, 1, 0, 0, 0, 1, 1, 8, 13, 7, 9, 14, 9, 6, 5, 17],
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
        text: 'Количество медалей по сезонам',
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

const chartSelect14 = document.getElementById('chartSelect14');
chartSelect14.addEventListener('change', function () {
  const selectedValue = chartSelect14.value;

  if (selectedValue === 'dataset1') {
    myChart14.data.datasets[1].data = [4, 7, 1, 0, 0, 0, 0, 2, 1, 0, 1, 0, 0, 1, 0, 4, 1, 0, 0, 0, 1, 1, 8, 13, 7, 9, 14, 9, 6, 5, 17];
    myChart14.data.datasets[1].label = 'Италия';
  } else if (selectedValue === 'dataset2') {
    myChart14.data.datasets[1].data = [NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN, NaN];
    myChart14.data.datasets[1].label = 'Конго';
  }

  myChart14.update();
});


window.addEventListener('resize', function () {
  myChart14.resize();
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
    chartBlock55.classList.remove("tab-3");
  } else if (selectedValue55 === "chart-2") {
    chartBlock55.classList.remove("tab-2");
    chartBlock55.classList.remove("tab-3");
  }
  else if (selectedValue55 === "chart-20") {
    chartBlock55.classList.add("tab-3");
    chartBlock55.classList.remove("tab-2");
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









document.querySelectorAll('.v-semerenko-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.v-semerenko-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.vi-semerenko-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.vi-semerenko-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.dzhima-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.dzhima-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.petrenko-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.petrenko-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.a-merkushina-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.a-merkushina-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.bilosyuk-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.bilosyuk-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.blashko-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.blashko-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.abramova-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.abramova-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.pidruchnuy-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.pidruchnuy-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });

  document.querySelectorAll('.pryma-string img').forEach(img => {
    img.addEventListener('click', () => {
      let chosenStrings = document.querySelectorAll('.chosen-string');
      chosenStrings.forEach(chosenString => {
        chosenString.classList.remove('active');
      });
      let norwayStrings = document.querySelectorAll('.pryma-string');
      norwayStrings.forEach(norwayString => {
        norwayString.classList.add('active');
      });
    });
  });




    $(document).ready(function(){
      $('.sportsmen-profile__table-wrapper-text').click(function () {
        $(this).closest('.sportsmen-profile__table-wrapper').removeClass('lock');
      });
    });    


    $(document).ready(function(){
      $('.td-word-cup').click(function () {
        $(this).closest('.timeline-sportsmen-profile__body-target-table.ranking').toggleClass('plus');
      });
    });

    $(document).ready(function(){
      $('.td-age-1').click(function () {
        $(this).closest('.timeline-sportsmen-profile__body-target-table.ranking').toggleClass('plus-2');
      });
    });    

    $(document).ready(function(){
      $('.td-age-2').click(function () {
        $(this).closest('.timeline-sportsmen-profile__body-target-table.ranking').toggleClass('plus-3');
      });
    }); 