// let promise = new Promise((resolve,reject)=>{
//     alert("i am in promise");
//     resolve(56);
// });
// console.log("start")
// setTimeout(()=>{console.log("time interval set")},2000)
// console.log("done")
// console.log(promise);

let p1 = new Promise((resolve,reject)=>{

    console.log("promise   1    is pending");
    setTimeout(()=>{
      //  console.log('fullfilled');
        resolve(true);
    //    reject(new Error("error aya"));
    },4000);

}); 

let p2 = new Promise((resolve,reject)=>{

    console.log("promise   2   is pending");
    setTimeout(()=>{
        //console.log('fullfilled');
       resolve('ok bro');
    //    reject(new Error("error aya"));
    },4000);

}); 

let p3 = new Promise((resolve,reject)=>{

    console.log("promise   3   is pending");
    setTimeout(()=>{
       // console.log('fullfilled');
       // resolve(true);
       reject(new Error("error aya"));
    },4000);

}); 
p1.then((value)=>{
    console.log(value);
});
p2.then((value)=>{
    console.log(value);
});
p3.catch((error)=>{
    console.log('some error');
});
console.log(p1,p2,p3);
//         promises are used for parellel execution
//         promises depends on two things
//         1.state   -   pending,fullfilled,rejected
//         2.result  -   completed,rejected-