import { OPEN, ACTIVE, BODY, OVERFLOW_HIDDEN } from './../constants';

(() => {
  const controls = $('[data-modal-control]');
  const modals = $('[data-modal]');
  controls.each((i, control) => {
    control = $(control);
    const modal = modals.filter(
      `[data-modal="${control.data('modal-control')}"]`
    );

    control.on('click', e => {
      e.preventDefault();
      if (control.is('[data-services-text]')) {
        modal.find('[data-text-container]').text(control.text());
      }
      if (control.is('[data-modal-content]')) {
        const modalContent = control.data('modal-content');
        const modalInner = modal.find('.feedback-modal');
        modalInner.html(modalContent);
      }
      const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
      const body = document.body;
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}`;
      
      modals.removeClass(OPEN);
      modal.addClass(OPEN);
      controls.removeClass(ACTIVE);
      control.addClass(ACTIVE);
      $('html').addClass(OVERFLOW_HIDDEN);
    });
  });

  modals.each((i, modal) => {
    modal = $(modal);
    const inner = modal.find('[data-modal-container]');
    const close = modal.find('[data-modal-close]');
    const hide = () => {
      modal.removeClass(OPEN);
      $('html').removeClass(OVERFLOW_HIDDEN);
      const body = document.body;
      const scrollY = body.style.top;
      body.style.position = '';
      body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    };

    BODY.on('click', e => {
      if (
        !$(e.target).closest(inner).length &&
        modal.hasClass(OPEN) &&
        !$(e.target).closest(controls).length
      ) {
        hide();
        controls.removeClass(ACTIVE);
      }
    });

    close.on('click', e => {
      e.preventDefault();
      hide();
    });
  });
})();
// ----------------------  HTML EXEMPLE ---------------------
// <a href="#" data-modal-control="modalname"></a> ---- trigger
// <div class="modal" data-modal="modalname"> ------ modal window
//     <div class="modal__container" data-modal-container>
//       <div class="modal__inner">
//         <button class="modal__close" data-modal-close>
//           {{mixins.icon('close')}}
//         </button>

//       </div>
//     </div>
//   </div>
// const serviceItems = $('[data-services-text]');
// serviceItems.on('click', (i, serviceItem) => {
//   let container = serviceItem.find('[data-text-container]');
//   container.text(serviceItem.data('services-text'));
// });
