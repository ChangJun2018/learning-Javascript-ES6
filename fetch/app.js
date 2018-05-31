// fetch API 基于promise的请求方法


// let url="https://jsonplaceholder.typicode.com/posts"

// fetch(url)
//         .then(response=>response.json())
//         .then(data=>console.log(data))


document.getElementById("button1").addEventListener("click",getText);
document.getElementById("button2").addEventListener("click",getJson);
document.getElementById("button3").addEventListener("click",getExternal);

console.log("123")
// 获取本地文本数据
function getText(){
    fetch("./text.txt")
        .then((res)=>res.text())
        .then(data=>{
            console.log(data)
            document.getElementById('output').innerHTML=data;
        })
}

// 请求本地json数据
function getJson(){
    fetch("./posts.json")
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            document.getElementById('output').innerHTML=data[0].body;
        })
}

// 请求网络接口

function getExternal(){
    fetch("https://api.github.com/users/ChangJun2018/repos")
        .then((res)=>res.json())
        .then(data=>{
            console.log(data)
            let output=''
            data.forEach((item)=>{
                output+=`<li>${item.name}</li><li>${item.description}</li>`
            })
            document.getElementById('output').innerHTML=output;
        })
}



