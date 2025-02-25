const path = require('path');
//dunder
const string = __filename;

console.log('path.sep:', path.sep);
console.log('path.delimiter:', path.delimiter);
console.log('------------------------------');
console.log('path.dirname():', path.dirname(string));
console.log('path.extname():', path.extname(string));
console.log('path.basename():', path.basename(string));
console.log('path.basename - extname:', path.basename(string, path.extname(string)));
console.log('------------------------------');
//posix->window로 바꿔줌 path.format({})
console.log('path.parse()', path.parse(string));
console.log('path.format():', path.format({
  dir: 'C:/hjy02/',
  name: 'path',
  ext: '.js',
}));

// 정규화하는 방법도 있음
console.log('path.normalize():', path.normalize('C://users\\zerocho\\path.js'));
console.log('------------------------------');
console.log('path.isAbsolute(C:/):', path.isAbsolute('C:/'));
console.log('path.isAbsolute(./home):', path.isAbsolute('./home'));
console.log('------------------------------');
console.log('path.relative():', path.relative('C:/users/erocho/path.js', 'C:/'));
//여러 인수를 넣으면 하나의 경로로 합침
//join은 /를 만나면 상대경로, resolve는 절대 경로로 처리
console.log('path.join():', path.join(__dirname, '..', '..', '/users', '.', '/zerocho'));
console.log('path.resolve():', path.resolve(__dirname, '..', 'users', '.', '/zerocho'));