(function () {
    const buy_list = document.querySelector('.buy__list');
    const buy_items = document.querySelectorAll('.buy__checkbox');
    let lastcheck;
    let thischeck;
    
    buy_items.forEach((elem, index) => {
        elem.setAttribute('data-index', index);
    })
    
    function buyHolder(e) {
        let target = e.target
        if (target.name === 'buyListCheckbox') {
            // hode住shift且取消勾勾的時候
            if (e.shiftKey && !target.checked) {
                thischeck = lastcheck;
                return;
            }
            lastcheck = thischeck || target;
            thischeck = target;
            //hold住shift而且是打勾勾的時候
            if (e.shiftKey && target.checked) {
                //將string轉換成數字，不然再比較會出問題，變成"字串的比較(大於小於等等)
                let thisindex = Number(thischeck.dataset.index);
                let lastindex = Number(lastcheck.dataset.index);
                let maxIndex = thisindex > lastindex ? thisindex : lastindex;
                let minIndex = thisindex < lastindex ? thisindex : lastindex;
                // let maxIndex = Math.max(thischeck.dataset.index,lastcheck.dataset.index);  //也可以用這個方法
                for (let i = minIndex; i <= maxIndex; i++) {
                    buy_items[i].checked = true;
                }
            }
        }
    }
    buy_list.addEventListener('click', buyHolder)
})();