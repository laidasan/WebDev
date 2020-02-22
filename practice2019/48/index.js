;(function() {
    const button = document.querySelector('.btn');
    let xhr = new XMLHttpRequest;
    xhr.open("Get","/upload?foo=bar&name=cat",true);
    xhr.onload = function() {
        if(xhr.status >=200 && xhr.status < 300) {
            console.log(JSON.parse(xhr.responseText));
        }else {
            console.log("response fail")
        }
    }
    xhr.send(null);
    console.log('get index.js');
    
})();