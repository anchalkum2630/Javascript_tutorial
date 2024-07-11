//1. convert to json
//2.add to another filer
//3. readfile
//4.again convert back to js obj 
//5. console.log
const fs=require("fs");
const { json } = require("stream/consumers");
const data={
    name:"anchal",
    age:20,
    father_name:"umesh pandit",
    hobby:"sleeping",
};
//convert to json
const JsonData = JSON.stringify(data);
//ADD TO ANOTHER FILE
fs.writeFile('json1.json',JsonData,(err)=>{
    console.log("done");
})
//read file
fs.readFile("json1.json","utf8",(err,data)=>{
    console.log(data);
    const org=JSON.parse(JsonData);
    console.log(org);
})
//again convert back to obj file
// API is the acronym for application programming interface,whgich is a software intermediary that allows two application to talk to each other.Each time you use an app like Facebook to send an instant message,or check the weather on your phone, you're using an API

