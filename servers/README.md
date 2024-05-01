To create server 

 const http = require("http");


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



 to create port

  myserver.listen(8000 , () => {
console.log("Server Started")    
 })



We can create log file which keep track of the user by  we can find its ip , date  , time , url and many more by req  

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