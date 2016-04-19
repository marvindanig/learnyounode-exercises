var fs = require('fs');

var buf = fs.readFileSync(process.argv[2], 'utf8');

var strArray = buf.split('\n');

console.log(strArray.length - 1);
