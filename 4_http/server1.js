const http=require('http');
const fs=require('fs').promises;

//한글 표시를 위해 charset을 utf-8
http.createServer(async (req,res) =>{
    try{
        const data=await fs.readFile('./server.html');
        res.writeHead(200,{'content-type':'text/plain; charset=utf-8'});
        res.end(data);//응답을 종료하고 데이터를 클라이언트에게 전송하는 역할
    
    }catch(err){
        console.error(err);
        res.writeHead(500,{'content-type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})

//클라이언트에 공개할 포트번호
// .listen(8080,()=>{
//     //콜백 함수
//     console.log('8080포트에서 서버 대기중');
// })

//이벤트 리스너 붙이기
server.listen(8080);
server.on('listening',()=>{
    console.log('8080번 포트에서 서버 대기 중입니다!');
});
server.on('error',(error)=>{
    console.error(error);
})

//실무에서 이런 식으로 서버를 여러 개 띄우는 일은 드뭄