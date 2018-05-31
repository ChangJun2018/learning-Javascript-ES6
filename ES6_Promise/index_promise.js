/*
* 构造函数：Promise
* */
/*Promise三种状态
* unresolved 等待任务完成
* resolved 任务完成没有出现问题
* rejected 任务完成但出现问题
* */
let promise=new Promise((resolve,reject)=>{
    // resolve();
    reject();
});

promise.then(()=>{
    console.log("成功！")
}).then(()=>{
    console.log("成功！成功！")
}).catch(()=>{
    console.log("错误")
})