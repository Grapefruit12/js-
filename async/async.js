//async & await
//clear style of using promise 😊: 프로미스를 조금더 간편하게 만들수있는 방법 

//1. async
async function fetchUser(){
    //do network request in 10 secs....
    return 'ellie';
}

const user=fetchUser();
user.then(console.log);
console.log(user);

//2. await
function delay(ms){
    return new Promise(resolve=>setTimeout(resolve, ms));
}

async function getApple(){
    await delay(1000);
    throw 'error';
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}

async function pickFruits(){
    const apple=await getApple();
    const banana=await getBanana();
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs
//.all: 다 받아올때까지 기다려준후 다 전달됨
//.race: 가장먼저 값을 리턴하는 아이만 전달되어짐
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()])
    .then(fruits=> fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);

