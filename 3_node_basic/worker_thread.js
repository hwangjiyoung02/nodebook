const {Worker,parentPort,isMainThread} =require('worker_threads');

if(isMainThread){
//메인 
    const worker=new Worker(__filename);// 현재 파일 워커 생성성
    worker.on('message',message =>console.log('from worker',message));//메세지 받기
    worker.on('exit',()=>console.log('worker exit'));
    worker.postMessage('ping');// 데이터 보내기
}else{

    parentPort.on('message',(value)=>{
        console.log('from parent',value);
        parentPort.postMessage('pong');//부모한테 메세지 보내기기
        parentPort.close();
    })

}