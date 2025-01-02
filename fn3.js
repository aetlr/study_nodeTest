const fs = require('fs');
fs.readFile('c:/Temp/read.txt','utf-8',(err,data)=>{
    if (err) return console.log(err);
    console.log(data);
})
console.log('Done');
