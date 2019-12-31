(function () {
    const addInput = document.querySelector('.additem');
    const notFinishedContainer = document.querySelector('.notyet');
    const finishedContainer = document.querySelector('.finish');
    const operation = document.querySelector('.operation-container')
    const notFinishedList = document.querySelector('.notyet .list');


    function newItem () {
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
        newEdit.className = 'operation__icon edit fas fa-pencil-alt';
        newDelete.className = 'operation__icon delete fas fa-trash-alt';
        newFinished.className = 'operation__icon noFinish far fa-check-circle';
        console.log(item)
        return item;
    }


    function addItem(e) {

        if(this.value.trim() !== '' && e.keyCode === 13) {
        const content = document.createElement('span')
        content.className = 'list__content';
        content.textContent = this.value;
        const item = newItem();
        item.insertBefore(content,item.firstElementChild);
        notFinishedContainer.appendChild(item);
        addInput.value = ''
        }
    }

    function deleteItem (e) {
        const list = e.target.parentElement.parentElement.parentElement;
        if(e.target.className.includes('delete')) {
            list.removeChild(e.target.parentElement.parentElement)
        }
    }








    addInput.addEventListener('keydown',addItem);
    notFinishedContainer.addEventListener('click',deleteItem)
    finishedContainer.addEventListener('click',deleteItem)
})();