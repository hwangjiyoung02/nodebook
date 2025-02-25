const { error } = require('console');
const http=require('http');

http.createServer((req,res)=>{
    res.write('<h1>hello node!</h1>');
    
    res.write('<h1>hello node!</h1>');
    
    res.end('<h1>hello node!</h1>');


})

    .listen(8080);
    server.on('listening',()=>{
        console.log('8080port listening');});
    server.on('error',(error)=>{
        console.error(error);
    })