;(function() {
    let s = 'mississippi';
    let p = 'mis*is*p*.';
    // let s = 'aa';
    // let p = 'a';

    function regExpMatch(s,p) {
        // let stringArr = p.split('');
        // let needPattern = stringArr.find((ch) => ch === '*' || ch === '.');
        // let pattern = needPattern ? new RegExp(`^${p}$`,'g') : p;
        // return needPattern ? pattern.test(s) : s === pattern;


        return new RegExp(`^${p}$`,'g').test(s);
    }

    console.log(regExpMatch(s,p));
})()

//true
// "mississippi"
// "mis*is*ip*."


//false
// "mississippi"
// "mis*is*p*."

//上面這兩個範例，差別在patter (一個有i，一個沒有)
//意旨要傳進來的string中，沒有被指定 * or . 的
//至少要出現一次
//就在pattern前後加上 ^ 與 $ 即可