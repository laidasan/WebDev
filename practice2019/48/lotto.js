; (function() {
    const lottoForm = document.querySelector('.lotto-form');
    console.log(lottoForm)
    let xhr = new XMLHttpRequest;
    xhr.open('Get','/lotto?name=Joe&age=40',true);
    xhr.onload = function () {
        if(xhr.status >= 200 && xhr.status <= 300) {
            console.log(xhr.responseText);
        }else {
            console.log('get data fail');
        }
    }
    // xhr.send(null);
    function lottoFormSubmit(e) {
        e.preventDefault();
        const xhr = new XMLHttpRequest;
        const name = e.currentTarget.querySelector('input[name="name"]').value;
        const tel = e.currentTarget.querySelector('input[type="tel"]').value;
        // const data = `name=${name}&tel=${tel}`;
        const data = JSON.stringify({name:name,tel:tel});
        xhr.open('Post',`/lotto`,true);
        // xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
        xhr.setRequestHeader('Content-type','application/json');
        xhr.onload = function() {
            if(xhr.status >= 200 && xhr.status <= 300) {
                console.log(JSON.parse(xhr.responseText));
                alert('參加成功');
            } else {
                console.log('fail');
                alert('參加失敗')
            }
        }
        xhr.send(data);
        lottoForm.reset();
    }

    function getlottoUsers() {
        let xhr = new XMLHttpRequest;
        xhr.open('Get','/getlotto',true);
        xhr.onload = function () {
            if(xhr.status >= 200 && xhr.status <= 300) {
                console.log(JSON.parse(xhr.responseText)[0]);
            } else {
                console.log('get Data fail');
            }
        }
        xhr.send(null);
    }
    getlottoUsers();
    lottoForm.addEventListener('submit',lottoFormSubmit);
}());

