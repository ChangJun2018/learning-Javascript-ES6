/**
 * @version 2.0.0
 * @author ChangJun
 */

class EasyHttp{
    // get 
    async get(url){
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }
 
    // post
    async post(url,data){
       const response = await fetch(url,{
          method:"POST",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(data)
        });
       const resData = await response.json();
       return resData;
   }
 
   // put
   async put(url,data){
       const response = await fetch(url,{
          method:"PUT",
          headers:{
            'Content-type':'application/json'
          },
          body:JSON.stringify(data)
        });
        const resData = await response.json();
        return resData;    
   }
 
   // delete
   async delete(url){
       const response = await fetch(url,{
         method:"DELETE",
         headers:{
           'Content-type':'application/json'
         }
       })
       const resData = await "数据删除成功!";
       return resData;
   }
  }