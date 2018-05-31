//假定有一个对象数组A，找到符合条件的对象

let users=[
    {name:"Jill"},
    {name:"Alex"},
    {name:"ChangJun"}
];
let user;

for (let i=0;i<users.length;i++){
    if (users[i].name==="ChangJun"){
        user=users[i];
        break;
    }
}
console.log(user);

//Es6
let user2=users.find(function (user) {
    return user.name==="ChangJun"
});
console.log(user2);

