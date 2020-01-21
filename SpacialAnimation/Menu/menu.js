(function () {
    // const menu = document.querySelector('.menuList');
    const menu = document.querySelector('.Menu');
    const title = document.querySelector('.menuTitle')
    const items = document.querySelectorAll('.menuItem');
    const links = menu.querySelectorAll('.menuLink');


    //rotate menu
    //算出平均角度
    let itemDeg = 360 / items.length;

    // function handleItem(e) {
    //     if(e.target.matches('.menuTitle')){
    //         if (menu.matches('.Menu.open')) {
    //             menu.classList.toggle('open');
    //             console.log('close');
    //             items.forEach(function (item, index) {
    //                 item.style.setProperty('transform', `rotate(0)`);
    //                 //menu close的時候把menuitem收回來一點，距離不會太遠的感覺
    //                 links[index].style.setProperty('top','-90px');
    //             })
    //         } else {
    //             console.log('open')
    //             menu.classList.toggle('open');
    
    //             //計算每個li的旋轉角度，第一個 index * 60 => 0 * 60
    //             //第二個 index * 60 => 1 *60 ，依此類推
    //             items.forEach(function (item, index) {
    //                 item.style.setProperty('transform', `rotate(${index * itemDeg}deg)`);
    //                 links[index].style.setProperty('top','-180px')
    //             })
    //         }
    //     }
    // }

    //heartMenu
    // items.forEach(function (item,index) {
    //     console.log('imtes.forEach');
    //     item.style.setProperty('transition',`all .6s ${0.6 * index}s`);
    // })
    function handleItem(e) {
        if(e.target.matches('.menuTitle')){
            if (menu.matches('.Menu.open')) {
                menu.classList.toggle('open');
                console.log('close');
                items.forEach(function (item,index) {
                    console.log('imtes.forEach');
                    item.style.setProperty('transition',`all .3s ${0.3 * (items.length - index)}s`);
                    item.classList.toggle(`circle${index + 1}`);
                })
                items.forEach(function (item, index) {
                    item.style.setProperty('transform', `rotate(0)`);
                    //menu close的時候把menuitem收回來一點，距離不會太遠的感覺
                    // links[index].style.setProperty('top','-90px');
                })
            } else {
                console.log('open')
                menu.classList.toggle('open');
                items.forEach(function (item,index) {
                    console.log('imtes.forEach');
                    item.style.setProperty('transition',`all .3s ${0.3 * index}s`);
                    item.classList.toggle(`circle${index + 1}`);
                })
                //計算每個li的旋轉角度，第一個 index * 60 => 0 * 60
                //第二個 index * 60 => 1 *60 ，依此類推
                items.forEach(function (item, index) {
                    item.style.setProperty('transform', `rotate(-${index * itemDeg}deg)`);
                    // links[index].style.setProperty('top','-180px')
                })
            }
        }
    }

    // items.forEach(function (item,index) {
    //     console.log('imtes.forEach');
    //     item.style.setProperty('transition',`all .3s ${0.3 * index}s`);
    // })

    // items.forEach(function (item, index) {
    //     item.style.setProperty('transform', `rotate(-${index * itemDeg}deg)`);
    //     // links[index].style.setProperty('top','-180px')
    // })
    // links.forEach((link) => {
    //     link.addEventListener('transitionend',(e) => {
    //         console.log(color)
    //         link.classList.toggle('u-color-blue');
    //     })
    // })

    menu.addEventListener('click', handleItem)





    //heartMenu


})()