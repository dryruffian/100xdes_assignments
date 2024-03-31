const mongoose = require('mongoose');
express = require("express")
app = express()
const { string } = require('zod');
mongoose.connect('mongodb://aditya:XcpfZw5rZjcCciOw@ac-jfn96c1-shard-00-00.vpys69a.mongodb.net:27017,ac-jfn96c1-shard-00-01.vpys69a.mongodb.net:27017,ac-jfn96c1-shard-00-02.vpys69a.mongodb.net:27017/userappnew?replicaSet=atlas-y65b4h-shard-0&ssl=true&authSource=admin')
app.use(express.json())
const User = mongoose.model('Users', { name: String, email: String, Password: String });

app.post('/signup',async (req,res) => {
    const existinguser = await User.findOne({email: req.body.email})
    // CRUD => create,read,update,delete
    if (existinguser){
        return res.status(400).send("user already exist")
    }
    const user = new User({ name: req.body.name, 
    email: req.body.email,
    Password: req.body.Password });
    user.save().then((n) => res.json({
        msg : "done"
    }));
})
app.listen(3000)
// user.save().then(() => console.log('meow'));