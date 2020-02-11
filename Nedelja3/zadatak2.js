function kolikojepica (r, cena){
let povrsina = r**2*Math.PI
let cenapocm = cena/povrsina
return `Cena pice po cm2 je ${cenapocm}`

}
let primer=kolikojepica(3,70)
console.log(primer);
