 const http = require("http");
const fs = require("fs");
//  to create server
// from this you can get many information about serever like kha se request aa rhi hai uska url ip address etc or hum usse log file me save krwa sakte hai
 const myserver = http.createServer((req , res) => {
    const log = `${Date.now()} ${req.url}: New Request Reciived at time\n`;
    fs.appendFile("log.txt" , log , (err , data) => {
        switch(req.url){
            case "/" : res.end("hompage");
            break;
            case "/about" : res.end("about")
            break;
            default:
                res.end("404 Not Found"); 
        }
    })
    
 });

//  this is to create port 
 myserver.listen(8000 , () => {
console.log("Server Started")    
 })



