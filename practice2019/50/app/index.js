;(function () {
    // const loginButton = document.querySelector('.btn');
    let xhr = new XMLHttpRequest;
    xhr.open('Get','/cookie',true);
    xhr.onload = function() {
        if(xhr.status >= 200 && xhr.status <=300) {
            console.log(xhr.responseText);
        }else {
            console.log('fail');
        }
    }
    // xhr.send(null);


    function getUser() {
        let xhr = new XMLHttpRequest;
        xhr.open('Get','/getUser',true);
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status <= 300) {
                const userData = JSON.parse(xhr.responseText);
                console.log(userData);
                alert(`Hi ${userData.name}!   you are ${userData.visitTime} come here.`);
            }else {
                console.log('need login');
            }
        }
        xhr.send(null);
    }
    getUser();
})();