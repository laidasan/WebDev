(function () {
    const imgs = document.querySelectorAll('img')
    let transition_ary = [0,0,0,0,0];
    // console.log(imgs);
    
    // const img = document.querySelector('img')
    // const p = document.querySelector('p')




    
    

    // immediate 先做還是後做

    // function debounce(func, wait = 20, immediate = false) {
    //     var timeout;
    //     // let dereturn = function() {
    //     //     let context = this;
    //     //     let args = arguments;
    //     //     let callNow = immediate && !timeout;
    //     //     clearTimeout(timeout);
    //     //     timeout = setTimeout(function(){
    //     //         timeout = null;
    //     //         if(!immediate) func.apply(context,args);
    //     //     },wait);
    //     //     if(callNow) func.apply(context,args);
    //     // }
    //     // return dereturn;
    //     return function () {
    //         var context = this, args = arguments;
    //         var later = function () {
    //             timeout = null;
    //             if (!immediate) func.apply(context, args);
    //         };
    //         var callNow = immediate && !timeout;
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //         if (callNow) func.apply(context, args);
    //     };
    // }

    // function de(func,delay) {
    //     let timeout;
    //     return function() {
    //         let context = this;
    //         let args = arguments;
    //         if(timeout){clearTimeout(timeout);}
    //         timeout = setTimeout(function(){
    //             func.apply(context,args);
    //         },delay)
    //     }
    // }

    // window.addEventListener('scroll',debounce((e)=>{
    //     console.log('tiem')
    // }))




    // window.addEventListener('scroll',de((e) => {
    //     // console.log(transition_ary[0] && true ? 'true': 'false');
    //     console.log(window.scrollY);
    //     if(window.scrollY > 360 &&　transition_ary[0]) {
    //         console.log('de')
    //         imgs[0].style.setProperty('opacity','1');
    //         imgs[0].style.setProperty('transform','translateX(0)');
    //     }
    //     if(window.scrollY > 1100 && transition_ary[1]) {
    //         imgs[1].style.setProperty('opacity','1');
    //         imgs[1].style.setProperty('transform','translateX(0)');
    //     }
    //     if(window.scrollY > 2200 && (transition_ary[2] || transition_ary[3]) ){
            
    //         imgs[2].style.setProperty('opacity','1');
    //         imgs[2].style.setProperty('transform','translateX(0)');
    //         imgs[3].style.setProperty('opacity','1');
    //         imgs[3].style.setProperty('transform','translateX(0)');
    //     }
    //     if(window.scrollY > 3000 && transition_ary[4]) {
    //         imgs[4].style.setProperty('opacity','1');
    //         imgs[4].style.setProperty('transform','translateX(0)');
    //     }

    // },20))


    function debounce(func,delay) {
        let timeout;
        return function() {
            let context = this;
            let args = arguments;
            clearTimeout(timeout)
            timeout = setTimeout(() => {
                func.apply(context,args);
            }, delay);
        }
    }

    function handlerImg() {
        let windowTop = window.scrollY;
        let windowBottom = window.scrollY + window.innerHeight;
        console.log('active')
        
        imgs.forEach(function(img) {
            let imgmiddle = img.offsetTop + (img.clientHeight / 2)

            if(imgmiddle < windowBottom && imgmiddle > windowTop) {
                img.classList.add('active');
            }else {
                img.classList.remove('active');
            }
        })
    }

    function throttle(func,looptime) {
        let timeout = null;
        let loopttime = looptime || 100;
        return function() {
            let context = this;
            let args = arguments;
            if(!timeout){
                timeout = setTimeout(function(){
                    timeout = null;
                    func.apply(context,args)
                },looptime)
            }
        }
    }
    // window.addEventListener('scroll',(e) => {
    //     let windowTop = window.scrollY;
    //     let windowBottom = window.scrollY + innerHeight;

    //     imgs.forEach((img) => {
    //         let imgmiddle = img.offsetTop + (img.height / 2)
    //         // console.log(img.offsetTop < windowBottom)
    //         // if(img.offsetTop < windowBottom) {
    //         //     img.classList.add('active')
    //         // }
    //         if(imgmiddle < windowBottom && imgmiddle > windowTop){
    //             img.classList.add('active');
    //         }else {
    //             img.classList.remove('active');
    //         }
    //     })
    // })
    // window.addEventListener('scroll',debounce(handlerImg,30))
    window.addEventListener('scroll',throttle(handlerImg,100))

    // imgs.forEach(function(img,index){

    //     function isalready(index){
    //         return function() {
    //             transition_ary[index] = 1;
    //         }
    //     }

    //     img.addEventListener('transitionend',isalready(index));
    // })
})();