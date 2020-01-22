;(function () {
    let xhr = new XMLHttpRequest;
    xhr.open("GET","http://localhost:3000/users");
    
    function getData() {
        xhr.send(null);
        return new Promise((resolve,reject) => {
            xhr.onload = function () {
                if(xhr.status >= 200 && xhr.status <=300) {
                    resolve(xhr.responseText);
                }else {
                    reject(xhr.status);
                }
            }
        })
    }

    function taskOne(jsonObj) {
        
    }
    getData().then((res) => {
        console.log('success\n',res);
    }).catch((err) => {
        console.log(err);
    })
    // xhr.onload = function () {
    //     if(xhr.status >= 200 && xhr.status <=300) {
            
    //         console.log(xhr.status);
    //         console.log(JSON.parse(xhr.responseText));
            
    //     }else {
    //         console.log("get data fail");
    //     }
    // }

})();