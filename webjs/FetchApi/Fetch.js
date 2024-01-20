//          get 


let p = fetch("http://localhost:2000/question/category/java")
p.then((val)=>{
    // 1st promise will return satus code 
    console.log(val.status)
    console.log(val.ok)
    return val.json()
}).then((val2)=>{
    // 2 nd promise will return data
    console.log(val2)
})