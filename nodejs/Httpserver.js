const http = require('http');
const fs = require('fs')
const port = process.env.PORT || 3001;
const server = http.createServer((req,res)=>{
   // console.log(req)// no need of this
    res.setHeader("Content-Type", "text/html");
    if(req.url=='/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    // res.end("<h1> hi bro </h1>");
    }else if(req.url=='/about'){
        res.statusCode = 200;
        const data = fs.readFileSync('about.html')
        res.end(data.toString());
    }
});

server.listen(port,()=>{
    console.log(`server is listening on port : ${port}`);
});