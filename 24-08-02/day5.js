const people = [
    {
        name: '홍길동',
        age: 21,
    },
    {
        name: "홍길순",
        age: 30,
    }
];

const result = people.some(function (person){
    // if(person.age >= 30){
    //     return true;
    // } else {
    //     return false;
    // }
    return people.age >= 30;
})


console.log(result)


// 프로미스의 3가지 상태
// 요청중 pending (매달리다 요청하다)
// 성공 fullfill + ed (수행하다 + 했다)
// 실패 reject + ed (거절하다 + 되다)
