'use strict';

//자바스크립트는 동기적이다(JavaScript is synchronous.)
//호이스팅 후 Code Block을 순서대로 실행합니다.(Execute the code block in order after hoisting.)
/*
동기적: 순서대로 실행
비동기적: 나중에 부를수도 있음 ex)콜백함수,setTimeout
*/ 
//*비동기적(Asynchronous): 언제 코드가 실행될지 예측할수없는것을 의미함. ex)setTimeout(콜백함수or변수,시간);
//*콜백함수: 우리가 전달해준 함수를 '나중에 불러줘'라는 의미(call+back: 나중에 불러줘)
/* *hoisting
: var변수, 함수 선언은 '자동적으로 맨 위로 올라가는것'.
 그래서 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다는 말이다.
*/


console.log('1');
setTimeout(()=> console.log('2'),1000);
console.log('3');

// Synchronous callback: 시간 안적음.
function printImmediately(print){
    print();
}//실행순서: 함수선언이니까 맨먼저 실행
printImmediately(()=>console.log('hello'));

//Asynchronous callback: 몇초뒤에 실행할지 시간을 작성.
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}//실행순서: 함수선언이니까 맨먼저 실행
printWithDelay(()=>console.log('async callback'),2000);

//Callback Hell example(콜백지옥 예제)
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if((id === 'ellie' && password === 'dream')||(id === 'coder' && password === 'academy')){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
             }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({ name: 'ellie', role: 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}

const userStorage=new UserStorage();
const id=prompt("당신의 id는?");
const password=prompt("당신의 pw는?");
userStorage.loginUser(
    id,
    password,
    user=>{
        userStorage.getRoles(
            user,
            userWithRole=>{
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error=>{console.log(error);}
        );
    },
    error=>{console.log(error);}
);

//콜백지옥의 문제점
//: 1. 가독성이 너무 떨어진다. 
//     그리고 나중에 에러나 디버깅을 해야할때도 굉장히 어려움, 유지보수도 어려움
