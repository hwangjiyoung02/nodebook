const value=require('./repl')
console.log(value);

//구조 분해 할당 할때는 속성명이랑 변수명이랑 동일해야함
const {odd,even}=require('./repl')
function checkOddorEven(num){
    if(num%2){
        console.log(odd);
        return odd;}
    else{
        console.log(even);
        return even;}
}
checkOddorEven(10);