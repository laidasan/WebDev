(function () {
    // const input_blur = document.querySelector('input[name="blur"]');
    // const dom = document.documentElement.style['--blur'];
    // const img_box = document.querySelector('.img-box');
    // const head_span_JS = document.querySelector('.heading-span');


    // 下面這三個都是一樣的，取得html
    // const html = document.querySelector(':root');
    const html = document.documentElement;
    // const html = document.querySelector('html');

    //取得controls底下的所有input
    const inputs = document.querySelectorAll('.controls input');


    //初始化
    //也可以直接再index.html裡面的input之value屬性設定預設初始值
    function init() {
        inputs.forEach(function(input){
            if(input.getAttribute('type') === 'range') {
                input.setAttribute('value',10);
            }
        });
    }

    init();
    function handlerUpdate() {
        const suffix = this.dataset.sizing || '';      //取得input屬性裡面的data-*
        
        //直接處理畫面
        // switch(this.name) {
        //     case 'spacing' :
        //         img_box.style.padding = this.value + suffix;
        //         break;
        //     case 'blur' :
        //         img_box.style.filter = `blur(${this.value}${suffix})`;
        //         break;
        //     case 'background' :
        //         console.log(this);
        //         img_box.style.background = this.value + suffix;
        //         head_span_JS.style.background = this.value + suffix;
        //         break;
        // }


        // document.querySelector(':root').style.setProperty(`--${this.name}`,this.value + suffix);
        document.documentElement.style.setProperty(`--${this.name}`,this.value + (this.name === 'background' ? '' : 'px'));
        // document.documentElement.style['--'+ this.name] = this.value + (this.name === 'background' ? '' : 'px' );  //不可行
        // document.documentElement.setAttribute('style',`--${this.name}:${this.value}${suffix}`);
        // img_box.style['pad'+'ding'] = 200 + 'px';    //測試再[]取特性時能不能夠用加號，可以。
    }
    inputs.forEach(function(input){
        input.addEventListener('change',handlerUpdate);
        input.addEventListener('mousemove',handlerUpdate);
    })
})();