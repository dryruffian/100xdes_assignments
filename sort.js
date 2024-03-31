//WAP to filter

const arr =[{
    id : 1,
    value  : 30
},{
    id : 2,
    value  : 50
},{
    id : 3,
    value  : 20
}]

const newarr = arr.filter(n => {return n.prof=="fast"}).map(n => ({name:n.item}))


console.log(newarr)

