//해당 문제를 forEach로 변경하여 풀어주세요
let arr1 =  [10, 20, 30] 
let result1 = [];

arr1.forEach(item => {
    result1.push(item * 10);
});

console.log(`결과값 [${result1}]`);

// 결과 값: [100, 200, 300] 출력해주세요 

let arr2 =  [10, 22, 33]
let result2 = [];

arr2.forEach(item => {
    if(item % 5 === 0) result2.push(item);
})

console.log(`결과값 [${result2}]`);
// 5의 배수를 찾아 반환하세요
// 해당 로직 작성해주세요

// 결과값 [10]