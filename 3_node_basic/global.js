/**
 * node는 global, 브라우저는 window- 
 * global.require( global은 생략 가능하다)
 * global.console.log
 * global.module.exports
 * 전역변수느낌이기 때문에 다른 파일에서 공유할 수 있음
 * - 하지만 이렇게 사용하는 것은 좋지 않음
 * - 너무 많은 파일에서 사용할 수 있기 때문에 - 권장하지 않음
 * 객체를 로깅할때는 디렉토리가 좋다
 * console.dir({hello:'hello'})
 * console.time('hi') //코드 수행 시간 측정
 * console.timeEnd('hi')
 * 
 */