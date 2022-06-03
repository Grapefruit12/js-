//자료구조: 비슷한 타입의 object들을 묶어놓는것, 타입이 있는 언어에서는 동일한 타입의 object만 담을수있음 그러나 js는 타입이 없기때문에 한 바구니에 다양한 종류의 데이터를 담을 수 있다 그러나 좋지는 않다

/*
배열: 칸칸이 모여있는 자료구조
  인덱스: 0부터 시작
*/

'use strict';

//Array
//1. Declaration: 선언
const arr1=new Array();
const arr2=[1,2];

//2. Index position: 인덱스를 통해서 어떻게 배열을 접근할수있는가 
const fruits=['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length-1]);//배열 마지막에 있는 아이템 찾을때 사용
console.clear();

//3. Looping over an array
//print all fruits: 모든 과일 출력해보기
//1) for
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}
//2) for of
for(let fruit of fruits){
    console.log(fruit);
}
//3) forEach
//쓰는 법: fruits.forEach(콜백함수);
/*fruits.forEach(function(fruit){
    console.log(fruit)
 });
 ->간략하게
 fruits.forEach((fruit)=>console.log(fruit));
*/
fruits.forEach((fruit)=>console.log(fruit));

//4. Addition, deletion, copy: 추가,삭제,복사
//push: add an item to the end(맨뒤 하나 추가)
fruits.push('🍋','🥝');
console.log(fruits);

//pop: remove an item from the end(맨뒤 하나 빼기)
fruits.pop();//맨뒤 하나 빼기
fruits.pop();//맨뒤 하나 빼기
console.log(fruits);

//unshift: add an item to the beginning(맨앞부터 추가)
fruits.unshift('🥑','🥒');
console.log(fruits);

//shift: remove an item from the beginning(맨앞부터 빼기)
fruits.shift();
fruits.shift();
console.log(fruits);

//note! 
//shift,unshift는 pop,push보다 엄청 느리다
//: shift, unshift는 맨 앞에서 넣고,빼고가 이루어지기 때문에 한칸씩 뒤로 밀어주거나, 땡겨주거나하는 작업이 있다 그래서 느리다

//splice: 인덱스 번호로 아이템 지우기(remove an item by index position)
//1)기본: splice(지우기시작할 인덱스번호, 몇개지울건지)
//2)+문자열 추가: splice(start indexNumber, deleteCount, 그자리에 문자열추가)
fruits.push('🧄','🧅','🥔');
console.log(fruits);
//fruits.splice(1);//splice는 원하는 index만 지정하고 '몇개 지울건지 말이 없으면', 시작한 index번호부터 '마지막까지 다 삭제한다.'
fruits.splice(1,1);//1)
console.log(fruits);
fruits.splice(1,1,'🍑','🍒');//2)splice(start, 몇개지울건지, 문자열추가);
console.log(fruits);

//combine two arrays(두가지 배열 합치기): concat
const fruits2=['🍈','🍉'];
const newFruits=fruits.concat(fruits2);
console.log(newFruits);

//5. Searching: 검사
//indexOf: find the index(해당된 문자열이 '맨 처음'으로 나온 index번호)
//lastIndexOf: find the index(해당된 문자열이 '마지막'에 나온 index번호)
//includes: 배열에 이 값이 있는지 없는지=> true or false

console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍕'));
console.log(fruits.indexOf('🍔'));
console.log(fruits.indexOf('🥚'));//-1:배열안에 해당하는 값이 없을때 출력

console.log(fruits.includes('🍔'));

console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits.indexOf('🍎'));//맨 처음으로 나온 사과의 index출력
console.log(fruits.lastIndexOf('🍎'));//맨 마지막으로 나온 사과의 index출력



