// let age = 20;
// let isMember = true;

// // 나이가 18세 이상이고 회원이어야 접근 가능
// if ( age >= 18 && isMember) {
//     console.log("접근 허용");
// } else {
//     console.log("접근 불가");
// }

// let isLoggedIn = false;
// let isNotAdmin = true;

// // 로그인 상태이거나 관리자여야 접근 가능
// if ( isLoggedIn && !isNotAdmin) {
//   console.log("관리자 페이지에 접근 가능");
// } else {
//   console.log("관리자 페이지에 접근 불가");
// }

// let purchaseAmount = 100;
// let isGoldMember = false;
// let isSilverMember = true;

// // 구매 금액이 100 이상이고 골드 회원이거나 실버 회원이면 할인을 적용
// if ((isGoldMember === true || isSilverMember === true) && purchaseAmount >= 100 ) {
//     console.log("할인 적용");
// } else {
//     console.log("할인 미적용");
// }

// const 회원명부 = [
//     {
//       이름: "홍길동",
//       나이: 25,
//       성별: "male",
//     },
//     {
//       이름: "홍길순",
//       나이: 30,
//       성별: "female",
//     },
//     {
//       이름: "홍길자",
//       나이: 40,
//       성별: "female",
//     },
//   ];
// const female35 = 회원명부.filter(function(회원){
//     // if(회원.나이 >= 35 && 회원.성별 === "female"){
//     //     return true;
//     // } else {
//     //     false;
//     // }
//     return 회원.나이 >= 35 && 회원.성별 === "female";
// });
// console.log(female35);
//   // filter 함수를 사용해서, 35세 이상의 사람 중 여자만 필터링

//   const firstFemale = 회원명부.find(function(회원){
//     if(회원.성별 === "female"){
//         return true;
//     } else {
//         return false;
//     }
//   })

//   console.log(firstFemale);

//   const arr = ["choco", "banana", "kiwi", "apple"];
//   arr.sort((a, b) => b - a); // 내림차순 정렬

//   console.log(arr);

function sortArray(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자2 - 인자1;
  });
  return result;
}
function sortArray2(arr) {
  // 여기에 sort를 사용하여 작성하세요
  const result = arr.sort(function (인자1, 인자2) {
    return 인자1.localeCompare(인자2);
  });
  return result;
}

// 예시 출력
console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']


function sortArray3(arr) {
  return arr.sort((a, b) => a - b);
}
function sortArray4(arr) {
  return arr.sort((a, b) => a.localeCompare(b));
}

// 예시 출력
console.log(sortArray([3, 1, 4, 1, 5, 9])); // 출력: [1, 1, 3, 4, 5, 9]
console.log(sortArray2(["바나나", "사과", "포도"])); // 출력: ['바나나', '사과', '포도']
