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