(function () {
    const cards = document.querySelectorAll('.card');
    const nav_btn = document.querySelectorAll('.nav__btn');
    const nav = document.querySelector('.nav');

    let thisID = 0;
    let lastID = 0;
    let goleft;

    function handleCard(e) {
        const btn = e.target;
        e.preventDefault()
        if(btn.className.includes('nav__btn')) {
            nav_btn.forEach((btn) => {
                btn.classList.remove('nav__btn--active')
            })
            btn.classList.add('nav__btn--active');
            
            lastID = thisID;
            thisID = btn.dataset.index;
            goleft = thisID > lastID;
            let timing = cards.length * 120;
            if(goleft) {
                for(let i = lastID;i < thisID;i++) {
                    setTimeout(() => {
                        console.log('hidden')
                        cards[i].classList.toggle('hidden');  
                    },i*120);
                }
            }else {
                for(let i = lastID;i > thisID;i--) {
                    setTimeout(() => {
                        console.log('hidden')
                        cards[i-1].classList.toggle('hidden');    
                    },timing - (i*120));
                }
            }
        }
    }
    nav.addEventListener('click',handleCard)
})()