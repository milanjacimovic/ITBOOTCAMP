let x = ''
let n = 5
for (i=1; i<=n; i++) {
x += ' '.repeat(n-i) + '#'.repeat(i) + ' ' + '#'.repeat(i) + '\n'
}
console.log(x)