/**
 * @version 1.0.0
 * @author ChangJun
 */

class EasyHttp{
    // get方法
    get(url){
        return new Promise((resolve,reject)=>{
            fetch(url)
                    .then(res=>res.json())
                    .then(data=>resolve(data))
                    .catch(err=>reject(err))
        })
    }

    // post方法
    post(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"POST",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                    .then(res=>res.json())
                    .then(data=>resolve(data))
                    .catch(err=>reject(err))
        })
    }

     // put方法
     put(url,data){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"PUT",
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify(data)
            })
                    .then(res=>res.json())
                    .then(data=>resolve(data))
                    .catch(err=>reject(err))

        })
    }
    // delete
    delete(url){
        return new Promise((resolve,reject)=>{
            fetch(url,{
                method:"DELETE",
                headers:{
                    'Content-type':'application/json'
                },
            })
                    .then(res=>res.json())
                    .then(data=>resolve("数据删除成功"))
                    .catch(err=>reject(err))
        })
    }
}