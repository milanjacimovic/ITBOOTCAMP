
let x = ''
let n = 5
for (n=4; n>-1; n--) {
x += ' '.repeat(n) + '#'.repeat(5-n) + ' ' + '#'.repeat(5-n) + '\n'
}
console.log(x)