const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll('li');
    const btnAll = menu.querySelector('.all');
    const btnChef = menu.querySelector('.chef');
    const btnGirl = menu.querySelector('.girl');
    const btnGuy = menu.querySelector('.guy');
    const btnLovers = menu.querySelector('.lovers');
    const btnGrandmother = menu.querySelector('.grandmother');
    const btnGrandded = menu.querySelector('.grandded');
    const wrapper = document.querySelector('.portfolio-wrapper');
    const markAll = wrapper.querySelectorAll('.all');
    const markGirl = wrapper.querySelectorAll('.girl');
    const markLovers = wrapper.querySelectorAll('.lovers');
    const markChef = wrapper.querySelectorAll('.chef');
    const markGuy = wrapper.querySelectorAll('.guy');
    const no = document.querySelector('.portfolio-no');
    console.log(menu);
    const typeFilter = (markType) => {
        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });
        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };
    btnAll.addEventListener('click', () => {
        typeFilter(markAll);
    });

    btnLovers.addEventListener('click', () => {
        typeFilter(markLovers);
    });
    btnGirl.addEventListener('click', () => {
        typeFilter(markGirl);
    });
    btnChef.addEventListener('click', () => {
        typeFilter(markChef);
    });
    btnGuy.addEventListener('click', () => {
        typeFilter(markGuy);
    });
    btnGrandmother.addEventListener('click', () => {
        typeFilter();
    });
    btnGrandded.addEventListener('click', () => {
        typeFilter();
    });

    menu.addEventListener('click', (e) => {
        console.log('menuu');
        let target = e.target;
        console.log(target);

        if (target) {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;