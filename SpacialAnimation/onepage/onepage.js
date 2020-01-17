; (function () {
    const container = document.querySelector('.container');
    const imgboxs = document.querySelectorAll('.imgbox');
    const pageListItems = document.querySelectorAll('.page__item');
    let pageNow = 1;
    let isScroll = false;
    let timeout;
    function scrollPage(e) {
        if (!isScroll) {
            //WheelDetla 判斷滾輪往上往下
            // > 0 往上
            if (e.wheelDelta > 0) {
                if (pageNow > 1) {
                    pageNow--;
                    isScroll = true;
                }
                container.style.setProperty('transform', `translateY(-${(pageNow - 1) * 100}vh)`);
                resetLoopPage();
            } else {
                if (pageNow < imgboxs.length) {
                    pageNow++;
                    isScroll = true;
                }
                container.style.setProperty('transform', `translateY(-${(pageNow - 1) * 100}vh)`);
                resetLoopPage();
            }
        }
    }

    function resetLoopPage() {
        if (timeout) { clearInterval(timeout) }
        timeout = setInterval(function () {
            if (pageNow >= imgboxs.length) {
                pageNow = 1;
            } else {
                pageNow++;
            }
            container.style.setProperty('transform', `translateY(-${(pageNow - 1) * 100}vh)`);
            isScroll = true;
        }, 6000)
    }


    function changeListitemColor(e) {
        pageListItems.forEach(function (item) {
            item.classList.remove('pagenow');
        })
        pageListItems[pageNow - 1].classList.add('pagenow');
        isScroll = false;
    }


    window.onload = function () {
        container.style.setProperty('transform','translateY(0)');
        window.scrollY = 0;
        window.addEventListener('mousewheel', scrollPage);
        container.addEventListener('transitionend', changeListitemColor);
        pageListItems.forEach(function (item, index) {
            item.addEventListener('click', function (e) {
                isScroll = true;
                pageLast = pageNow;
                pageNow = index + 1;
                container.style.setProperty('transform', `translateY(-${index * 100}vh)`);
                resetLoopPage();
            })
        })
        
        timeout = setInterval(function () {
            if (pageNow >= imgboxs.length) {
                pageNow = 1;
            } else {
                pageNow++;
            }
            container.style.setProperty('transform', `translateY(-${(pageNow - 1) * 100}vh)`);
            isScroll = true;
        }, 6000)
    }
})();