const loadScript =(link)=>{
    return new Promise((resolve,reject)=>{
    //setTimeout(()=>{
        let script = document.createElement("script");
        script.src = link;
        script.onload =()=>{resolve(1);}
        script.onerror =()=>{reject(0);}
        document.body.appendChild(script);
    //},7000);
});
}

let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
let p2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
// p1.then((value)=>{
//     console.log(value);
//     const loadScript2=(link)=>{
//     return new Promise((resolve,reject)=>{
//         let script = document.body.createElement('script');
//         script.src = link;
//         script.onload =()=>{resolve(1);}
//         script.onerror =()=>{reject(0);}
//         document.body.appendChild(script);       
//     });
//   }//                                     we should not prefer this method to load multiple scripts using promises
// }).then((value)=>{
//     console.log(value);
// }).catch((error)=>{
//     console.log(error);
// });

//to load multiple scripts using promises we do this instead
Promise.all([p1,p2]).then((values)=>{
    console.log(values);
}).catch((error)=>{
    console.log(error);
});

//        This method ensures loading the script using promises instead 
//           of call backsto avoid non parellel execution of scripts(call back hell) or (pyramid of doom).