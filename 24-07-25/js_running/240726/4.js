
//배열 API map 활용
var arr1 = [10, 20, 30]
// arr의 각 요소에 10을 곱한 새로운 배열을 생성해주세요
// 결과 값: [100, 200, 300]을 출력해주세요

const NewArr1 = arr1.map(num => num * 10);
console.log(NewArr1);

//배열 API filter 활용
var arr2 = [10, 22, 33]
// 5의 배수를 찾아 반환해주세요
// 결과값 [10]을 출력해주세요

const NewArr2 = arr2.filter(num => num % 5 === 0);
console.log(NewArr2);

const numbers = [5, 10, 15, 20, 25];
// 크기가 15보다 큰 숫자의 값을 반환하여 출력해주세요
// 출력값 [20, 25]

const NewNumbers = numbers.filter(num => num > 15);
console.log(NewNumbers);


var arr3 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 4 이상인 값을 반환하여 출력해주세요

const newArr3 = arr3.filter(string => string.length >= 4);
console.log(newArr3);
 

var arr4 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 요소의 문자열 길이가 홀수인 요소만 반환하여 출력해주세요

const newArr4 = arr4.filter(string => string.length % 2 !== 0)
console.log(newArr4);

var arr5 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
// 오름차순으로 정렬하여 출력해주세요

const newArr5 = arr5.sort();
console.log(newArr5);

var student1 =[
      {name:"이재상", age: 25 },
      {name:"정윤오", age: 30 },
      {name:"김준현", age: 12312}
];

// age를 이용하여 내림차순으로 정렬하고 출력해주세요
const newStudent1 = student1.sort((a,b) => b.age - a.age);
console.log(newStudent1);


var student2 =[
      {id : 1, name:"이재상"},
      {id : 2, name:null},
      {id : 3, name:"김준현"}
];
// 객체 배렬에서 name 속성이 null인 객체가 있는지 판별을 확인하는 코드를 작성하고 반환값을 출력해주세요

const nullStudent = student2.filter(student => student.name === null )
console.log(nullStudent);

var arr6 = ["banana", "kiwi", "mango", "strawberry", "lime", "orange", "plum", "cherry"];
// 문자열 길이가 5를 초과하는 요소가 있는지 검사하는 코드를 작성하고 반환값을 출력해주세요.
const newArr6 = arr6.filter(string => string.length > 5)
console.log(newArr6);


var arr7 = ["banana", "kiwi", "mango"];
// kiwi 와 manggo 사이에 새로운 요소를 삽입하는 코드를 작성하고 출력해주세요
arr7.splice(2, 0, "apple");

console.log(arr7);

var arr8 = [1, 5, -3, 10, 0, 8];

// 배열에 음수가 하나라도 있는지 판별하는 코드를 작성하고 반환값을 출력해주세요
const newArr8 = arr8.find(num => num < 0 , true)
console.log(newArr8 ? "음수가 있습니다" : "음수가 없습니다.");


var arr9 = [1, 5, -3, 10, 0, 8];
var arr10 = [-1, -4, -7, -11, -24];
// 모든 숫자가 음수인지 판별하는 코드를 작성하고 반환값을 출력해주세요

var newArr9 = arr9.every(num => num < 0 , true)
var newArr10 = arr10.every(num => num < 0 , true)

console.log(newArr9 ? "모두 음수입니다." : "아닙니다.");
console.log(newArr10 ? "모두 음수입니다." : "아닙니다.");