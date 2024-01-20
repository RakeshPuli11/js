const rl = require('readline').createInterface({input: process.stdin, output: process.stdout});
let num = Math.random() * 10;

rl.question('give input: ', (numIn) => {
    if (num === Number(numIn)) {
        console.log("you guessed right");
    } else {
        console.log("you guessed wrong bro");
    }rl.question('input 2: ',(x)=>{
        console.log(x);
        rl.close();
        });
});
