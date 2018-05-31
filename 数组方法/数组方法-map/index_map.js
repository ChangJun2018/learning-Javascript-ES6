//将numbers数组中的值以双倍的形式放到doubledNumbers数组中
let numbers=[1,2,3];
let doubledNumbers=[];
//es5
for(let i=0;i<numbers.length;i++){
    doubledNumbers.push(numbers[i]*2)
}
console.log(doubledNumbers);
for(let i=0;i<doubledNumbers.length;i++){
    console.log(doubledNumbers[i]);
}
//Es6
let doubled=numbers.map(function (number) {
    return number*2
});
console.log(doubled);
doubled.forEach(function (number) {
    console.log(number)
});

// 将对象数组中某个属性的值存储到B数组中
let cars=[
    {model:"Buick",price:"CHEAP"},
    {model:"BMW",price:"expensive"}
];

let prices=cars.map(function (car) {
    return car.price
});
console.log(prices);