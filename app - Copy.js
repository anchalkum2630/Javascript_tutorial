import express from 'express';
const app=express();
let PORT=7500;
app.get("/",(req,res)=>{
    res.send("i am here!");
});
const start = async()=>{
    try{
        app.listen(PORT,()=>{
            console.log(`I am live at ${PORT}`);
        });
    }catch(error){}
};
//console.log("hy")//video 23 of thappa again i have to see