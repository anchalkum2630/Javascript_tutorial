//to access web pages of any web application, you need a webserver. The web server will handle all the http request for the web application
//e.g-> IIS is a web server for ASP.NET web application and apache is a web server for PHP or Java web applications.
//Node.js provides capabilities to create your own web servwer which wil handle HTTP requests asynchronously. ou can use IIS or Apche to run Node.js web application but it iis recommended to use Node.js web server
const http=require("http");
const fs=require("fs");
//the http.createserver() method includes request and response parameters which is supplied by Node.js
//The request object can be used to get information about the content request eg- url,request header and data

const server=http.createServer((req,res)=>{
    //console.log(req.url);//without including url module ...i can use url and fevicon is is the icon of any site

    const data=fs.readFileSync("api.json","utf-8")
        //console.log(data);
        const obj=JSON.parse(data);

    if(req.url=="/"){
        res.end("hello from the home page side");   
    } 
    else if(req.url=="/about"){
        res.end("welcomer to about us page");
    }
    else if(req.url=="/contact"){
        res.write("welcomer to contact us page");
        res.end();//res.write can be used bt to send the reply we have to write res.end()
    }
    else if(req.url=="/api"){
        res.writeHead(200,{"content-type":"application/json"})
        res.end(obj[1].name);
            //res.end(obj[0]);
        }
        //res.write can be used bt to send the reply we have to write res.end()
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.end("<h1>404 error page doesn't exist<h1>");
     }
           
})
server.listen(3500,"127.0.0.1",()=>{
    console.log("listening to the port number 3500")//used by the devlepor to ackwonledged
});//(number,local_host server name)

//http response status codes indicate whether a specific http request has been successfully completed. responses are grouped in 5 classes:
// 1. Information responses(100-199)
// 2.successful responses(200-299)
// 3.redirects(300-399)
// 4.client errors(400-499)
// 5.server error(500-599)
