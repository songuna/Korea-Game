let promptObj = prompt('몇명이 참가하시나요?');
// 홈페이지 첫 화면 뜨기 전에 질문 등장!
// 질문에 답변하면 메인화면 등장
// 질문 취소하면 메인화면 안뜸



// 자바스크립트로 html만들기
// 메인화면 만들기
//조건문 써서 3글자 미만이면 질문 등장
if (promptObj !== null) {
    const title = document.querySelector(".title");
    // 변수명 선언해서 html에서 title 불러오기 (class명 불러오기)
    const label = document.createElement('label');
    // 변수명 선언해서 html에서 label 불러오기 (id 불러오기)
    const input = document.createElement('input');
    // 변수명 선언해서 html에서 input 불러오기 (id 불러오기)
    const btn = document.createElement('button');
    // 변수명 선언해서 html에서 bytton 불러오기 (id 불러오기)
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