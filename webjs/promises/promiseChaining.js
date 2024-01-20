let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('p1')
    },5000);
});

p1.then((value)=>{
    console.log(value);
            let p2 = new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('p2')
                },2000);
            });
    return p2;
}).then((value)=>{
    console.log(value);
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('p3')
                },2000);
            });
}).then((value)=>{
    console.log(value);
});