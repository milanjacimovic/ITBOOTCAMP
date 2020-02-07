// 1/K + 2/K+1+ 3/K+2+ ... + .... + (N+1)/(K+N)

let n=3;
let k=3;
let sum =0;
for (let index = 1; index <=n+1; index++) {
    sum +=  ((-1)**(index+1))*index/(k+index-1);
}
console.log(sum);

// let n=3;
// let k=3;
// let sum =0;
// for (let index = 1; index <=n+1; index++) {
//     sum +=  index/(k+index-1);
// }
// console.log(sum);
