;(function () {
    // let xhr = new XMLHttpRequest;
    // xhr.open('Get','/start?foo=bar',true);
    // xhr.onload = function () {
    //     if(xhr.status >= 200 && xhr.status <= 300) {
    //         console.log(JSON.parse(this.responseText));
    //     } else {
    //         console.log('fail');
    //     }
    // }
    // xhr.send(null);

    let xhr = new XMLHttpRequest;
    xhr.open('Post','/start',true);
    xhr.onload = function () {
        if(xhr.status >= 200 && xhr.status <= 300) {
            console.log(JSON.parse(xhr.responseText));
        }
    }
    xhr.setRequestHeader('Content-type','application/json');
    const data = JSON.stringify([{name:'joe',age:40}]);
    xhr.send(data);



})();