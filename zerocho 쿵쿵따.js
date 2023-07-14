//let promptObj = prompt('몇명이 참가하시나요?', 'default');



const click = document.querySelector(".button");
click.addEventListener("click", function () {
    const Game = document.querySelector("#Game");
    if (Game.value.length >= 3) {
        alert("세글자 미만이여야 합니다. 다시 입력해주세요");
    }
});
