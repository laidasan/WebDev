{
    let button_group = document.querySelector('.button-group');
    let page_container = document.querySelector('.container');
    let page_previous_array = [];
    let page_previous;
    let pre_href;
    let player_conunt = 0;
    let ischecked = false;

    /*previous button*/
    let button_previous = document.createElement('a');
    button_previous.setAttribute('href', '#previous');
    button_previous.style = 'margin-right:30px;';
    button_previous.className = 'button';
    button_previous.innerText = 'pre';
    /*previous button*/

    /*check next_button*/
    let button_next = document.createElement('a');
    button_next.setAttribute('href', '#next');
    button_next.className = 'button';
    button_next.innerText = '點我';
    /*check next_button*/

    /*check player-ans*/
    let p_ans = document.createElement('p');
    p_ans.className = 'player-ans u-margin-bottom-medium';
    p_ans.innerText = '橘子';
    /*checkt player-ans*/

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


    let page_checkit = `<h2 class="heading-secondary u-margin-bottom-medium">玩家1</h2>
    <p class="player-ans u-margin-bottom-medium">橘子</p>
    <p class="player-info u-margin-bottom-medium">點擊看謎底，再點擊隱藏給下一位玩家</p>`;

    let page_checkit2 = `<h2 class="heading-secondary u-margin-bottom-medium">玩家1</h2>
    <p class="player-info u-margin-bottom-medium">點擊看謎底，再點擊隱藏給下一位玩家</p>`;

    let page_gaming = `<div class="player-wrap u-margin-bottom-medium">
    <div class="player u-margin-bottom-medium">玩家1</div>
    <div class="player u-margin-bottom-medium">玩家2</div>
    <div class="player u-margin-bottom-medium">玩家3</div>
    <div class="player u-margin-bottom-medium">玩家4</div>
    <div class="player ">玩家5</div>
    <div class="player">玩家6</div>
    </div>`;

    function render(e) {
        e.preventDefault();
        let target = e.target;
        if (target.className = 'button') {
            switch (target.getAttribute('href')) {
                case '#previous':
                    target.nextElementSibling.setAttribute('href', pre_href);
                    page_container.innerHTML = page_previous_array.pop();
                    console.log(page_previous_array);
                    if (button_previous.nextElementSibling.getAttribute('href') === '#answer') {
                        button_group.firstElementChild.remove();
                    }
                    console.log('previous');
                    break;
                case '#answer':
                    pre_href = target.getAttribute('href');
                    target.setAttribute('href', '#checkit');
                    button_group.insertBefore(button_previous, button_group.childNodes[0]);
                    page_previous = document.querySelector('.container').innerHTML;
                    page_previous_array.push(page_previous);
                    console.log(page_previous_array[0]);
                    page_container.innerHTML = page_answer;
                    console.log('answer');
                    break;
                case '#checkit':
                    pre_href = target.getAttribute('href');
                    target.setAttribute('href', '#checkit');
                    button_group.innerHTML = '';
                    button_group.appendChild(button_next);
                    // page_previous = document.querySelector('.container').innerHTML;
                    // page_previous_array.push(page_previous);
                    page_container.innerHTML = page_checkit2;
                    console.log('checkit');
                    break;
                case '#next':
                    if (player_conunt < 11) {
                        player_conunt++;
                        console.log(player_conunt);
                        if (ischecked != true) {
                            ischecked = true;
                            page_container.insertBefore(p_ans, page_container.children[1]);
                            console.log('checked');
                        } else {
                            ischecked = false;
                            page_container.removeChild(p_ans);
                        }
                    } else {
                        button_group.innerHTML='';
                        page_container.innerHTML = page_gaming;
                        console.log('game start');
                    }

                    break;
            }
        }
    }

    $(document).ready(function () {
        button_group.addEventListener('click', render, false);
    });
}