const checkNumInputs = (Selector) => {
    const txtInputs = document.querySelectorAll(Selector);

    txtInputs.forEach(input => {
        input.addEventListener('keypress', function (e) {
            if (e.key.match(/[^а-яë 0-9]/ig)) {
               e.preventDedault(); 
            }
        });
    });
};

export default checkNumInputs;