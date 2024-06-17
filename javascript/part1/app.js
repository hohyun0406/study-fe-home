let currentLeftBoxPosition = 100
let numberOfStep = 10
let direction = 'yes'
let box

function boxProgram(){
    numberOfStep = prompt('몇 걸음 걸을까요?')
    direction = prompt('왼쪽으로 갈까요?')
    
    let moveStep = 1
    
    if (direction === 'yes' ){
        while(moveStep <= numberOfStep){
            box.style.left = (currentLeftBoxPosition - moveStep) + 'px' //style - css의 모든 스타일이 다 있음
    
            moveStep++
        }
        currentLeftBoxPosition = currentLeftBoxPosition -moveStep
    } else {
        while(moveStep <= numberOfStep){
            box.style.left = (currentLeftBoxPosition + moveStep) + 'px'
            moveStep++
        }
        currentLeftBoxPosition = currentLeftBoxPosition + moveStep
    }

}

function main(){
    //도큐먼트 객체(html 전체)의 메서드 사용
    box = document.querySelector('#box')
    box.style.left = currentLeftBoxPosition + 'px'
    box.addEventListener('click', boxProgram)
    
}
 //이벤트가 발생했을 때 듣고 있는 함수. 브라우저가 기본적으로 제공함.
document.addEventListener('DOMContentLoaded', main)
//DOMContentLoaded 사건이 발생했을 때 main을 호출해줘. 명시만 해준다. 호출 x