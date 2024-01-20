// async always returns a promise
// async is made to use promises more easily
// await waits until all the promises are fullfilled (resolved or rejected)[final state] and returns them all at once
//we use async and await to replace .then for promises
async function rakesh(){
        let p1 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('data 1');
            },1000)
        })

        let p2 = new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve('data 2');
            },2000)
        })

        // p1.then((x)=>{alert(x)})
        // p2.then((x)=>{alert(x)})
        console.log("start");
        let p1w = await p1;
        console.log("done with p1");
        let p2w = await p2;
        console.log("done with p2");
        return [p1w,p2w];
}
function sai(){
    console.log("i'm sai");
}
let x= rakesh();
sai();
console.log(x);

const z =async()=>{
    console.log("i'm z");
}
const mainx=async ()=>{
    let x = await rakesh();
    let y = await z();
    console.log(x);
}
mainx()