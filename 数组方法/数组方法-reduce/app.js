// 计算数组中所有值的和

let numbers=[15,20,30,45]

let sumValue=numbers.reduce((sum,number)=>{
    return sum+number
},0)
console.log(sumValue)

// 将数组中某个对象的属性抽离到另外一个数组中去

const students=[
    {name:"changjun"},
    {name:"wuxiaohong"},
    {name:"nixiaolei"}
];
let studentNames=students.reduce((names,student)=>{
        names.push(student.name)
        return names;
},[]);
console.log(studentNames);


// 判断字符串中的括号是否对称

const verify=function  balancedParens(string) { 
    return !string.split("").reduce((previous,char)=>{
        if(previous<0){return previous}
        if(char=="("){return ++previous};
        if(char==")"){return --previous};
        return previous;
    },0)
 }
 console.log(verify("(((())"))