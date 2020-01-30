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
        console.log(new RegExp(`^${p}$`));
        console.log(s.match(new RegExp(p,'g')));
        // console.log(new RegExp(p),'g').test(s);
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
//上面的範例是true，沒問題
//但是下面的範例是結果必須是false，但尚未加上^ 與 &的時候會出true
//因為會找到mississi
//加上得^ 與 &的用意是
//就在pattern前後加上 ^ 與 $ 即可