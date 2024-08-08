let n = 9;

function fuc(n) {
    let answer = "";
    for(let i=1; i <= n; i++){
        i % 2 === 0 ? answer += "박" : answer += "수";
    }
    return answer;
}
console.log(fuc(n));