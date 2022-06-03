//Objects
//서로 "연관된" 특징과 행동들을 묶어놓는것을 말한다
//one of the Javascript's data types.
//a collection of related data and/or functionality.
//Nearly all objects in Javascript are instances of Object
//object={key:value};

//1. Literals and properties
//object만드는 법
const obj1={}; // {}: 'object literal' syntax
const obj2=new Object();// new +오브젝트() : 'object constructor' syntax

//예시
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const ellie={name:'ellie', age:4};//object={key:value};
print(ellie);

//*Runtime: 프로그램이 동작하고 있을때
//js는 Runtime이 가능해서 중간에 추가,삭제가 가능, 그러나 가능한 피해서 사용하기, 유지보수가 힘듬
//with Javascript magic (dynamically typed language)
//can add properties later:속성 추가
ellie.hasJob=true;
console.log(ellie.hasJob);
//can delete properties later:속성 삭제
delete ellie.hasJob;
console.log(ellie.hasJob);

//2. Computed properties: 계산된 properties
//쓰는법: object["key"]
//key should be always string: key는 string으로 쓰기!
console.log(ellie.name);
console.log(ellie["name"]);// Computed properties
ellie["hasJob"]=true;//delete했던걸 다시 복구
console.log(ellie.hasJob);

function printValue(obj,key){
    console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

{
    //3.4. 예제
    //기존 방식
    const person1={name:"bob", age:2};
    const person2={name:"steve", age:3};
    const person3={name:"dave", age:4};
    //간단히 object사용
    const person4=new Person("ellie",30);
    console.log(person4);

    function Person(name,age){
    
        this.name=name;
        this.age=age;
        
    }
}

//3. Property value shorthand
const person1={name:"bob", age:2};
const person2={name:"steve", age:3};
const person3={name:"dave", age:4};
const person4=new Person("ellie",30); //<- Property value shorthand
console.log(person4);

//4. Constructor function
function Person(name,age){//순수하게 오브젝트를 생성하는 함수명은 첫문자를 대문자로 작성:Person()
    //this={};
    this.name=name;
    this.age=age;
    //return this;
}

//5. in operator: property existence check (key in obj)
//obj안에 key가 있는지 없는지 확인하는 것
//쓰는법: ("key" in obj);
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

//6. for..in vs for..of
//1) for..in: 
//for (key in obj): "obj" 안의 각각의 key를 for문에 실행
for(key in ellie){
    console.log(key);
}

//2) for..of: 
//for (value of iterable): obj가 아닌 "배열"같은, 순차적으로 iterable한 값을 쓴다
//예시) for (value of array){}
//: array안의 모든 값이 value에 할당되면서 블럭안에서 순차적으로 출력하거나 값을 계산할수있다
const array=[1,2,4,5];
for (value of array){
    console.log(value);
}
/*
기존에 하던거: 훨씬 코드가 길다
const array=[1,2,4,5];
for(let i=0; i<array.length; i++){
    console.log(array);
}
*/ 

//7. Fun cloning
//사용법: Object.assign(dest, [obj1,obj2,obj3..])
const user={name:"ellie",age:"20"};//user참조가 가리키는 값 name:"ellie",age:"20"
const user2=user;//user2의 참조가 user참조와 동일하게 할당됨 가리키는 값 name:"ellie",age:"20"
user2.name="coder";
console.log(user);//name:coder로 바뀜 user,user2가 가리키는 값이 같으니까

//old way
const user3={};
for (key in user){
    user3[key]=user[key];
}
console.log(user3);

//Object.assign(dest, [obj1,obj2,obj3..]): Object들이 dest에 포함되어진다.
const user4={};
Object.assign(user4, user);//.assign(targe, source)
//const user4=Object.assign({}, user);
console.log(user4);

//another example
const fruit1={color:"red"};
const fruit2={color:"blue", size:"big"};
const mixed=Object.assign({},fruit1,fruit2);//mixed는 fruit1+fruit2
console.log(mixed.color);//blue가 나옴: 앞에 동일한 property가 있다면 값을 계속 덮어씌워지기 때문
console.log(mixed.size);//big

