const fs = require('fs');

fs.readFile('try.txt', 'utf-8',function(err,data){
    console.log(data)
})