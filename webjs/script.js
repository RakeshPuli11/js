console.log("hello");
let x = prompt("enter a val",0)
if(x>18){
    document.write(x)
}
else{
    alert("<18")
    let wrt = confirm("yanna conform this")
    if(wrt){
        document.write(x)
    }
}
