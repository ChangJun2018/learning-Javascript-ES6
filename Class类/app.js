/**
 * class
 * 万事皆对象
 */

// function Languange(options) { 
//     this.name=options.name
//  }

//  Languange.prototype.look=()=>{
//      return "Look!"
//  }
//  const languange=new Languange({name:"Javascript"});

//  console.log(languange)
//  console.log(languange.look())

class Languange{
    constructor({name,tip}){
        this.name=name;
        this.tip=tip
    }
    look(){
        return "look!"
    }
}

const languange=new Languange({name:"Javascript",tip:"Javascript是世界上最好的语言！"})

console.log(languange);


class Book extends Languange{
    constructor(options){
        super(options)
        this.title=options.title
    }
}

const book=new Book({title:"Javascript高级程序设计",name:"Javascript",tip:"Javascript是世界上最好的语言！"})

console.log(book);
console.log(book.look());