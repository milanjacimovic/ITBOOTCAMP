let x = ''
let n = 5
for (let i=1; i<=n; i++) {
x += ' '.repeat(n-i) + '#'.repeat(i) + '\n'
}
console.log(x)
