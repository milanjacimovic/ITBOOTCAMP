let x = ''
let n = 4
let i = 0
let vrh = ' '.repeat(n/2+1) + '*'  + ' '.repeat(n/2+1)
console.log(vrh)
for (i=1; i<=n/2+1; i++) {
    let krov = ' '.repeat(n/2-i+1)+'*'+' '.repeat(2*i-1)+'*' + ' '    
    console.log(krov);    
}

for (i=n-2; i>0; i--) {
    let krov2 = ' '.repeat(n/2-i+1)+'*'+' '.repeat(2*i-1)+'*' + ' '    
    console.log(krov2);    

}

  console.log(vrh)