const fs = require('fs');
const path = require('path');



fs.readdir('./',function(err,files){
    // if(err){
    //   return res.status(500).json({error:'Falied to retrive file'});
    // }
    console.log(files);
  })
