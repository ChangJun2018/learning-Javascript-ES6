const students=[
    {name:"ChangJun",age:"18"},
    {name:"ChangJun2",age:"30"},
    {name:"ChangJun3",age:"6"},
    {name:"ChangJun4",age:"22"},
];

let every=students.every((student)=>{
    return student.age>18
})

let some=students.some((student)=>{
    return student.age>18
})

console.log(every)
console.log(some)



// 判断表单中所有input的内容长度 是否大于0



