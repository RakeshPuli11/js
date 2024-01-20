const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('WaterFull',()=>{
    console.log("Turn off Motor");
    setTimeout(()=>{
        console.log("stop bosidike")
    },3000);
});
myEmitter.emit('WaterFull');
console.log("start")