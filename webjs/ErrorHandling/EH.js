console.log('start')
try{
    console.log(raki);
}catch(x){
    console.log('ok');
}
try{
    setTimeout(()=>{// asynchronous code
        console.log(boki)
    },101)
}catch(x){//            this error won't get handled because 
    console.log(x)//    js try only works with synchronous code
}
setTimeout(()=>{
try{
    console.log(poki)
}catch(err){
    console.log(err)
}
},9)