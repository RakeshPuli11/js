const loadScript =(link,callback)=>{///////////////////////     passing a function to a function == callback
    setTimeout(()=>{
    const script = document.createElement("script");
    script.src = link;
   
    script.onerror =()=>{//////////////////////     error handlinggggggggggg
        console.log("error loding src");
        callback(new Error("src has some error"),src);
    }

    script.onload = ()=>{
        console.log("loaded the script");
        callback(null,link);
    }
    document.body.appendChild(script);
    },3000)
}
// const x=(error,link)=>{
//     if(error){
//         console.log(error);
//         return;
//     }
//     alert("1 hello world       "+link);
// }
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
    if(error){
        console.log(error);
        return;
    }
    alert("1 hello world       "+link);
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
        if(error){
            console.log(error);
            return;
        }
        alert("2 hello world       "+link);
        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
            if(error){
                console.log(error);
                return;
            }
            alert("3 hello world       "+link);
                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
                if(error){
                    console.log(error);
                    return;
                }
                alert("3 hello world       "+link);
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
                    if(error){
                        console.log(error);
                        return;
                    }
                    alert("4 hello world       "+link);
                        loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
                        if(error){
                            console.log(error);
                            return;
                        }
                        alert("5 hello world       "+link);
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
                            if(error){
                                console.log(error);
                                return;
                            }
                            alert("6 hello world       "+link);
                                loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",x=(error,link)=>{
                                if(error){
                                    console.log(error);
                                    return;
                                }
                                alert("7 hello world       "+link);
                            });
                        });
                    });
                });
            });
        });
    });
});
// call back based style of asynchronous programming