// hospital.js
const express = require('express');
const app = express();

var user = [{
    name: 'sagar',
    kidney: [
        { healthy: false },
        { healthy: true }
    ]
}];

app.use(express.json()); // Middleware for parsing JSON in request body

app.get("/", function (req, res) {
    const johnkidney = user[0].kidney;
    const numberofkidneys = johnkidney.length;
    let numberofhealthykidneys = 0;

    for (let i = 0; i < johnkidney.length; i++) {
        if (johnkidney[i].healthy) {
            numberofhealthykidneys = numberofhealthykidneys + 1;
        }
    }

    const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
    res.json({
        numberofkidneys,
        numberofhealthykidneys,
        numberofunhealthykidneys
    });
});

app.post("/", function (req, res) {
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done!!"
    });
});

app.put("/",function(req,res){
    for (let i = 0; i < user[0].kidney.length; i++) {
        user[0].kidney[i].healthy = true
        
    }
    res.json({
        msg : "done"
    })
})

app.delete("/",function(req,res){
    const newkidney = []
    for (let i = 0; i < user[0].kidney.length; i++) {
        if(user[0].kidney[i].healthy == true){
            newkidney.push({
                healthy: true
            })
        }
        user[0].kidney = newkidney
    }
    res.json({
        msg : "done"
    })  
})



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

console.log(user);
