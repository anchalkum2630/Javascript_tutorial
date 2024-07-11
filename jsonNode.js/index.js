// // JSON stands for javascript object Notification. JSOn is lightweight format for storing and transportiong DataTransfer.
// // JSON is often used when data is sent from a server to a web page.
 const bioData={
     name:"anchal",
     age:20,//number doesn't frequire ""
     hobby:'cooking'
 }
 console.log(bioData);//to call an object
 console.log(bioData.name);

//to covert object to json
const jsonData=JSON.stringify(bioData);//stringify is used to convert object to json
//difference between object and json is in object keyword doesn't consist of "" whereas json keyword consist of ""

console.log(jsonData);
console.log(jsonData.age);
//to convert json to object
const objData=JSON.parse(jsonData);//parse used to convert json to obj
console.log(objData);