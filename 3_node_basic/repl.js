const odd='홀수입니다.'
const even='짝수입니다.'

// 외부 사용을 위해 모듈로 만들어줌- 객체/또는 배열
//module.exports===exports==={}
// module.exports={
//     odd,even,
// };

//이렇게 만들어도 되긴함- 
exports.odd=odd;
exports.even=even;

///exports.odd=odd라고 해놓고 module.exports={odd,even}하면 module.exports가 우선권을 가짐
///exports.odd=odd라고 해놓고 module.exports={} 에 다른 객체를 넣으면 참조 관계가 끊겨버림
//exports를 처음에 쓰면 이후에는 계속 exports로 써야함
// 둘이 같이 쓸 수없음 
    //한가지만 모듈화 할때 model.exports만 사용하면 됨
    //여러개 모듈화 할때는 exports만 사용하면 됨
//require - 직접 다룰일은 없음
    //main - 노드를 실행하면 거의 다 모듈이 됨 - 실행한 것
    //cache - 한번 불러온 모듈은 다시 불러오지 않음 - 캐싱됨


//require가 제일 위에 올 필요는 없음
//하지만 import는 제일 위에 와야함
//순환 참조가 되면 -> 빈 객체로 바꿔버려서 차단시킴
