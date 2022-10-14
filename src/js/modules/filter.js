const filter = () => {
    const menu = document.querySelector('.portfolio-menu');
    const items = menu.querySelectorAll('li');
    const btnAll = menu.querySelector('.all');
    const btnChef = menu.querySelector('.chef');
    const btnGirl = menu.querySelector('.girl');
    const btnGuy = menu.querySelector('.guy');
    const btnLovers = menu.querySelector('.lovers');
    const btnGrandmother = menu.querySelector('.grandmother');
    const btnGrandded = menu.querySelector('.granddad');
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

    const clickBtn = (btn, btnAll)=>{
        btn.addEventListener('click', () => {
            typeFilter(btnAll);
        });
    };
    clickBtn(btnAll, markAll);
    clickBtn(btnLovers, markLovers);
    clickBtn(btnGirl, markGirl);
    clickBtn(btnChef, markChef);
    clickBtn(btnGuy, markGuy);
    clickBtn(btnGrandmother);
    clickBtn(btnGrandded);
    

    

    menu.addEventListener('click', (e) => {
        let target = e.target;
        console.log(target);

        if (target && target.tagName == 'LI') {
            items.forEach(item => item.classList.remove('active'));
            target.classList.add('active');
        }
    });
};

export default filter;