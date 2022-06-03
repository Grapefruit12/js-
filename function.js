'use strict';
//함수: function
//-fundamental building block in the program: 프로그램의 기본 구성 요소
//-subprogram can be used multiple times: subprogram이라고도 불리며, 여러번 '재사용'가능
//-performs a task or calculates a value: '한가지'의 업무나 값을 계산하기 위해 사용됨

//1. Function declaration: 함수 정의법
//이렇게 작성하기: function name(param1, param2){body...return;}
//one function===one thing : !!'한가지함수는 한가지일만 하도록' 만들어야함
//naming: doSomething, command, verb->함수는 무언가를 동작하는것이기 때문에, 이름지정은 '동사형'으로
//ex) createCardAndPoint->createCard, createPoint
//함수가 너무 많은 걸하고있을때->세부적으로 나눌수 있을지 생각하기
//function is object in JS : 함수는 object이다

function printHello(){
    console.log("hello");
}
printHello();

function log(message){
    console.log(message);
}
log("suga");

//2. Parameters: 매개변수
//premitive parameters: passed by value('값'으로 전달)
//object parameters: passed by reference(object는 '주소값'으로 전달)
function changeName(obj){
    obj.name="coder";
}
const ellie={name:"ellie"};
changeName(ellie);
console.log(ellie);

//3. Default parameters (added in ES6): 기본값 매개변수: 값이 없는 기본상태

function showMessage(message, from){
    console.log(`${message} by ${from}`);
}
showMessage("Hi!");//1개만 호출했으므로, from은 기본값 매개변수.


//이럴때 값없는 매개변수에 '값'넣어주면 됨.=> from="unknown"
function showMessage1(message, from="unknown"){
    console.log(`${message} by ${from}`);
}
showMessage1("Hi!");



//4. Rest parameters (added in ES6): 
//...변수: '배열'로 된 변수
function printAll(...args){
    for(let i=0;i<args.length; i++){
        console.log(args[i]);
    }
    //배열 args의 각각 arg값마다 실행: (item of array) or array.forEach((item))
    for(const arg of args){
        console.log(arg);
    }
    args.forEach((arg)=>console.log(arg));
}
printAll("dream","coding","eliie");

//5. Local scope: 전역변수, 지역변수
//전역변수: 코드 전체에서 활용가능
//지역변수: 그 지역block안에서만 가능

//6. Return a value: return값
function sum(a,b){
    return a+b;
}
const result=sum(1,2)//3
console.log(`sum: ${sum(1,2)}`);//3

//7. Early return, early exit
//'불필요한 logic을 먼저 return, exit'하고 필요한 logic을 뒤에 작성하는게 좋다: 가독성

//bad
function upgradeUser(user){
    if(user.point>10){
        //long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){ //<- 먼저 조건이 맞지않는경우를 return시켜라
        return;
    }
    //long upgrade logic...
}

//First-class function
//functions are treated like any other variable
//can be assigned as a value to variable: 변수에 값 할당가능
//can be passed as an argument to other functions: 다른 함수에 인수 전달가능
//cans be returned by another function: 다른 함수에 의해 return가능

//1. Function expression
//<함수 선언  vs 함수 표현식>
//a function declaration can be called earlier than it is defined. (hoisted): 함수 선언은 함수 정의하기 전에 '먼저 호출'할 수 있습니다. (호이스팅 가능)
//a function expression is created when the execution reaches it. : 함수 표현식은 함수선언 후에 실행이 가능함.
const print=function(){// 함수에 이름없는것: annonymous function이라고 부름
    console.log("print");
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1,3));

//2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){ //printYes,printNo: callback function
    if(answer==="love you"){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function: 함수에 이름없는 것
const printYes=function (){
    console.log("yes!");
};
//named function: 함수에 이름있는 것
//-better debugging in debugger's stack traces
//-recursions: 함수안에서 자기함수부르기 ex function print(){ print(); };
const printNo=function print(){
    console.log("no!");
}
randomQuiz("wrong",printYes, printNo);
randomQuiz("love you",printYes, printNo);

//🎇Arrow function: 화살표함수(=>): 간결하게 가능
//always annonymous function: 항상 함수 이름은 없음.
/*
1줄 작성
const simplePrint = () => console.log("simplePrint!");
const add= (a,b) => a + b;

block으로 작성, return넣어줘야함
const simplePrint = () => {
    console.log("simplePrint!");  <- 내용을 많이 적을때
    return ~~;
};
*/

//일반적인 
const simplePrint=function(){
    console.log("simplePrint!");
};
//화살표 함수
const simplePrint1=()=>console.log("simplePrint!");

const simpleMultiply=(a,b)=>{
    //do something more
    return a*b;
}

//IIFE: Immediately Invoked Function Expression(선언함과 동시에 호출가능!)
//(함수~~~)();
(function hello(){
    console.log("IIFE");
})();