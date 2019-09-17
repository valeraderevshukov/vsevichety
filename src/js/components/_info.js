import { OPEN, BODY } from '../constants';
const info = $('.js-info');


info.each((i,el) => {
  const infoClose = $('.js-info-close', $(el));
  const trigger = $('.js-info-trigger', $(el));
  trigger.on('click', () => {
  	info.removeClass(OPEN);
    (!$(el).hasClass(OPEN)) 
    	? $(el).addClass(OPEN)
    	: $(el).removeClass(OPEN);
  });
  infoClose.on('click', () => {
    $(el).removeClass(OPEN);
  });
});

BODY.on('click', e => {
  if ( !$(e.target).closest('.js-info').length ) {
    info.removeClass(OPEN);
  }
});
