const experss = require('express')
function calculateSum(n){
    var ans = 0
    for (let i = 0; i <= n; i++) {
        ans = ans + i;
        }
        return ans
}

console.log(calculateSum(30))
const app = experss()

app.get("/",function(req,res){
    const n = req.query.n;
    ans = calculateSum(n)
    res.sendStatus(ans.toString())
})

app.listen(3000)