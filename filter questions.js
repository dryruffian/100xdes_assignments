//WAP to filter

const arr =[{
    item : "car",
    prof  : "fast"
},{
    item : "plane",
    prof  : "fast"
},{
    item : "human",
    prof  : "slow"
}]

const newarr = arr.filter(n => {return n.prof=="fast"}).map(n => ({name:n.item}))

console.log(newarr)

