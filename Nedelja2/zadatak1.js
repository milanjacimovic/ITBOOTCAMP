//Prvi nacin (ako zelimo samo za odabranu operaciju)
// let a = 5;
// let b = 7;
// let operacija = '+';
// switch (operacija) {
//     case '+':
//         console.log(a + b);
//         break;
//     case '-':
//         console.log(a - b);
//         break;
//     case '*':
//         console.log(a * b);
//         break;
//     case '/':
//         console.log(a / b);
//         break;
//     case '%':
//         console.log(a % b);
//         break;
//     case 'pow':
//         console.log(Math.pow(a,b));
//         break;
// }


//Drugi nacin (ako zelimo za sve)
let a=5;
let b=7;
let zbir= a+b;
let razlika= a-b;
let proizvod = a*b;
let kolicnik= a/b;
let ostatak= a%b;
let stepen = Math.pow(a,b);
console.log (`Zbir je ${zbir}`);
console.log (`Razlika je ${razlika}`);
console.log (`Proizvod je ${proizvod}`);
console.log (`Kolicnik je ${kolicnik}`);
console.log (`Ostatak pri deljenju je ${ostatak}`);
console.log (`Stepen je ${stepen}`);

