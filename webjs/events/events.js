// btn.addEventListener('click',()=>{
//     alert("hi");
// })
// btn.addEventListener('click',function(e){
//     alert("hello");
// })

const clicked = ()=>{
    console.log("clicked the button");
}
const over = ()=>{
    console.log("over the button");
}


const box = document.getElementById("btn3");
box.addEventListener('click',(e)=>{/////           event listener mostly used than handler
    console.log('listener event',e.clientX,e.clientY);
})

// box.addEventListener('click',()=>{/////          we can call multiple SAME TYPE events on single tag when we use event listener 
//     console.log('listener event 2');
// })

// bubling
const container = document.getElementsById('listener');
container.addEventListener('click',()=>{/////          
    console.log('event container');
})
