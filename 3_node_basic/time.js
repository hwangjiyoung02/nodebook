const timeout=setTimeout(()=>{
console.log('1.5초 후 실행');
},1500);

// setTimeout과 다른 점-> 반복실행
const interval=setInterval(()=>{
    console.log('1초마다 실행');

},1000);

const timeout2=setTimeout(()=>{
    console.log('실행되지 않습니다');
},3000);

setTimeout(()=>{
    clearTimeout(timeout2);// 방금 실행한 것을 취소
    clearInterval(interval);
},2500);

//background queue 이벤트 루프갔다가 호출스택갔다가~
const immediate=setTimeout(()=>{
console.log('즉시 실행');
});

const immediate2=setTimeout(()=>{
    console.log('실행되지 않습니다.');
    });

// clearImmediate(immediate2)
// 