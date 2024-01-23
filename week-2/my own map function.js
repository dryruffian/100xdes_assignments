

function tra(arr,fn){
  let narr = []
  for (let index = 0; index < arr.length; index++) {
    narr.push(fn(arr[index]));
    }
  return narr
}

function sum(a){
  return a*2
}

const l = [6,3,8,5]

console.log(tra(l,sum))