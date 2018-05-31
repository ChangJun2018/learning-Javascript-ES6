//展开运算符
//更快，更便捷的操作数组
// function addNumbers(numbers){
//     return numbers.reduce((sum,number)=>{
//         return sum+number
//     },0)
// }

function addNumbers(...numbers){
    return numbers.reduce((sum,number)=>{
        return sum+number
    },0)
}
console.log(addNumbers(1,2,3,1,2,8,9))

let names=["changjun","wuxiaihong","nixiaolei"];
let names2=["changjun2","wuxiaihong2","nixiaolei2"];
let names3=[...names,...names2]
console.log(names3)


function validateBookList(...items){
    if(items.indexOf("Javascript设计模式")<0){
        return ["Javascript设计模式",...items];
    }
    return items;
}

console.log(validateBookList('Javascript权威指南','Javascript高级程序设计',"Javascript数据结构与算法"))


