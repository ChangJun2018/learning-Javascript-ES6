/**
 * 数据结构：map
 * 键值对：与对象不同的是键和值可以是任何类型
 */

 const map1=new Map()

 const key1="这是键1",
           key2={},
           key3=function(){}


map1.set(key1,'这是第一个键的值')
map1.set(key2,'这是第二个键的值')
map1.set(key3,'这是第三个键的值')

// 根据key获取对应的value
console.log(map1.get(key1))

// 获取对应的value数量
console.log(map1.size)

// for..of遍历map1
for(let [key,value] of map1){
    console.log(`${key}=${value}`)
}

// 只拿到key
for(let key of map1.keys()){
    console.log(key)
}
// 只拿到value
for(let value of map1.values()){
    console.log(value)
}

map1.forEach((value,key)=>{
    console.log(`${key}=${value}`)
})

// 将map1转化为数组

const keyValueArray=Array.from(map1);
console.log(keyValueArray);


// key转化数组
const keyValueArray1=Array.from(map1.keys());
console.log(keyValueArray1);

// value转化数组
const keyValueArray2=Array.from(map1.values());
console.log(keyValueArray2);

