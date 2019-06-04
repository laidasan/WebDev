{
    let button_next = document.querySelector('.button');
    let button_group = document.querySelector('.button-group');
    let button_previous = document.createElement('a');
    button_previous.setAttribute('href', '#previous');
    button_previous.className = 'button';
    button_previous.innerText = 'pre';
    let page_container = document.querySelector('.container');
    let page_previous;
    let pre_href;

    let page_answer = `<form class="form">
                            <div class="group">
                                <div class="wrap u-margin-bottom-big">
                                    <h2 class="heading-secondary">自訂</h2>
                                    <input type="radio" name="radio" id="custom" class="radio-button radio-custom">
                                    <label for="custom" class="radio-label custom"></label>
                                    <input type="text" class="radio-text">
                                    <input type="text" class="radio-text radio-text-2">
                                </div>
                            </div>
                            <div class="group">
                                <div class="wrap u-margin-bottom-medium">
                                    <h2 class="heading-secondary">預設</h2>
                                    <input type="radio" name="radio" id="default" class="radio-button radio-default">
                                    <label for="default" class="radio-label default"></label>
                                </div>
                            </div>
                        </form>`;


    function render(e) {
        e.preventDefault();
        let target = e.target;
        // console.log(page_previous);
        switch (target.getAttribute('href')) {
            case '#previous':
                target.nextElementSibling.setAttribute('href',pre_href);
                if (button_previous.nextElementSibling.getAttribute('href') === '#answer') {
                    button_group.firstElementChild.remove();
                }
                page_container.innerHTML = page_previous;
                page_previous='';
                console.log('previous');
                break;
            case '#answer':
                pre_href = target.getAttribute('href');
                target.setAttribute('href', '#checkit');
                button_group.insertBefore(button_previous, button_group.childNodes[0]);
                page_previous = document.querySelector('.container').innerHTML;
                console.log(page_previous);
                page_container.innerHTML = page_answer;
                console.log('answer');
                break;
            case '#checkit':
                console.log('checkit');
                break;
        }
    }

    $(document).ready(function () {
        button_group.addEventListener('click', render, false);
    });
}