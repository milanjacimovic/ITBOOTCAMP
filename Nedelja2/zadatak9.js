let x = ''
let n = 5
x+= ' '.repeat(n-1) + '#'.repeat(n-4) + ' ' + '#'.repeat(n-4) + ' ' + '\n'
x+= ' '.repeat(n-2) + '#'.repeat(n-3) + ' ' + '#'.repeat(n-3) + ' ' + '\n'
x+= ' '.repeat(n-3) + '#'.repeat(n-2) + ' ' + '#'.repeat(n-2) + ' ' + '\n'
x+= ' '.repeat(n-4) + '#'.repeat(n-1) + ' ' + '#'.repeat(n-1) + ' ' + '\n'
x+= ' '.repeat(n-5) + '#'.repeat(n) + ' ' + '#'.repeat(n) + ' ' + '\n'
console.log(x)