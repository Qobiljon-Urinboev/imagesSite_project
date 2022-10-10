const showMoreStyles = (trigger, styles) => {
    const cards = document.querySelectorAll(styles);
    const btn = document.querySelector(trigger);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadInUp');
    // });

    btn.addEventListener('click', function () {
        cards.forEach(card => {
            card.classList.remove('hidden-tg', 'hidden-md', 'hidden-sm', 'hidden-xs');
            card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
        });
        btn.remove();
    });

};

export default showMoreStyles;