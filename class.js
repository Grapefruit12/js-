'use strict';
//Object-oriented programming(객체 지향 프로그래밍)
//class: template(class: 템플릿)
//object: instance of a class(object: 클래스에 데이터를 넣어 만든것)
//Javascript classes: 자바스크립트 class
// - introduced in ES6(:최근에서 나온것)
// - syntactical sugar over prototype-based inheritance(:기존의 프로토타입 기반으로 문법만 추가되어 편리하게 제공)

//1. Class declarations: Class 선언
class Person{
    //constructor: 생성자
    constructor(name,age){
        //fields
        this.name=name;
        this.age=age;//this는 생성된object자신을 의미
    }
        //methods
    speak(){
        console.log(`${this.name}:hello!`);
    }
}

const ellie1 = new Person("ellie",20);
//새로운 object생성: new +object
//Person(name,age)
console.log(ellie1.name);
console.log(ellie1.age);
ellie1.speak();

//2. Getter and setters
//사용자가 실수로 마이너스값을 입력했을때 방지
//get: 값 return
//set: 값 설정,그래서 value를 꼭 넣는다
class User{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    get age(){//this.age가 get호출
        return this._age;
    }
    set age(value){//age가 set호출
        this._age= value<0 ? 0:value;//값이 0보다 작을때는 0으로 값설정해줌
        //._age라고 설정한이유: .age라고하면 위에 age와 겹쳐서 set함수에서만 빙글빙글 돈다
    }
}

const user1=new User("Steve","Job",-1);
//사람 나이를 사용자가 실수로 -1이라고 설정하게 되면 마이너스값은 객체지향에 말이 안되는것: 고쳐줘야됨 그래서 set이 필요함
console.log(user1.age);

//3. Fields (public, private)
//Too soon!:너무 최근에 나온거라 알아두기만해라
//그냥 적으면: public
//#붙이면 :private로써 class내부에서만 사용가능
class Experiment{
    publicField=2;
    #privateField=0;
}
const experiment=new Experiment();
console.log(experiment.publicField);//2
console.log(experiment.privateField);//undefined

//4. Static properties and methods
//Too soon!:너무 최근에 나온거라 알아두기만해라
//object와 상관없이 class자체에 연결되어 있다
class Article{
    static publisher="Dream Coding";
    constructor(articleNumber){
        this.articleNumber=articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1=new Article(1);
const article2=new Article(2);

//static이라 지정되어있으면 object마다 할당된게 아닌 class자체에 붙어있다
console.log(article1.publisher);//undefined
console.log(Article.publisher);//값있음
Article.printPublisher(); //값있음

//5. Inheritance: 상속(중요!)
//a way for one class to extend another class.: 하나의 class가 다른 class에 확장하여, 포함해서 사용하는 방법
//다양성: 필요한 함수만 재사용, 함수를 자기가 원하는대로 살짝 변형해서 사용(overriding)
class Shape{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
    }
    draw(){
        console.log(`drawing ${this.color} color of`);
    }
    getArea(){
        return this.width * this.height;
    }
}
//A extends B: A에 B를 포함시킨다
class Rectangle extends Shape{}//Rectangle에 Shape이 포함됨
class Triangle extends Shape{
    //다양성(overriding): 필요한 함수만 재사용, 함수를 내가 원하는대로 살짝 변형해서 사용가능
    draw(){
        super.draw()//super.부모함수: 부모의 메소드 호출
        console.log("🔺");//내가 정의한 메소드 호출(다양성)
    }
    getArea(){
        return (this.width * this.height)/2;
    }
}

const rectangle=new Rectangle(20,20,"blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle=new Triangle(20,20,"red");
triangle.draw();
console.log(triangle.getArea());

//6. Class checking: instanceOf
//A instanceOf B: A가 B의class로 만들어진것인지 확인-true,false로 출력
console.log(rectangle instanceof Rectangle);//true
console.log(triangle instanceof Rectangle);//false
console.log(triangle instanceof Triangle);//true
console.log(triangle instanceof Shape);//true
console.log(triangle instanceof Object);//true(Object 이거는 항상 true이다)
//triangle instanceof Object가 true인 이유:우리가 js에서 만든 모든 object class들은 js의 Object를 상속한 것이다

//js object들 mdn사이트
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference


