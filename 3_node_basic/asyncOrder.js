//비동기
//동기는 40개의 작업
//비동기는 네개의 작업 10개의 묶음이 도이에 실행(다같이 백그라운드로 들어감감)

const fs=require('fs').promises; //then, catch가능 // 비동기라 순서대로 실행되지 않음

async function main(){
    let data=await fs.readFile('./readme.txt');
    console.log('1번',data.toString());

    await fs.readFile('./readme.txt');
    console.log('2번',data.toString());
  
    await fs.readFile('./readme.txt');
    console.log('3번',data.toString());

    await fs.readFile('./readme.txt');
    console.log('4번',data.toString());
}
main();


// fs.readFile('./readme.txt')
//     .then((data)=>{
//         console.log('1번',data.toString());
//         return fs.readFile('')
//     })
//     .then((data)=>{
//         console.log('2번',data.toString());
//         return fs.readFile('./readme.txt')
//     })
//     .then((data)=>{
//         console.log('3번',data.toString());
//         return fs.readFile('./readme.txt')
//     })
//     .then((data)=>{
//         console.log('4번',data.toString());
//         return fs.readFile('./readme.txt')
//     })
//     .catch((err)=>{
//         throw err;
//     });

