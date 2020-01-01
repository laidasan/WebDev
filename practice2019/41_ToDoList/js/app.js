(function () {
    const addInput = document.querySelector('.additem');
    const notFinishedContainer = document.querySelector('.notyet');
    const finishedContainer = document.querySelector('.finish');
    const notFinishedList = document.querySelector('.notyet .list');
    const finishedList = document.querySelector('.finish .list')



    function ListItem () {
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


    function addItem(e) {
        if(this.value.trim() !== '' && e.keyCode === 13) {
        const content = document.createElement('span')
        content.className = 'list__content';
        content.textContent = this.value;
        const item = new ListItem();
        item.insertBefore(content,item.firstElementChild);
        notFinishedContainer.appendChild(item);
        addInput.value = '';
        }
    }

    function handleItem (e) {
        const list = e.target.parentElement.parentElement.parentElement;
        const thisItem = e.target.parentElement.parentElement;
        switch (e.target.dataset['type']) {
            case 'delete' :
                list.removeChild(thisItem)
                break;
            case 'edit' :
                const input = document.createElement('input');
                input.setAttribute('type','text');
                input.classList.add('list__inputEdit');
                console.log(thisItem.firstElementChild)
                input.value = thisItem.firstElementChild.textContent;
                thisItem.replaceChild(input,thisItem.firstElementChild);
                input.focus();
                input.addEventListener('keydown',function(e) {
                    console.log(e)
                    if(e.keyCode === 13) {
                        const content = document.createElement('span');
                        content.classList.add('list__content');
                        content.textContent = this.value;
                        thisItem.replaceChild(content,thisItem.firstElementChild);
                    }
                })
                break;
            case 'check' :
                let isfinish = e.target.dataset['isfinish'] === '0' ? false : true;
                if(isfinish) {
                    list.removeChild(thisItem);
                    e.target.classList.toggle('fas');
                    e.target.classList.toggle('far');
                    e.target.dataset['isfinish'] = '0';
                    console.log(e.target);
                    notFinishedList.appendChild(thisItem);
                }else {
                    list.removeChild(thisItem);
                    e.target.classList.toggle('fas');
                    e.target.classList.toggle('far');
                    e.target.dataset['isfinish'] = '1';
                    finishedList.appendChild(thisItem);
                    console.log(e.target)
                }
                break;     
        }
    }








    addInput.addEventListener('keydown',addItem);
    notFinishedContainer.addEventListener('click',handleItem)
    finishedContainer.addEventListener('click',handleItem)
})();