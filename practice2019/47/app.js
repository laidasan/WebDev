; (function () {
    const whoImgBox = document.querySelectorAll('.who__img-box');
    const btnProcess = document.querySelectorAll('.btn--howProcess');
    const slidebtns = document.querySelectorAll('.result__detail__direct__btn');
    const slideNavCircles = document.querySelectorAll('.result__detail__nav__circle');
    const slidenav = document.querySelector('.result__detail__nav');
    const resultDatas = document.querySelectorAll('.result__data');
    const mapTowns = document.querySelectorAll('.result__map__town');
    let lastOpen = null;
    let thisOpen = null;
    let slidelast = 0;
    let slidethis = 0;
    resultDatas.forEach((data) => {
        data.style.setProperty('transform', 'translateX(0%)');
    })

    // const slide = {
    //     slidelast : null,
    //     slidethis : null,
    //     slidenavListener : function(e) {

    //     }
    // }
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



})();