// # 문제 4. 함수 사용하기

const lion = {
    name : "심바",
    age : 3,
    Protagonist : true,
    line : "하쿠나마타타"   
}

function incrementAge(lion) {
    
    lion["age"] += 1;

    return lion
}
console.log(incrementAge(lion));
