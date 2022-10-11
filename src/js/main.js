import modal from './modules/modal';
import slider from './modules/slider';
import form from './modules/forms';
import mask from './modules/mask';
import checkNumInputs from './modules/checkTextInputs';
import showMoreStyles from './modules/showMoreStyles';
window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    modal();
    slider('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    slider('.main-slider-item', 'vertical');
    form();
    mask('[name="phone"]');
    checkNumInputs('[name="name"]');
    checkNumInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
});