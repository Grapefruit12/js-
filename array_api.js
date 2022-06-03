// Q1. make a string out of an array
{
  const fruits = ['apple', 'banana', 'orange'];
  const result=fruits.join('🥰 ');
  console.log(result);
}

// Q2. make an array out of a string
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result=fruits.split(',');
  //fruits.split(',',2); 2개만 받고싶을때
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result=array.reverse();
  console.log(result);
  console.log(array);
  //reverse()는 return값뿐만아니라 배열자체도 변화시킨다
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result=array.slice(2, 5);
  //splice:원하는 index값 삭제하고 그 값들을 return
  //slilce:원하는 index값만 받아오고 그 값들을 return
  console.log(result);
  console.log(array);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
  const result=students.find((student)=>student.score===90);
  console.log(result);
  
}

// Q6. make an array of enrolled students
{
  const result=students.filter((student)=>student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
  const result=students.map((student)=>student.score);
  console.log(result);
  //map: 배열을 콜백함수를 통하여 배열을 변화시킴
}

// Q8. check if there is a student with the score lower than 50(50점보다 낮은 학생있는지 없는지 반환해라: true or false)
{
  console.clear();
  const result=students.some((student)=>student.score<50);
  console.log(result);
  //some: 하나라도 조건만족하면 true
  //every: 전체가 조건이 맞아야 true
}

// Q9. compute students' average score
{
  const result=students.reduce((prev,curr)=>{
    //console.log('--------');
    //console.log(prev);
    //console.log(curr);
    return prev+curr.score;
  },0);//0부터 시작
  //reduce: 우리가 원하는 시작점부터 돌면서 값을 누적함
  //reduceRight: 배열의 맨뒤부터 시작하면서 값을 누적
  console.log(result/students.length);
  
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
  const result=students.map((student)=>student.score)
  .join();
  console.log(result);
  //.map().join();
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
  const result=students.map((student)=>student.score)
  .sort((a,b)=>a-b)//sort: 오름차순
  .join();
  console.log(result);
}