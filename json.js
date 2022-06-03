//JSON
//: Javascript Object Notation

//[정리]
//1. Object to JSON (Object->JSON)
//사용법: .stringify(obj)

//2. JSON to Object (JSON->Object)
//.parse(json)


//1. Object to JSON (Object->JSON)
//사용법: .stringify(obj)
//JSON.stringify(변수, 콜백함수or배열, 공간);
//*콜백함수 전달해서 조금 더 세밀하게 무언가를 통제할수있다
//JSON의 규격표시: 결과값이 ""(쌍따옴표)로 출력됨.
let json=JSON.stringify(true);
console.log(json);
{
    let json=JSON.stringify(['suga','jin'],null,"**");
    console.log(json);
}

json=JSON.stringify(['apple','banana']);
console.log(json);

const rabbit={
    name:'tori',
    color:'white',
    size:null,
    birthDate: new Date(),
    
    jump: ()=>{
        console.log(`${name} can jump!`);
    },//JSON에 제외됨: jump함수는 object위에 있는 data가 아님.js위에만있는 특별한 데이터도 제외됨.(Symbol())
};

json=JSON.stringify(rabbit);
console.log(json);

//콜백함수 전달해서 조금 더 세밀하게 무언가를 통제할수있다
json=JSON.stringify(rabbit, ['name','color']);//['name','color']해당속성만 나옴
console.log(json);

json=JSON.stringify(rabbit, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'ellie' : value;
});
console.log(json);

//2. JSON to Object (JSON->Object)
//.parse(json)
//parse(변수, 콜백함수);

json=JSON.stringify(rabbit);
const obj=JSON.parse(json, (key, value)=>{
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());