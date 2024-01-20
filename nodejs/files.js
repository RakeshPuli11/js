const fs = require("fs");


//                          non blocking   asynchronous

            // fs.readFile('file.txt','utf8',(err,data)=>{
            //     console.log(err,data)
            // })

            // fs.writeFile('file2.txt',"file 2 data",()=>{
            //     console.log("done writing")
            // })

            
const x = fs.readFileSync('file.txt')
console.log(x.toString())
console.log("asynchronous")