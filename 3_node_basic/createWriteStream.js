const fs=require('fs');

// write & finish,
const writeStream=fs.createWriteStream('./writeme2.txt');
writeStream.on('finish',()=>{
    console.log('파일 쓰기 완료');

})

writeStream.write('이 글을 씁니다1\n');//하나의 버퍼퍼
writeStream.write('이 글을 씁니다2\n');
writeStream.write('이 글을 씁니다3\n');
writeStream.end();//finish 호출