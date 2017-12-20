$('.tab').on('click', function() {
  $('.tab').removeClass('active');
  $('.content-container').removeClass('active-tab')
  $(this).addClass('active');
  $('.tab span').text('+');
  $(this).find('span').text('-');
  $(this).next().addClass('active-tab');
})

$('.header-link-four').on('click', function() {
  $('.links-search-container').toggleClass('drop-down');
  $('nav').toggleClass('button-down')
})
