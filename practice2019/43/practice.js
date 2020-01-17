function stars(n) {
    let ary = [];
    let str = '';
    if (typeof Number(n) === 'number' && !(Number(n) !== Number(n))) {
        for (let i = 0; i < n; i++) {
            str += '*';
            ary.push(str);
        }
    }
    return ary;
}

function toUpper(str) {
    let upper = [];
    if (typeof str === 'string') {
        for (let i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) <= 122 && str.charCodeAt(i) >= 97) {
                upper.push(String.fromCharCode(str.charCodeAt(i) - 32));
            } else {
                upper.push(str[i]);
            }
        }
    }
    return upper.join('');
}

function isPrime(n) {
    if (typeof Number(n) === 'number' && !(Number(n) !== Number(n)) && n > 0) {
        let i = 1;
        let count = 0;
        if (n == 1) {
            return false;
        } else {
            while (i <= n && count <= 2) {
                if (n % i === 0) { count++ };
                i++;
            }
        }
        // return count > 2 ? false : true;
        return count <= 2;
    } else {
        return -1;
    }
}

function isPalindrome(str) {
    let backstr = str.split('')
        .reduce(function (ary, s) {
            ary.unshift(s);
            return ary;
        }, []);
    return backstr.join('') === str;
}

function addNumber(str1,str2) {
    let longer = str1.length > str2.length ? str1.split('').reverse() : str2.split('').reverse();
    let shorter = str1.length <= str2.length ? str1.split('').reverse() : str2.split('').reverse();
    let count = 0;
    let result = longer.reduce(function (ary, s, index) {
        for (let i = 0; i < (longer.length - shorter.length); i++) {
            shorter.push('0');
        }
        let addresult = parseFloat(s) + parseFloat(shorter[index]) + count;
        count = 0;
        if (parseFloat(addresult) >= 10) {
            count++;
            addresult = addresult - 10;
        }

        ary.push(addresult);

        return ary;
    }, []);
    if (count !== 0) {
        result.push(1);
    }
    console.log(result);
    return result.reverse().join('');
}
// console.log(addNumber('12123123123123123132910','100'));
// console.log(isPalindrome('sts'));
// console.log(toUpper('abc0125'));
// console.log(stars(5));
// console.log(isPrime(31));