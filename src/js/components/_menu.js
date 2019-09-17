import { OPEN, BODY } from '../constants';

const header = $('.js-header');
const btn = $('.js-btn-menu');

btn.on('click', function() {
  (!header.hasClass(OPEN)) 
    ? header.addClass(OPEN)
    : header.removeClass(OPEN);
});

BODY.on('click', e => {
  if ($(e.target).closest('.js-btn-menu, .js-header-bottom').length) return;
  header.removeClass(OPEN);
});
