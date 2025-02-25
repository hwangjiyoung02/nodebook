const crypto=require('crypto');

const pass ='pass';
const salt='salt';
const start=Date.now();

//해시와 100만번 - 8개-> 몇초걸리는지 확인하기
//동시에 몇개ㅅ씩 돌아가는지 규칙을 발견할 수 있음
//set uv_threadpool_size=8라고 할 수 있음
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('1',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('2',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('3',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('4',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('5',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('6',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('7',Date.now()-start);
});
crypto.pbkdf2(pass,salt,1_000_000,128,'sha512',()=>{
    console.log('8',Date.now()-start);
});