let x = [1,2,3,4,5,6,7]
console.log()
console.log("//////////////              for each              //////////////////")

x.forEach((i)=>{
    console.log(i)})

// convert a string to an array from html doc or from code itself
console.log()
console.log()
console.log("//////////////////             from              ///////////////////")

let from = "rakesh"
let fin = Array.from(from)
console.log(fin)

// from.forEach((i)=>{console.log(i)})
// above one is not possible

// we can also use of or in for arrays

console.log()
console.log()
console.log("////////////////////            map             /////////////////////")

//map    -- returns a new array
let y = x.map((i)=>{return i*i;})// we use an existing array to create a new array
console.log(y)

//filter
console.log()
console.log()
console.log("///////////////////            filter           //////////////////////")


let z = x.filter((i)=>{return i-2+134>0})
console.log(z)
console.log()

console.log()
console.log("//////////////////              reduce          ///////////////////////")
// reduces the existing array by adding functionality and creates a new array to store the reduced array
let aa= x.reduce((h1,h2)=>{return h1+h2})
console.log(aa)