const fs=require('fs');
const readStream=fs.createReadStream ('readme_stream.txt',{highWaterMark:16});// 16바이트씩 끊어서 보내줌


const data=[];
readStream.on('data',(chunk)=>{
    data.push(chunk);
    console.log('data',chunk,chunk.length);
});

readStream.on('end',()=>{
    // 마지막에 end에서 최종적으로 파일을 다 읽어줌
    console.log('end',Buffer.concat(data).toString());
});


readStream.on('error',(err)=>{
    console.log('error:',err);
});
// 스트르미의 장점
// - 메모리가 16바이트만 있으면 됨 대용량은 stream이 거의 필수 ex) 비디오 