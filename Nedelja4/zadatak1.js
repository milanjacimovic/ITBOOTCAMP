let piplup = {
    ime: 'Piplup',
    vrsta: 'Vodeni',
    sposobnosti: ['Mehurici', 'Vrtlog', 'Hidro pumpa'],
    karakteristike: { napad: 51, odbrana: 53, brzina: 40 }
}

let glaceon = {
    ime: 'Glaceon',
    vrsta: 'Ledeni',
    sposobnosti: ['Ledeni vetar', 'Snezna oluja', 'Snezna lavina'],
    karakteristike: { napad: 60, odbrana: 110, brzina: 65 }
}
let shaymin = {
    ime: 'Shaymin',
    vrsta: 'Travnati',
    sposobnosti: ['Magicni list', 'Aromaterapija', 'Slatki poljubac'],
    karakteristike: { napad: 100, odbrana: 100, brzina: 100 }
}
let mareep = {
    ime: 'Mareep',
    vrsta: 'Elektricni',
    sposobnosti: ['Munja', 'Magnetno polje', 'Elektricna mreza'],
    karakteristike: { napad: 40, odbrana: 40, brzina: 35 }
}
let cyndaquil = {
    ime: 'Cyndaquil',
    vrsta: 'Vatreni',
    sposobnosti: ['Erupcija', 'Bacac plamena', 'Plameni tocak'],
    karakteristike: { napad: 52, odbrana: 43, brzina: 65 }
}

let pokemoni = [piplup, glaceon, shaymin, mareep, cyndaquil]

// function primaNiz (niz){
//   let sposobnostiSvih = [] 
//     for(let i=0; i<niz.length;i++){
//         for(j=0; j<niz[i].sposobnosti.length; j++){
//             sposobnostiSvih.push(niz[i].sposobnosti[j])
//         }

//     }
//     return sposobnostiSvih
// }

// console.log(primaNiz(pokemoni))

// pokemoni.sort((a, b) => {
//     return a.karakteristike.brzina - b.karakteristike.brzina
// })

// console.log(pokemoni);

function najvecaJacina(niz) {

    pokemoni.sort((a, b) => {
        return a.karakteristike.napad - b.karakteristike.napad
    })
    console.log('IIIIIII POBEDNIK JEEEEEEEE:');

    return niz[niz.length - 1]
}
// console.log(najvecaJacina(pokemoni));

let wrapper = document.querySelector('.wrapper')
let prikazPokemona = document.querySelector('#prikaz')
let pobednikPokemon = document.querySelector('#pobednik')
wrapper.appendChild(prikazPokemona);
wrapper.appendChild(pobednikPokemon);

let p = document.createElement('p')
let slika = document.createElement('img')
let divApp = document.createElement('div')

prikazPokemona.addEventListener('click', (e) => {
    divApp.innerHTML = ""
    for (let el of pokemoni) {
        let p = document.createElement('p')
        p.innerHTML = `Ovaj gospodin se zove: ${el.ime} \n Vrsta: ${el.vrsta} Sposobnosti: ${el.sposobnosti}`
        let slika = document.createElement('img')
        slika.src = `${el.ime}.jpg`
        slika.style.height = '200px'
        slika.style.width = '200px'
        divApp.appendChild(p)
        divApp.appendChild(slika)
        wrapper.appendChild(divApp)
    }
})
pobednikPokemon.addEventListener('click', (e) => {
    divApp.innerHTML = ""
    najvecaJacina(pokemoni)
    p.innerHTML = `Najjaci od svih je: ${pokemoni[pokemoni.length - 1].ime} Vrsta: ${pokemoni[pokemoni.length - 1].vrsta} Sposobnosti: ${pokemoni[pokemoni.length - 1].sposobnosti}`
    slika.src = `${pokemoni[pokemoni.length - 1].ime}.jpg`
    slika.style.height = '200px'
    slika.style.width = '200px'
    divApp.appendChild(p)
    divApp.appendChild(slika)
    wrapper.appendChild(divApp)
})

