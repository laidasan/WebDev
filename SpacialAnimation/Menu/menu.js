(function() {
    const menu = document.querySelector('.menuList');
    const items = document.querySelectorAll('.menuItem');



    menu.addEventListener('click',function(e) {
        if(e.target.matches('.menuList')) {
            menu.classList.toggle('rotate');
            items.forEach((item) => {
                item.classList.toggle('hidden');
                item.addEventListener('transitionend',function(e) {
                    this.classList.toggle('isvisible');
                })
            })
        }
    })

})()