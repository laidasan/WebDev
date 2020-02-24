; (function () {
    const whoImgBox = document.querySelectorAll('.who__img-box');
    const btnProcess = document.querySelectorAll('.btn--howProcess');
    const slidebtns = document.querySelectorAll('.result__detail__direct__btn');
    const slideNavCircles = document.querySelectorAll('.result__detail__nav__circle');
    const slidenav = document.querySelector('.result__detail__nav');
    const resultDatas = document.querySelectorAll('.result__data');
    const mapTowns = document.querySelectorAll('.result__map__town');
    const resultCreateContainer = document.querySelector('.result-container--create')
    const resultCreates = document.querySelectorAll('.result__create');
    const newsImgs = document.querySelectorAll('.news__img');


    let lastOpen = null;
    let thisOpen = null;
    let slidelast = 0;
    let slidethis = 0;
    resultDatas.forEach((data) => {
        data.style.setProperty('transform', 'translateX(0%)');
    })

    function openimg(e) {
        lastOpen = thisOpen;
        thisOpen = e.currentTarget;
        if (lastOpen && lastOpen !== thisOpen) { lastOpen.classList.remove('open') }
        e.currentTarget.classList.toggle('open');
    }


    function chooseProcess(e) {
        e.preventDefault();
        btnProcess.forEach((btn) => {
            btn.classList.remove('choose');
        })
        e.currentTarget.classList.add('choose');
    }

    function resultSlide() {
        resultDatas.forEach((data) => {
            data.style.setProperty('transform', `translateX(-${slidethis * 100}%)`);
        })
        slideNavCircles.forEach((circle) => {
            circle.classList.remove('choose');
        })
        slideNavCircles[slidethis].classList.add('choose');

        mapTowns[slidelast].classList.toggle('choose');
        mapTowns[slidethis].classList.toggle('choose');
    }

    function slideBtnHandler(e) {
        e.preventDefault();
        const target = e.currentTarget;
        if ((target.matches('.detail__prev') && slidethis === 0) || (target.matches('.detail__next') && slidethis === resultDatas.length - 1)) { return };

        if (target.matches('.detail__prev')) {
            slidelast = slidethis;
            slidethis -= 1;
            console.log('slide prev');
            resultSlide();
        } else {
            slidelast = slidethis;
            slidethis += 1;
            console.log('slide next');
            resultSlide();
        }
    }

    function throttle(fn,cycle) {
        let timer;
        return function() {
            let context = this;
            let args = arguments;
            if(!timer) {
                timer = setTimeout(() => {
                    fn.apply(context,args);
                    timer = null;
                },cycle)
            }
        }
    }

    function resultCreateShow() {
        const windowBottom = window.scrollY + window.innerHeight;
        const createContainerTop = resultCreateContainer.offsetTop;
        if (windowBottom > createContainerTop && !resultCreates[0].matches('.show')) {
            console.log('show resultCreate');
            resultCreates.forEach((item) => {
                item.classList.add('show');
            })
        }
    }
    
    function resultCreateHandler(e,index,item) {
        let speed = 990;
        let timeouts;
        if(index === 0 && !timeouts) {
            return function () {
                setCreateTimeout();
            }(e,index,item);
        }else if (index === 1 && !timeouts) {
            return function () {
                setCreateTimeout();
            }(e,index,item);
        }
        
        function setCreateTimeout() {
            let resultCreateData = item.querySelector('.result__create__data'); 
            let content = parseInt(resultCreateData.textContent);
            let stop,step,result;
            switch (index) {
                case 0 :
                    stop = 8;
                    step = 1;
                    result = 8;
                break;
                case 1 :
                    stop = 38326;
                    step = 48;
                    result = 38326;
                break;
            }
            timeouts = setInterval(() => {
                content += step; 
                resultCreateData.textContent = content;
                if(content >= stop){
                    clearInterval(timeouts);
                    resultCreateData.textContent = result;
                }
            },1000 - speed * index);
        }
    }

    newsImgs.forEach((ele,index) => {
        ele.style.setProperty('background',`url('./img/news_${index + 1}.jpg') no-repeat center center / cover`)
    })

    whoImgBox.forEach((imgBox) => {
        imgBox.addEventListener('click', openimg);
    })
    btnProcess.forEach((btn) => {
        btn.addEventListener('click', chooseProcess);
    })
    slidebtns.forEach((btn) => {
        btn.addEventListener('click', slideBtnHandler);
    })
    slideNavCircles.forEach((circle, index) => {
        circle.addEventListener('click', function (e) {
            e.preventDefault();
            slidelast = slidethis;
            slidethis = index;
            resultSlide();
        })
        // handler = slideNavHandler(index);
        // circle.addEventListener('click',handler);
    })
    mapTowns.forEach((town,index) => {
        town.addEventListener('click',(e) => {
            slidelast = slidethis; 
            slidethis = index;
            resultSlide();
        })
    })


    window.addEventListener('scroll',throttle(resultCreateShow,500));
    resultCreates.forEach((item,index) => {
        item.addEventListener('transitionend',(e) => {
            resultCreateHandler(e,index,item);
        });
    })
})();