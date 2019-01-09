//  Scroll
import $ from 'jquery';

const links = $('a[href^="#"]');
links.on('click', function (event) {
  event.preventDefault();
  $('html, body').stop().animate({
    scrollTop: $($(this).attr('href')).offset().top - 130
  }, 400);
  burger.removeClass('-js-type-active');
  navigation.removeClass('-js-type-visible');
});
