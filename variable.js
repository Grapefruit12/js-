// 1. Use strict
// added in es5
// use this for Vanilla Javascript
"use strict";

// 변수선언시 const, let을 쓴다. 
// 주로 const를 먼저 쓰고, 값을 변경해야되는 애들은 let을 쓴다.

// 2. Variable(변수): 값을 변경할 수 있다.(읽고 쓰기가 가능)
// let (added in ES6)
// *참고로 es6버전은 js일반적인 버전이다.
// {}: block scope=지역변수 느낌

// *var은 쓰지말기 
// *hoisting(끌어올리다): 어디에서 선언했느냐 상관없이 항상 '제일 위로' 선언을 끌어올려주는 것을 말한다.

// 3. Constant(상수): 값을 변경할수 없음.(읽기만 가능)
// const
// 가능한 변수선언시 const를 사용한다.
// 변수값을 바꿔야되는 것만 let을 사용한다.
// favor immutable data type always for a few reasons:(선호하는 이유들)
//  - Security(보안)
//  - thread safety(안전한 스레드)
//  - reduce human mistakes(실수를 줄여줌)

// Note!
//값이 ellie라고 하면 elldo라고 변경이 가능한지 아닌지
// Immutable data types(변경불가능한 데이터타입): primitive types, frozen objects(i.e. object.freeze())
// Mutable data types(변경가능한 데이터타입): object (all objects by default are mutable in JS(예시: array))

// 4. Variable types
// primitive: 더이상 작은 단위로 나눠질수없는 'single item'. 종류는 number, string, boolean, null, undefined, symbol이 있다.
// object: single item을 여러개 묶어서 "하나의 box"로 관리할수 있게 해줌(box container)
// function, first-class function(다른 데이터 타입처럼, 변수에 할당가능,함수 인자로도 전달되고, return도 가능함)

//저장방식: 
// primitive-'value값'으로 저장
// object-object를 가리키는 '주소값'이 저장

//object: 박스형태
const ellie={
    name:'ellie',
    age:26
};
// ellie자체는 const라서 값 변경안됨
// ellie 안에 있는 것들은 값 변경가능
ellie.age=21;

// number - special numeric values(특수 숫자값): infinity, -infinity, NaN
const infinity = 1/0; //'0으로 나눈것'은 무한대
const negativeInfinity= -1/0; //몫이 '-값'이면 -무한대
const nAn= 'not a number'/2;// 몫이 '숫자가 아닌것'이면 NaN
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char='c';
const brendan='brendan';
const greeting='hello'+brendan;//따옴표 사용(비추천)
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob=`hi ${brendan}!`;//백틱사용(추천!): template literals(string)
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead=true;
const test=3<1;//false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null: 값 지정됨-비어있다
let nothing=null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

//undefind: 값 지정안됨
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique identifiers for objects(고유한 식별자 만들때)
const symbol1=Symbol('id');
const symbol2=Symbol('id');
console.log(symbol1===symbol2);//false(서로 다른 값이다)
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);//symbol일때는 value값 보려면 .description붙여야함

//동일한 symbol만들고 싶을떄: Symbol.for('id');
const gSymbol1=Symbol.for('id');
const gSymbol2=Symbol.for('id');
console.log(gSymbol1 === gSymbol2);//true(서로 같은 값이다)

//5. Dynamic typing: dynamically typed language(js는 동적인 언어이다.)
let text='hello';
console.log(`value: ${text}, type: ${typeof text}`);//string
text=1;
console.log(`value: ${text}, type: ${typeof text}`);//number
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);//string
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);//number(왜냐 나누기 연산자있으니까)

//아직 안함
//메모리값으로 저장하는 방법
//1. primitive 타입: 값자체가 저장->값 변경안됨
//2. object 타입: object안에 값들이 메모리저장->값 변경가능
const a="suga";//primitive 타입
const b={     //object 타입
    name:"suga",
    age:10,
}
console.log(a);
console.log(b);

