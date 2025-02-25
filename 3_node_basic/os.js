const os=require('os')
// console.log(os.cpus());//코어개수를 알 수 있음음
console.log(os.freemem());//495038464
console.log(os.arch());

const path=require('path');
//window \,\\
//linux, mac /(posix)
//경로 처리를 알아서 처리해줌'
//절대 경로 무사사
console.log(path.join(__dirname,'..','/repl.js'));//C:\Users\hjy02\study\nodejs\nodebook\repl.js
//절대 경로로 감감
console.log(path.resolve(__dirname,'..','/repl.js'));//C:\repl.js


console.log('운영체제 정보---------------------------------');
console.log('os.arch():', os.arch());
console.log('os.platform():', os.platform());
console.log('os.type():', os.type());
console.log('os.uptime():', os.uptime());
console.log('os.hostname():', os.hostname());
console.log('os.release():', os.release());

console.log('경로------------------------------------------');
console.log('os.homedir():', os.homedir());
console.log('os.tmpdir():', os.tmpdir());

console.log('cpu 정보--------------------------------------');
console.log('os.cpus():', os.cpus());
console.log('os.cpus().length:', os.cpus().length); // 코어의 갯 

console.log('메모리 정보-----------------------------------');
console.log('os.freemem():', os.freemem());
console.log('os.totalmem():', os.totalmem());
console.log('os 에러 코드',os.constants)