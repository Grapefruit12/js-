//이 api들은 현업에서 프로젝트 할때 유용하게 쓰일뿐만 아니라,
//기술면접에서도 많이 물어봐진다
//한가지라도 이해가 안된다면 그냥 넘어가지말고 꼭 api를 읽고 직접 console.log추가해서 써보면서 이해를 하고 손에 익혀서 다음단계로 가자


// Q1. make a string out of an array: 배열->string으로 바꿔라
{
    const fruits = ['apple', 'banana', 'orange'];
    const result=fruits.join();
    console.log(result);
  }
  
  // Q2. make an array out of a string: string->배열
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result=fruits.split(',');//,로 구분(split은 구분자를 꼭 넣어주기! 안넣으면 하나의 인덱스로 됨)
    console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result=array.reverse();
    console.log(result);
    console.log(array);//reverse()는 array자체도 반대로 바꿈
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result=array.slice(2,5);
    /*
    .slice(잘라낼꺼 시작index,마지막번호(배제됨))
    :원하는 부분의 index시작~마지막return함,다만 끝index는 제외됨)
    */
    console.log(result);
    console.log(array);
    //splice:배열자체를 수정
    //slice:배열에서 원하는 부분만 return해준다(배열자체는 그대로있음)
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
  //: find() 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환합니다. 
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
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
    const result=students.some((student)=>student.score<50);
    console.log(result);
  }
  
  // Q9. compute students' average score
  {
    const result=students.reduce((prev,curr) => prev+curr.score,0);
    console.log(result/students.length);
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
    const result=students
    .map((student)=>student.score)
    .join();
    console.log(result);
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
    const result=students
    .map((student)=>student.score)
    .sort((a,b)=>a-b)
    .join();
    console.log(result);
  }