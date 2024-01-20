let p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 1000);
})
let p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 2000);
})
let p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(1);
    }, 3000);
})
let p4 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        reject(1);
    }, 4000);
})

let ALL = Promise.all([p1,p2,p3])//          even thou time intervals are different all promises got fullfilled at once
ALL.then((value)=>{
    console.log(value);
})

let AllSettled = Promise.allSettled([p1,p2,p3,p4])//    accepts even (reject) once
AllSettled.then((value)=>{
    console.log(value);
})

let Race = Promise.race([p1,p2,p3])//         race
Race.then((value)=>{//                 does not accept (reject) once
    console.log(value);
})

// let promiseAny = Promise.promiseAny([p1,p2,p4])//         any
// promiseAny.then((value)=>{//                 does not care if encounters a (reject) once it will try to find any resolvable promise
//     console.log(value);     //               if there is not resolve in existing promises then it means reject exists. it will be shoed after all hopes of resolve are gone.
// })//                                       unfortunately this method is not working

//Promise.resovle  , Promise.reject  == doesn't seem to be intresting