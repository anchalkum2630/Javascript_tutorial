// <!-- Javascript And Classes -->
// <!-- Object-> collection of properties and methods -->
// <!-- ex-> promises,tolowercases,etc -->
// <!-- why we use OOPs -> -->
// <!-- Constructor function & prototypes & Classes & Instances(new,this) -->
// <!-- 4 pillars-> abstraction,polymorphism,encapsulation,inheritance -->
const user={
    username:"Anchal",
    login:8,
    signed:true,
    getUserDetails:function(){
        console.log("got user detail from database");
        console.log(`login:${this.login}`)
        console.log(this)
    }
}
console.log(user.username)
console.log(user.getUserDetails())
console.log(this)

// const promiseOne=new Promise()
// const date= new Date()

function User(username,login,signed){
    this.username=username;
    this.login=login;
    this.signes=signed;
    return this
    // by default return v hota h
}
// const userOne=User("hitesh",12,true)
// const userTwo=User("anchal",4,true)
// // value overright
// console.log(userOne)

const userOne= new User("hitesh",12,true)
const userTwo= new User("anchal",4,true)
console.log(userOne)
console.log(userTwo)
console.log(userOne.constructor)

