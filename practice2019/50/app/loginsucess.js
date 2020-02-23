;(function() {
    setTimeout(() => {
        let xhr = new XMLHttpRequest;
        xhr.open('Get','/loginCheck',true);
        xhr.onload = function() {
            console.log('Go');
        }
    },3000);
})();