//commonjs(표준)가 es모듈로 전환될것
//es모듈 확장자 ->mjs
//commonjs 확장자 ->js
//원래는 exports.odd="js홀수"
export const pi = Math.PI;// 바로 내보내기
import {odd,even} from './repl.js';// 바로 가져오기 named export

export default checkOddorEven;//===model.exports
import checkNum from './repl.js';// 변수명은 자유임! default export


