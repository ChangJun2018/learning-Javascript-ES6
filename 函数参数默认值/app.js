/**
 * 函数参数默认值
 * 优化代码
 */

//  function makeAjaxRequest(url,method){
//     if(!method){
//         method="GET";
//     }
//     return method
//  }

function makeAjaxRequest(url,method="GET"){
    return method
 }
 
 console.log(makeAjaxRequest("52chinaweb.com"))
 console.log(makeAjaxRequest("52chinaweb.com","method"))