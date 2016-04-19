var fs = require('fs');

var _dirname = process.argv[2];
var _ext = process.argv[3];

fs.readdir(_dirname, (err, data) => {
  if (err) { 
    throw err;
  } else {
    var list = data;

    list.forEach( function(entry) {
        entryArray = entry.split('.');

        if (entryArray.slice(-1)[0] === _ext && entryArray.length > 1) {
          console.log(entry);
        }
    });
    
  }
});