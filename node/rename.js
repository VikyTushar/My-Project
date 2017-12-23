var fs = require('fs');

fs.rename('mynewfile.tx', 'mynewfile.txt',function(err)
{
    if(err) throw err;
    console.log("Renamed!");
});