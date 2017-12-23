var fs = require('fs');
fs.appendFile('myNewFile1.txt', 'This is new text', function(err){
    if(err) throw err;
    console.log('Updated');
})