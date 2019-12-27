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
    
    //效果二
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
        //效果一
        // wrap.addEventListener('click', onClick);

        //效果二
        wrap.addEventListener('click', toggleOpen);
        wrap.addEventListener('transitionend',toggleActive)
    })

    // function con2() {
    //     console.log(4)
    //     console.log(5);
    // }

    // function con(con2) {
    //     console.log(1)
    //     // console.log(2)
    //     // console.log(3)
    //     setTimeout(() => {
    //         console.log(2);
    //         setTimeout(() => {
    //             console.log(3)   
    //             if(typeof con2 === 'function'){
    //                 setTimeout(() => {
    //                     con2();
    //                 })          
    //             }   
    //         }, 0);
    //     },0)
    // }


   


    //以下與本練習無關
    //練習了使用settimeout了解同步與非同步是怎麼一回是，跟怎麼用callback來把非同步做成同步(順序性)
    //也練習使用了Promise
    // con(con2);

    // let p1 = new Promise(function(resolve,reject){
    //     setTimeout(() => {
    //         console.log(1);
    //         resolve('ok')
    //     }, 3000);
    // })

    // p1.then(function(res){
    //     alert(`resolve${res}`);
    // })

    // let p2 = new Promise(function(resolve,reject){
    //     setTimeout(function(){
    //         console.log(2);
    //         reject('failed');
    //     },3000)
    // })

    // p2.then(function(res){
    //     alert(`resolve${res}`)
    // }).catch(function(err){
    //     alert(`err${err}`)
    // })


    //
    // function task1(){
    //     return new Promise(function(resolve,reject){
    //         setTimeout(() => {
    //             console.log(1);
    //             resolve('resolve1')
    //         }, 1000);
    //     })
    // }
    
    // function task2(){
    //     return new Promise(function(resolve,reject){
    //         setTimeout(() => {
    //             console.log(2);
    //             reject('reject2')
    //         }, 1000);
    //     })
    // }
    
    // function task3(){
    //     return new Promise(function(resolve,reject){
    //         setTimeout(() => {
    //             console.log(3);
    //             resolve('resolve3')
    //         }, 1000);
    //     })
    // }

    // task1().then(res => {
    //     console.log(`result=>${res}`)
    //     return task2();
    // }).catch(err => {
    //     console.log(`err=>${err}`)
    //     return task2();
    // }).then(res => {
    //     console.log(`result=>${res}`)
    //     return task3();
    // }).catch(err => {
    //     console.log(`err=>${err}`)
    //     return task3();
    // }).then(res => {
    //     console.log(`result=>${res}`);
    //     done();
    // }).catch(err => {
    //     console.log(`result=>${err}`);
    //     done(); 
    // });

    // function done() {
    //     alert('done');
    // }
})();
