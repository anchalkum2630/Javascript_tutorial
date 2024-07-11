// <!-- A promise is an object representing the eventual completion or failure of an asynchronous operation.Since most people are consumers of already created promises. -->
const promiseOne=new Promise(function(resolve,reject){
      //Do an async task
      //Db calls,cryptogrsphy,network call
      setTimeout(function(){
        console.log('async task is complete');
        resolve()
      },1000)
})

promiseOne.then(function(){
    console.log("promise consume")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("happy ")
        resolve()
    },1000)
}).then(function(){
    console.log("anchal")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@ex.com"})
    },1000)
})
 
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"anchal",password:"123"})
        }
        else{
            reject('Error:Something went wrong')
        }
    },1000)
})
promiseFour
.then((user)=>{
     console.log(user)
     return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("The promise is either resolved or reject")
})
const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"123"})
        }
        else{
            reject('ERROr:Js went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    } catch(error){
        console.log(error)
    }
}
consumePromiseFive()

// async function getalluser(){
//     try{
//         const response=await fetch("https://jsonplaceholder.typicode.com/users");
//         console.log(response)
//         const data=await response.json()
//         console.log(data)
//     }
//     catch{
//         console.log("E: ",error)
//     }
// }
// getalluser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log("error")
})
