 const http = require("http");
const fs = require("fs");
const url = require("url");
//  to create server
// from this you can get many information about serever like kha se request aa rhi hai uska url ip address etc or hum usse log file me save krwa sakte hai
 const myserver = http.createServer((req , res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()} ${req.url}: New Request Reciived at time\n`;
    // Now we can extract query parameter by writing true
  const Myurl = url.parse(req.url ,true);

    console.log(Myurl);
    fs.appendFile("log.txt" , log , (err , data) => {
//    We can now redirect to exact pathname irresepective of query parameteres
        switch(Myurl.pathname){
            case "/" : res.end("hompage");
            break;
            case "/about" : 
            const username = Myurl.query.myname;
            res.end(`hii , ${username}`);
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



