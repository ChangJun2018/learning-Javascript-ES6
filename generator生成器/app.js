
// 斐波那契数列
// (0,1,1,2,3,5)
function fib(max){
    var a=0;b=1;arr=[0,1]

    while(arr.length<max){
        [a,b]=[b,a+b]
        arr.push(b)
    }
    return arr;
}

console.log(fib(20))

function* fib1(max){
    var a=0,b=1,n=0;
    while(n<max){
        yield a/b ;
        [a,b]=[b,a+b]
        n++;
    }
    return
}

for(let  x of fib1(100)){
    console.log(x);
}
