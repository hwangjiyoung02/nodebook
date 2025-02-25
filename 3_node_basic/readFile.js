const fs=require('fs').promises; //then, catch가능 // 비동기라 순서대로 실행되지 않음

fs.readFile('./readme.txt')
    .then((data)=>{
        console.log(data);
        console.log(data.toString());
    })
    .catch((err)=>{
        throw err;
    });


fs.writeFile('./writeme.txt','글이 입력됩니다.')
    .then(()=>{
        return fs.readFile('./writeme.txt');
    })
    .then((data)=>{
        console.log(data.toString());
    })
    .catch((err)=>{
        throw err;
    })