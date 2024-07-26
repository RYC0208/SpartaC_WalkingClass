let uninitialized;
console.log(uninitialized); 
// 결과값 <undifined> 변수를 선언은 했지만 값을 입력하지 않았기 때문에
// null 일 수도 있을 것 같은데 이유는 정확히 모르겠네요

//< 빈칸 > apple = "사과";
// apple = "바나나"; // TypeError: Assignment to constant variable 
// const는 값이 재할당 되지 않는 상수?이기 때문에 에러 메시지를 보면 const 타입인 것 같다.

let lotto = [3,8,13,19,21,32];
console.log(lotto[3]); 
// 결과값 <19> 배열의 인덱스는 1이 아닌 0부터 시작하기 때문

let mySchedule = "";
console.log(mySchedule || false); // < false > 빈 문자열을 falsy한 값으로 평가해서?
console.log(!!mySchedule); // < false > !를 두번 사용하여 true -> false -> true 순으로 되돌아옴