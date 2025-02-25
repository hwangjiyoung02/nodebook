const fs=require('fs');
const zlib=require('zlib');
 
//파일 복사  
const readStream=fs.createReadStream('./readme_stream.txt',{highWaterMark:16});
const zlibStream= zlib.createGzip();//압축 스트림
const writeStream=fs.createWriteStream('./writeme4.txt');

// 16바이트가 쓰고 16바이트씩 읽는다.
readStream.pipe(zlibStream).pipe(writeStream);
