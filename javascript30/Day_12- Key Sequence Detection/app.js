const secretCode = [38,38,40,40,37,37,39,39]
const input =[];
window.addEventListener('keyup',function(e){
    input.push(e.keyCode);
    // if(input.length > secretCode.length) {
    //     // input.shift();
    //     // input.splice(-7,1);
    // }

    //splice(a,b)  => 當a為負數的時候，從後往前數，與往後數不一樣，往後數第一個index為0，往前數第一個index為-1
    //在這裡我們要刪除陣列中第一個值，因為我們是要大於secretCode.length時做處理，在這裡secretCode.length為8，也就是當我們input.length為9(>8)的時候
    //刪除input陣列中第一個值，在這裡也就是splice(-9,1)，計算後就可以換算為下
    //splice(-secretCode-1,input.length-secretCode.length)
    input.splice(-secretCode.length-1,input.length - secretCode.length);

    //寫法2
    // while(input.length > secretCode.length) {
    //     input.shift();
    // }


    //check input === secretCode?
    if(input.toString().includes(secretCode)) {
        console.log('Super Punch!!')
        cornify_add();
    }
    // if(secretCode.toString() === input.toString()) {
    //     console.log('Super Punch!!')
    //     cornify_add();
    // }



    // console.log(input.toString());
    // console.log(secretCode.toString())
    // console.log(secretCode.toString());
    // console.log(secretCode.join(','));

})