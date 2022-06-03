'use strict';

/*
Promise는 자바스크립트 안에 내장되어있는 object이다.
비동기적인 것을 수행할때 콜백함수보다 유용하게 사용할수있다.
(Promise is a JavaScript object for asynchronous operation.)

[핵심]
상태(state): 대기(pending)-> 성공(fulfilled) or 실패(rejected)
제공하는사람 vs 소비자간의 견해
Producer(===promise object) vs Consumer
*/

//1. Producer
//When new Promise is created, the executor runs automatically.(new Promise 생성시, executor이 바로실행됨)
const promise= new Promise((resolve, reject)=>{
    //doing some heavy work (network, read files)
    console.log("doing something");
    setTimeout(()=>{
        resolve('ellie');
        //reject(new Error('no network'));//new Error()은 js에서 기본적으로 제공됨
    },2000);
});

//2. Consumers: then, catch, finally
//then: promise가 정상적으로 이루어진 다음~~(resolve값이 then의 value값으로 대입됨)
//catch: promise가 정상적으로 이루어지지 않았을때~~(reject값이 catch의 value값으로 대입됨)
//finally: 성공이든 실패든 상관없이 무조건 마지막에 호출되어짐
promise
    .then((value)=>{
        console.log(value);
    })
    .catch(error=>{
        console.log(error);
    })
    .finally(()=>{console.log("finally")});

//3. Promise chaining
const fetchNumber= new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num =>num*2)
.then(num => num*3)
.then(num =>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num-1),1000);
    });
})
.then(num => console.log(num));

//4. Error Handling
const getHen=()=> 
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve('🐓'), 1000);
    });
const getEgg=hen=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>reject(new Error(`error! ${hen} =>🥚`)), 1000);
    });
const cook=egg=>
    new Promise((resolve, reject)=>{
        setTimeout(()=>resolve(`${egg}=>🍳`),1000);
      //setTimeout(()=>reject(new Error(`error! ${egg}=>🍙`)),1000);
    });

{
getHen()
    .then(hen => getEgg(hen))
    .then(egg => cook(egg))
    .then(meal => console.log(meal))
    .catch(hen =>console.log(hen));

}

//콜백함수 전달시 받아오는 value가 한가지일때는 value 생략이 가능

getHen()
    .then(getEgg)//hen 생략
    //.catch(error=>{return '🥖'})
    .then(cook)//egg 생략
    .catch(console.log)//meal 생략
    .then(console.log);

