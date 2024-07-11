//2ND WAY
//Reading from a Stream
//Create a readable stream
//Handle stream events-->data,end and error
//COMPLETE DOWNLOAD AND SHOW
const fs=require("fs");
const http=require("http");
const server=http.createServer();
server.on("request",(req,res)=>{
   /*
   first way

   //var fs=require("fs");
    fs.readFile("stream.txt","utf-8",(err,data)=>{
        if(err) return console.log(err);
        res.end(data.toString());
    });*///constant api

    /*
    second way

    const rdstream=fs.createReadStream("stream.txt");
    rdstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
    });
    rdstream.on('end',()=>{
        res.end();
    });
    rdstream.on('error',(err)=>{
        console.log(err);
        res.end("file not found");//file nhi milega tho ye print hga
    });//all this can be done by single line using stream.pipe()
    */
   //third way
   const rstream=fs.createReadStream("stream.txt");
   rstream.pipe(res);//faster response
   

    
});
server.listen(7000,"127.0.0.1");