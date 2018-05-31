let student={
    name:"changjun",
    age:"18",
    email:"779199489@qq.com"
}

const {age,name,email} =student;
console.log(age,name,email)


const names=["changjun","changjun2","changjun3"]
// const [name1,name2,name3]=names;
// console.log(name1,name2,name3);

// 结合展开运算符
const [name1,...rest]=names;
console.log(name1);
console.log(rest);

// 将数组转化为对象
const point=[
    [4,5],
    [10,1],
    [0,40]
]
// [{x:4,y:5},{x:10,y:1},{x:0,y:40},]

let newpoints=point.map((x,y)=>{
    // const x=pair[0];
    // const y=pair[1];
    // const [x,y]=pair;
    return {x,y}
})
console.log(newpoints)