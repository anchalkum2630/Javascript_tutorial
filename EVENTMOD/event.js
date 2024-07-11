//Events Module
//Node.js has a built-in module,called "Events",
//Where you can create-, -fire,and listen for- your own events.
//Example1->Registring for the eventsw to be fired only one time using once.
//Example 2->Create an event emmiter instance and register instance and register a couple of callbacks
//Example 3->Registring for the event with callback parameters
const EventEmitter=require("events");//made a class
//or we can write coonst event=require("events");then to call we have to write  new event.EventEmitter();
const event = new EventEmitter();//call=emit

/*event.on("saymyname",()=>{//here we are defining saymyname
    console.log("my name is anchal");
});
event.on("saymyname",()=>{//here we are defining saymyname
    console.log("my name is Roshni");
});
event.on("saymyname",()=>{//here we are defining saymyname
    console.log("my name is Ronak");
});*/
event.on("checkpage",(sc,msg)=>{
    console.log(`status code is ${sc},and the page is ${msg}`);
});

//event.emit("saymyname");//calling saymyname 
event.emit("checkpage",200,"ok");

