const bycrypt = require('bcrypt')
const pass = 'haisd'

bycrypt.hash(pass,10,(err,hash) => {
    if (err) throw err;
    console.log(hash);
    bycrypt.compare('',hash,(err,result) => {
        if (err) throw err;
        console.log(result);
    })
})