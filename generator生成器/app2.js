// function* numbers(){
//     yield
// }

// const gen=numbers();

// console.log(gen.next())


// 实现ID自增

function* creatIds(){
    let index=1;
    while(true){
        yield index++;
    }
}

const gen=creatIds()

for(let i=0;i<100;i++){
    console.log(gen.next().value)
}