import { SCROLL_TO } from '../utils';
const btn = $('.js-footer-trigger');

btn.on('click', () => {
  SCROLL_TO(0);
});
