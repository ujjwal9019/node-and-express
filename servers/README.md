Topic to be covered in this Folder

1 - Server Creation  
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



2 = Url = 

Https stands for = hyper text transfer protocol secure 

www.ujjwal.dev stands for Domain - user Friendlyn Name of Ip address of my server

/about = path 

/about/1 = nested path 

about?myname=ujjwal&userid=1  = Url Query parameters

to parse a url first we need to install url package 
npm i url

than 
const url = require("url");


to parse a url means to extract path name  ,  query  ,  host name etc

  const Myurl = url.parse(req.url ,true);

  and in 
    console.log(Myurl); we get all the information about url 

    now we can extract query also because true return a object of query which we have pass

    and we can extract by using 

     case "/about" : 
            const username = Myurl.query.myname;
            res.end(`hii , ${username}`);
            break;


We can also redirect to exact pathname irresepective of query parameteres

        switch(Myurl.pathname){