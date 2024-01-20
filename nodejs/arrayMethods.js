let x = [2,8,7,9]
console.log("splice is used to add n no. of elements between two indexes")
x.splice(1,2,4,5,6)
console.log(x)
console.log("slice does not change existing array")
let nwa=x.slice(-3).reverse()
console.log(nwa)


