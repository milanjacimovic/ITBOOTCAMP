let x = ''
let n = 5
for (i=0; i<=n; i++) {
x += ' '.repeat(i) + '#'.repeat(n-i) + ' ' + '#'.repeat(n-i) + '\n'
}
console.log(x)