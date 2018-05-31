//假定有一个对象数组A，获取数组中指定类型的对象放到B数组中
let porducts=[
{name:"ChangJun",age:"21"},
{name:"ChangJun2",age:"22"},
{name:"ChangJun3",age:"21"},
{name:"ChangJun4",age:"22"},
];

//ES5实现方式
let filterporducts=[];
for(let i=0;i<porducts.length;i++){
    if(porducts[i].age==="21"){
        filterporducts.push(porducts[i]);
    }
}
console.log(filterporducts);
filterporducts.forEach(function (product) {
    console.log(product);
});

//ES6实现方式
let filter2=porducts.filter(function (product) {
    return product.age==="22";
});
console.log(filter2);

//假定有一个对象数组，过滤掉不满足以下条件的对象
// 条件：年龄：21 学号大于2016002446，成绩大于90

let students=[
    {name:"ChangJun",age:"21",num:"2016002448",score:95},
    {name:"ChangJun2",age:"22",num:"2016002480",score:60},
    {name:"ChangJun3",age:"21",num:"2016002410",score:55},
    {name:"ChangJun4",age:"22",num:"2016002400",score:75},
];

let students2=students.filter(function (student) {
   return student.age==="21" && student.num<"2016002446" && student.score<90
});
console.log(students2);

//假定有两个数组，根据A中id值，过滤掉B数组中不符合的数据
let post={id:4,title:"Javascript"};
let comments=[
{postId:4,content:"Angular4"},
{postId:2,content:"Vue.js"},
{postId:3,content:"React.js"},
{postId:4,content:"Node.js"},
];

function commentsForPost(post,comments) {
    return comments.filter(function (comment) {
        return comment.postId===post.id
    })
}

console.log(commentsForPost(post, comments));