//포기하지 마세요🌸

//1.함수 선언 && 함수 호출
//함수 선언
function doSomething(인자){
    //코드작성
    console.log('hello');
}
//함수 호출
doSomething(인자값);

//2.값을 리턴하는 함수
function add(a,b){
    const sum=a+b;
    return sum;//<- return
}

const result=add(1,2);//<- add(1,2)만 하면 값이 나오지않기때문에, 변수에 할당해준다
console.log(result);

//3. 언어 공부방법
//: js는 ui요소가 없기때문에 "console.log를 이용"하여 눈으로 확인하면서 배우는것을 추천한다
//그래서 조금 이해가 되지 않을때는 "간단한 예제를 이용해서 console.log를 출력하면서 한줄한줄씩 따라가는것"이 굉장히 중요함

//4. 함수를 인자로 전달
function doSomething(add){
    console.log(add);
    const result=add(2,3);
    console.log(result);
}
function add(a,b){
    const sum=a+b;
    return sum;
}

doSomething(add);//add뒤에 ()넣으면 안됨!/ 함수명만 입력한경우에는 그 함수자체를 받아와지게된다

//6. 함수를 변수에 할당
const addFun=add;//<-함수를 변수에 할당
console.log(addFun); //<-addFun===add이기때문에 add함수 출력
addFun(1,2);