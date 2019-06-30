/*    原來的樣子    */
function calNum(num) {
    this.num = num;


    this.plus = function(num){
        this.num += num;
    }

    this.sub = function(num) {
        this.num -= num;
    }
}

let obj = new calNum(100);
obj.plus(200);
obj.sub(30);
console.log(obj.num);


/*    combo    */
// function calNum(num) {
//     this.num = num;

//     this.plus = function(num) {
//         this.num += num;
//         return this;
//     }
    
//     this.sub = function(num){
//         this.num -= num;
//         return this;
//     }

// }



// let obj = new calNum(100);
// obj.plus(2000).sub(300);
// console.log(obj.num);