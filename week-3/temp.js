const express = require('express');
const app = express();
const zod = require("zod");

//creating a schema 
const mySchema = zod.array(zod.number());

app.use(express.json());

app.get("/health-checkup", (req, res) => {
  const kidney = req.body.username;
  const response = mySchema.safeparse(kidney);
  const kidneylen = kidney.length;

  if (kidneylen <= 2) {
    res.send("you have " + response + " kidneys");
  } else {
    res.send("bro you are not human");
  }
});

app.use((err,req,res,next) =>{
    const kidney = req.body.username;

    const response = mySchema.safeParse(kidney);

  res.json({
    msg : "sorry sometihng went wrong",
    res : response
  }
)})

app.listen(3000);