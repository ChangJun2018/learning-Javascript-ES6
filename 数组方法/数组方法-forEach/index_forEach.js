let colors=['red','blue','green'];
//ES5遍历数组方法
for(let i=0;i<colors.length;i++){
    console.log(colors[i]);
}
//ES6forEach方法
colors.forEach(function (color) {
    console.log(color);
});

//练习：遍历数组中的值，并计算总和
let numbers=[1,2,3,4,5,6];
let sum=0;
numbers.forEach(function (number) {
   sum+=number;
});
console.log(sum);