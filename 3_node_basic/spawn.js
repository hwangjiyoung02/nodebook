const spawn= require('child_process').spawn;
const process= spawn('python', ['test.py'])

// child process 출력 - stdout
process.stdout.on('data',function(data){
    console.log(data.toString());
})

// child process 에러 
process.stderr.on('data',function(data){
    console.error(data.toString());
})