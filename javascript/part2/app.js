import * as Utils from './common/util'

Utils.AppleName
Utils.CarName
Utils.Sum(1,2,3)

//객체
a = {
    name : '김민태',
    age: 20,
    family : {
        name : '할아버지'
    }
}

b = [10, 20, '하하', '호호', [1,2,3], { }]

a.name
a.family.name

b[1] * 10

// 변수
let myname
const yourname= '홍길동';
var thatname = 'old'


myname = '김민태'
yourname


// 문 if for switch

// 함수 그리고 클래스
function sum(x, y){
    return x + y
}
let mySum = function (x, y){
    return x+y
}

let mySum2 = (x, y) => {
    return x + y
}

let mySum3 = (x, y) => x + y


let mysum = sum(200, 200) + 10
let mysum1 = mySum(10, 10)
let mysum2 = mySum2(10, 10)
let mysum3 = mySum3(10, 10)

class Box {
    constructor(width, height){
        this.width = width
        this.height = height
    }

    width(){
        return width
    }

    height(){
        return height
    }
}

let box1 = new Box(100, 200)

box1

widfun = box1.width
widfun
mywidth = widfun()
mywidth


// 모듈화