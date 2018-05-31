// 增强对象字面量
// 解决的问题：缩减代码

// new Object(); {}
// new Array();[]



function createBookShop(inventory) {
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce((total,book)=>total+book.price,0)
        },
        priceTitle(title){
            return this.inventory.find(book=>book.title===title).price;
        }
    }
}

// 书籍购物车
const inventory=[
    {title:"Javascript高级程序设计",price:80},
    {title:"Javascript权威指南",price:99},
]

// 添加购物车
const bookShop=createBookShop(inventory);
// 打印书总价
console.log(bookShop.inventoryValue());
// 打印特定书的价格
console.log(bookShop.priceTitle("Javascript权威指南"));