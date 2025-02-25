setImmediate(()=>{
console.log('immediate');
});

//프로세스의 함수 였음
process.nextTick(()=>
    {
        console.log('nextTick 실행');  
    })
setTimeout(()=>{
    console.log('timeout')
},1000);

// resolve된 promise도 우선순위를 가짐
//누가 이길까?
Promise.resolve().then(()=>console.log('promise'));

//이벤트 루프가 nextTick을 먼저 실행하기 해줌
