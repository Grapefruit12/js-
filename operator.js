'use strict';
//1. String concatenation(문자열 연결)
console.log('my'+'cat');
console.log('1'+2);
console.log(`string literals: 1+2=${1+2}`);
console.log("suga's\n\t book");//\n: 한줄띄기 \t:tab

//2. Numeric operators(숫자 연산자)
console.log(1+1);//add
console.log(1-1);//substract
console.log(1/1);//divide
console.log(1*1);//multiply
console.log(5%2);//remainder
console.log(2**3);//exponentiation

//3. Increment and decrement operators(증가,감소 연산자)
//++: +1, --: -1
let counter=2;
const preIncrement=++counter;//(앞에++)
//counter=counter+1; 1증가
//preIncrement=counter;
console.log(`preIncrement:${preIncrement}, counter:${counter}`);

const postIncrement=counter++;//(뒤에++)
//postIncrement=counter; 그대로
//counter=counter+1;
console.log(`postIncrement:${postIncrement}, counter:${counter}`);

const preDecrement=--counter;
console.log(`preDecrement:${preDecrement}, counter:${counter}`);

const postDecrement=counter--;
console.log(`postDecrement:${postDecrement}, counter:${counter}`);

//4. Assignment operators(할당 연산자)
let x=3;
let y=6;
x+=y;//x=x+y;
x-=y;//x=x-y;
x*=y;//x=x*y;
x/=y;//x=x/y;

//5. Comparison operators(비교 연산자)
console.log(10<6);//미만
console.log(10<=6);//이하
console.log(10>6);//초과
console.log(10>=6);//이상

//6. Logical operators(논리 연산자): ||(or) &&(and), !(not)
const value1=true;
const value2=4<2;

//값들은 '무거운메모리 값일수록 뒤에 두는게 좋다'. 앞에서 이미 true,false인지 완료되면 뒤에 값들은 처리를 안하기 때문

//||(or), 첫번째 true값을 찾는다
console.log(`or: `);
//&&(and), 첫번째 false값을 찾는다
//!(not), 값을 반대로 바꿔준다
console.log(!value1);//true->false

//7. 동등:=
//1. 2개: ==,!== :타입을 '변경'해서 검사함
//2. 3개:===, !===: 타입을 '변경하지 않고' 검사함(이게 더 확실함!)
//ex)
const stringFive='5';
const numberFive=5
console.log(stringFive==numberFive);//true 타입변경하면 5로 같으니까
console.log(stringFive!=numberFive);//false 
console.log(stringFive===numberFive);//false 타입이 서로 다르기때문에 다른것
console.log(stringFive!==numberFive);//true

//object에서 동등: object는 reference가 메모리 저장됨을 기억하자
const suga1={name:"윤기"};//suga1과 suga2는 name값은 같아도 다른 reference
const suga2={name:"윤기"};
const suga3=suga1;
console.log(suga1==suga2);//false
console.log(suga1===suga2);//false
console.log(suga1===suga3);//true: suga1을 그대로 가져왔으니 reference같음

console.log(0==false);//true
console.log(0===false);//false: 0이 boolean type이 아니니까
console.log(''==false);//true
console.log(''===false);//false: ''이 boolean type이 아니니까
console.log(null==undefined);//true
console.log(null===undefined);//false: 서로 같은 type아니니까

//8. 조건문: if
//if ,else if, else
const name='suga';
if(name==='suga'){
    console.log('welcome, suga');
}else if(name==='jin'){
    console.log('welcome jin');
}else{
    console.log('sorry');
}

//9. Ternary operator:?
//:더 쉽게 쓰는 조건문, 간단한 조건문일때만 사용
//(if)조건문? (true일때)값: (false일때)값;
console.log(name==='suga'?'yes':'no');

//10. Switch문
const browser='IE';
switch (browser){ 
    case 'IE':   //if browser값===IE 일때
        console.log("저리가");
        break;
    case 'Chrome'://if browser값===Chrome || browser값===Firefox 일때
    case 'Firefox':
        console.log("좋아");
        break;
    default:
        console.log("다 같아");//default일때
        break;
}
//switch는 if에서 else if반복이 많을때 사용하기 좋다.(겹쳐쓰기 좋음 case 'Chrome':case 'Firefox':)

//11. 반복문
//1) while문: 조건문이 참일때 실행된다, 조건확인 후에 코드실행. 거짓나오기 전까지는 무한대로 반복해서 돈다
//2) do while문: 실행된후 참인지 판별한다. 코드실행이 먼저이다 그다음 조건확인
let i=3;
while(i>0){
    console.log(`while: ${i}`);//3,2,1
    i--;
}

do{
    console.log(`do while: ${i}`);//0
    i--;
}while (i>0);

//3)for 문
//for(시작; 조건문; 단계)
//시작은 한번만 실행, 나머지는 조건문, 단계로 반복
for(i=3;i>0;i--){
    console.log(`for:${i}`);
}

for(let i=3;i>0;i=i-2){//for안에 지역변수 설정도 가능:let i=3
    console.log(`inline variable for:${i}`);
}

//중첩 반복문
for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
        console.log(`i:${i}, j:${j}`);//i:0, j:0-9, i:1, j:0-9, ... i:9, j:0-9
}
}

//반복문 중간에 끊기: break, continue
//break: 아예 끝
//continue:지금꺼만 끝내고, 다음단계로 진행
//문제:
//1. 0-10까지 수를 오직 짝수만 프린트시켜라, continue사용해서
//2. 0-10까지 수를 숫자 8까지만 프린트시켜라, break사용해서
for(let i=0;i<11;i++){
    if(i%2!==0){
        continue;
    }
    console.log(i);
};

for(let i=0;i<11;i++){
    if(i>8){
        break;
    }
    console.log(i);
};

//반복문중 label이라는 것도 있는데 현업에서는 잘 사용안함
//사용하면 좀 나쁜냄새가 난다고 함