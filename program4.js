var fs = require('fs');
var file = process.argv[2];


fs.readFile(file, 'utf8', countNewLines);

var countNewLines = function(err, data) {
//function countNewLines(err, data) {
    var buf = data.toString();
    var strArray = buf.split('\n');
    console.log(strArray.length - 1);
};



// fs.readFile(file, function(err, data) {
//     if (err) {
//         return console.error(err);
//     } else {
//         countNewLines(data);
//     }
// });


