(function () {
    const addInput = document.querySelector('.additem');
    const notFinishedContainer = document.querySelector('.notyet');
    const finishedContainer = document.querySelector('.finish');
    const notFinishedList = document.querySelector('.notyet .list');
    const finishedList = document.querySelector('.finish .list')
    const value = localStorage.getItem('value');

    //產生一個新的listitem
    function ListItem() {
        const item = document.createElement('li');
        item.className = 'list__item';

        const operation_container = document.createElement('div')
        const newEdit = document.createElement('i')
        const newDelete = document.createElement('i');
        const newFinished = document.createElement('i');


        operation_container.appendChild(newEdit);
        operation_container.appendChild(newDelete);
        operation_container.appendChild(newFinished);
        item.appendChild(operation_container);

        operation_container.className = 'operation-container';
        newEdit.className = 'operation__icon fas fa-pencil-alt';
        newDelete.className = 'operation__icon fas fa-trash-alt';
        newFinished.className = 'operation__icon far fa-check-circle';
        newEdit.dataset['type'] = 'edit';
        newDelete.dataset['type'] = 'delete';
        newFinished.dataset['type'] = 'check';
        newFinished.dataset['isfinish'] = '0';
        return item;
    }


    function itemContent() {
        const span = document.createElement('span');
        span.classList.add('list__content');
        return span;
    }

    //更新localstorage資料
    function updateLocalStorage() {
        // 每個Itme裡的sapn.textContent資料存入localStorage
        const notfinishVlaue = Array.from(document.querySelectorAll('.notyet .list__content'));
        const finishedVlaue = Array.from(document.querySelectorAll('.finish .list__content'));
        const notfinsihConent = notfinishVlaue.map((elem) => {
            return elem.textContent;
        })
        const finishedConent = finishedVlaue.map((elem) => {
            return elem.textContent
        })
        const valueObj = {
            notfinish: notfinsihConent,
            finished: finishedConent
        }
        localStorage.setItem('value', JSON.stringify(valueObj))
    }


   

    function addItem(e) {
        if (this.value.trim() !== '' && e.keyCode === 13) {
            const content = itemContent();
            content.textContent = this.value;
            const item = new ListItem();
            item.insertBefore(content, item.firstElementChild);
            notFinishedContainer.appendChild(item);
            addInput.value = '';
            updateLocalStorage();
        }
    }

    function handleItem(e) {
        const list = e.target.parentElement.parentElement.parentElement;
        const thisItem = e.target.parentElement.parentElement;
        switch (e.target.dataset['type']) {
            case 'delete':
                list.removeChild(thisItem)
                updateLocalStorage();
                break;
            case 'edit':
                const input = document.createElement('input');
                input.setAttribute('type', 'text');
                input.classList.add('list__inputEdit');
                console.log(thisItem.firstElementChild)
                input.value = thisItem.firstElementChild.textContent;
                thisItem.replaceChild(input, thisItem.firstElementChild);
                input.focus();
                input.addEventListener('keydown', function (e) {
                    console.log(e)
                    if (e.keyCode === 13) {
                        const content = document.createElement('span');
                        content.classList.add('list__content');
                        content.textContent = this.value;
                        thisItem.replaceChild(content, thisItem.firstElementChild);
                        updateLocalStorage();
                    }
                })
                break;
            case 'check':
                let isfinish = e.target.dataset['isfinish'] === '0' ? false : true;
                if (isfinish) {
                    list.removeChild(thisItem);
                    e.target.classList.toggle('fas');
                    e.target.classList.toggle('far');
                    e.target.dataset['isfinish'] = '0';
                    console.log(e.target);
                    notFinishedList.appendChild(thisItem);
                } else {
                    list.removeChild(thisItem);
                    e.target.classList.toggle('fas');
                    e.target.classList.toggle('far');
                    e.target.dataset['isfinish'] = '1';
                    finishedList.appendChild(thisItem);
                    console.log(e.target)
                }
                updateLocalStorage();
                break;
        }
    }


     //畫面更新
    //從localStorage取出資料，畫面更新
    function render() {
        const localData = JSON.parse(localStorage.getItem('value')) || {
            notfinish: [],
            finished: []
        };
        localData.notfinish.forEach((text) => {
            const item = ListItem();
            const contnet = itemContent();
            contnet.textContent = text;
            item.insertBefore(contnet,item.firstElementChild);
            notFinishedList.appendChild(item);
        })


        localData.finished.forEach((text) => {
            const item = ListItem();
            const contnet = itemContent();
            contnet.textContent = text;
            item.insertBefore(contnet,item.firstElementChild);
            finishedList.appendChild(item)
        })

        
    }
    window.onload = function() {
        render();

        //整個畫面載入完成後才顯出ToDoList
        const ToDoList = document.querySelector('.ToDoList');
        const title = document.querySelector('.title');
        ToDoList.classList.toggle('hidden');
        title.classList.toggle('hidden');

        //添加監聽事件
        addInput.addEventListener('keydown', addItem);
        notFinishedContainer.addEventListener('click', handleItem);
        finishedContainer.addEventListener('click', handleItem);
    }

})();