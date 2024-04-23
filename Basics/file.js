const fs = require("fs");

//syncrohnous
// fs.writeFileSync('./text.txt' , "hey there");

//asynchronous
// fs.writeFile('./test.txt' ,"testing" , (err) => {})


//syncrohnous
// const result = fs.readFileSync("./contacts.txt" , "utf-8")
// console.log(result);

//asynchronous

// fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
//     if(err){
//         console.log("error" , err);
//     }
//     else{
//         console.log(result);
//     }
// })

// fs.appendFileSync("./contacts.txt" , ` hey there /n`   );

//blocking opertaion 
// console.log("1") ; 

// const result  = fs.readFileSync("./contacts.txt" , "utf-8")
// console.log(result)

// console.log("2")


//Non blocking operations 

// console.log("1") ; 

//  fs.readFile("./contacts.txt" , "utf-8" , (err , result) => {
//     if(err) {
//         console.log(err , "error")

//     }
//     else{console.log(result);}
    

//  })


// console.log("2")