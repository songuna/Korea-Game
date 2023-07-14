let promptObj = prompt('몇명이 참가하시나요?');

if (promptObj !== null) {
    const title = document.querySelector(".title");
    const label = document.createElement('label');
    const input = document.createElement('input');
    const btn = document.createElement('button');
    label.innerText = '쿵쿵따 게임 시작하기'
    input.setAttribute('type', 'text')
    input.setAttribute('id', 'Game')
    btn.innerText = " 확인"
    title.append(label, input, btn)



    btn.addEventListener("click", function () {
        const Game = document.querySelector("#Game");
        if (Game.value.length > 3) {
            alert("세글자 미만이여야 합니다. 다시 입력해주세요");
        }
    });

}