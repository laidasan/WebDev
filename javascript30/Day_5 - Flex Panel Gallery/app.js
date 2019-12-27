(function () {
    const banner__wrap = document.querySelectorAll('.banner-wrap');
    const banner__btn = document.querySelectorAll('.banner-wrap .banner__btn');
    let changing = false;

    //初始化wrap與btn
    function init() {
        banner__wrap.forEach(function (wrap) {
            wrap.setAttribute('class', 'banner-wrap');
        })
        banner__btn.forEach(function (btn) {
            btn.setAttribute('style', '');
        })
    }

    function onClick(e) {
        const index = this.dataset.index;  //取得click的banner-wrap data-index
        const btns = Array.from(banner__wrap).reduce(function (btns, elem, elemIndex) {  //取得click的banner-wrap banner__btn
            if (elemIndex == index) {
                btns.push(elem.firstElementChild);
                btns.push(elem.lastElementChild);
            }
            return btns;
        }, [])

        init();  //初始化

        //動作
        let that = this;
        function active() {
            that.classList.remove('click');
            console.log('remove click')
            that.classList.add('afterclick');
            btns.forEach(function (btn, btn_index) {
                btn.style.setProperty('opacity', 1);
                switch (btn_index) {
                    case 0:
                        btn.style.setProperty('top', '90px');
                        break;
                    case 1:
                        btn.style.setProperty('bottom', '90px');
                        break;
                }
            })
            changing = false;
        }


        if (!changing) {
            setTimeout(function () {
                that.classList.add('click');
                console.log('add click')
            }, 300)
            setTimeout(active, 600);
        }
        changing = true;


        // banner__wrap.forEach(function(elem){
        //     if(elem.className.includes('click')){elem.classList.remove('click')}
        // })
        // banner__wrap.forEach(function(wrap) {
        //     wrap.setAttribute('class','banner-wrap');
        // })
        
        //主要動作
        // this.classList.add('click');
        // btns.forEach(function (btn, btn_index) {
        //     btn.style.setProperty('opacity', 1);
        //     switch (btn_index) {
        //         case 0:
        //             btn.style.setProperty('top', '90px');
        //             break;
        //         case 1:
        //             btn.style.setProperty('bottom', '90px');
        //             break;
        //     }
        // })

        // const first_btn = this.firstElementChild;
        // const last_btn = this.lastElementChild;
        // first_btn.classList.add('banner__btn--show');
        // first_btn.classList.add('banner__btn--firstPosition');
        // first_btn.style.setProperty('opacity',1);
        // first_btn.style.setProperty('top',90 +'px');

        
    }
    
    // toggle
    function toggleOpen() {
        this.classList.toggle('open')
    }
    function toggleActive(e) {
        console.log(e.propertyName);
        if(e.propertyName.includes('flex')) {
            this.classList.toggle('open--active')
        }
    }

    banner__wrap.forEach(function (wrap) {
        // wrap.addEventListener('click', onClick);
        wrap.addEventListener('click', toggleOpen);
        wrap.addEventListener('transitionend',toggleActive)
    })

})();