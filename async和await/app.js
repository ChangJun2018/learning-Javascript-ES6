/**
 *  async & await
 */

// async function myFun(){

//     const promise=new Promise((resolve,reject)=>{
//         setTimeout(()=>resolve("Hello ChangJun!"),2000)
//     })

//     const error=false;
//     if(!error){
//         // return "hello ChangJun"
//     // 等待resolve执行完毕之后才回执行
//     const res=await promise;
//     return res
//     }else{
//         await Promise.reject(new Error("error:报错了！"))
//     }
// }

// myFun().then((data)=>{
//     console.log(data)
// })

// 请求数据
async function getUsers(){ 
        const response=await fetch("http://jsonplaceholder.typicode.com/users");
        const data=response.json();
        return data;
 }

 getUsers().then(data=>{
     console.log(data)
 })