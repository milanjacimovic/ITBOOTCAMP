// Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N

let m = 1;
let n = 50;
let sum = 0;
brojac = 0
for (let i = m; i <= n; i++) {
    if (i % 7 == 0) {
        sum += i
        brojac++
    }

}
console.log(sum/brojac)