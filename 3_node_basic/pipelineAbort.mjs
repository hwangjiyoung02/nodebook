import { pipeline } from 'stream/promises';
import zlib from 'zlib';
import fs from 'fs';

const ac = new AbortController();
const signal = ac.signal;// 중단을 편하게 할 수 있음 

setTimeout(() => ac.abort(), 1); // 1ms 뒤에 중단
await pipeline(
  fs.createReadStream('./readme.txt'),
  zlib.createGzip(),
  fs.createWriteStream('./readme.txt.gz'),
  { signal },
);