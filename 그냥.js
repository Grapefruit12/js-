'use strict';

async function fetchUser(){
  return 'ellie';
}

const user=fetchUser();
user.then(console.log);
console.log(user);

function delay(ms){
  return new Promise(resolve=>setTimeout(resolve,ms));
}

async function getApple(){
  await delay(1000);
  // throw '사과없음';
  return '🍎';
}

async function getBanana(){
  await delay(1000);
  // throw '바나나없음';
  return '🍌';
}

async function pickFruits(){
  const apple=await getApple();
  const banana=await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

function pickAllFruits(){
  return Promise.all([getApple(), getBanana()])
  .then(fruits=>fruits.join('+'));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);