let x = [1,5,{kl:9,lk:0},undefined,'kl'];
x[6]="jbl";
console.log(x);
console.log(x.toString());
x.pop();
console.log(x.join("+"));
x.push(56);
console.log(x);
//shift
//removes 0 th ele
console.log(x.shift());
//unshift 
//adds at beg og array
x.unshift(2);
console.log(x);
x[0]=0
x.reverse();
x.pop();
console.log(x);
x.sort();
console.log(x);


