async function printTest() {
  
    // await라는 키워드를 가지고 있는 공간은 반드시 비동기함수를 핸들링 할 수 있는 async 표현 필요
  console.log("안녕하세요. 함수입니다!");
  
  //fetch(알을 품다) : 데이터를 요청하는 것
  //.json도 완성된 결과를 받으려면 기다려야 하는구나..

  try{
    //비동기 함수에 동기적 표현
  // 데이터가 fullfile되기 위해서는 3초정도 시간이 걸리기 떄문에
  // await를 이용해서 pending -> fullfill이 될 떄 까지 기다리기
  const result = await fetch("https://jsonplaceholder.typicode.coma/users");

  // .json도 비동기적으로 동작. fetch와 비슷해서 완료될 떄까지 기다려줘야함
  const users = await result.json();

  console.log(users);
  } catch (error) {
  if(error){
    console.log(error);
  }
}
// 동기적이 최우선 그 후로 비동기면 응답이 제일 빠른 것 부터 차례로 찍힘
//pending으로 찍히는 이유는 비동기여서
printTest();