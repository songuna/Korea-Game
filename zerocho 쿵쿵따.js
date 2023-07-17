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



    // js로 html 만들기
    label.innerText = '쿵쿵따 게임 시작하기'
    // label에 innertext 사용해서 '쿵쿵따 게임 시작하기' 메인화면에 뜸
    input.setAttribute('type', 'text')
    // input에 type, text 속성값 얻음, 메인화면에 생성
    input.setAttribute('id', 'Game')
    // input에 id, Game 속성값 얻음, 메인화면에 생성
    btn.innerText = " 확인"
    // button에 innertext 사용해서 '확인' 메인화면에 뜸
    title.append(label, input, btn)
    // js에 html 요소 생성하기


    // 3글자 이상 단어에 '확인' 버튼 누르면 alert 함수 생성
    btn.addEventListener("click", function () {
        // botton에 'click'할때 호출함수 설정
        const Game = document.querySelector("#Game");
        // 변수명 선언해서 Game 불러오기
        if (Game.value.length > 3) {
            alert("세글자 미만이여야 합니다. 다시 입력해주세요");
        }
        // 조건문 사용해서 입력칸에 사용자가 쓴 단어 3글자 이상이면 alert 함수 생성,
        // 3글자가 맞으면 조건문 사용 안함(?)
    });

}