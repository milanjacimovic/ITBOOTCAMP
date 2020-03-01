let znakPolje = document.querySelector('#vrsta-promene');
let opisPolje = document.querySelector('#opis-promene');
let iznosPolje = document.querySelector('#iznos-promene')
let dugmeUnos = document.querySelector('#dugme-unos')
let ukupno = document.querySelector('#ukupno');
let container = document.querySelector('#container');
let prikazPrihoda = document.querySelector('#prikaz-prihodi');
let prikazRashoda = document.querySelector('#prikaz-rashodi');


let prihod = 0;
let rashod = 0;
let budzet = 0;
let procenat = 0;
let globProcenat = 0;


dugmeUnos.addEventListener('click', (e) => {
    e.preventDefault();
    if (opisPolje.value.trim() == "") {
        alert("Morate uneti nesto!");
        opisPolje.value = "";
        return
    }
    if (iznosPolje.value.trim() == "" || iznosPolje.value <= 0) {
        alert("Iznos mora biti unet i mora biti veci od nule!")
        iznosPolje.value = "";
        return;
    }
    let znak = znakPolje.value;
    let opis = opisPolje.value;
    let iznos = parseInt(iznosPolje.value);
    if (znak == 'prihod') {
        dodajPrihod(opis, iznos);
    }
    else {
        dodajRashod(opis, iznos, budzet)
    }
    opisPolje.value = "";
    iznosPolje.value = "";
})
const dodajPrihod = (opis, iznos) => {
    prihod += iznos;
    budzet += iznos;
    globProcenat = rashod / prihod * 100;
    let ispis = document.createElement('div')
    ispis.id = "prikaz-prihoda";
    // onHover(ispis)
    ispis.innerHTML = `${opis} ${iznos}`
    prikazPrihoda.appendChild(ispis)
    ukupno.innerHTML=renderujHTML(budzet, prihod, rashod, Math.floor(globProcenat))
    let obrisiPromenu = document.createElement('button');
    obrisiPromenu.innerHTML = 'OBRISI';
    obrisiPromenu.id="dugme-brisanje"
    // obrisiPromenu.style.display= 'none'
    ispis.appendChild(obrisiPromenu);
    obrisiPromenu.addEventListener('click', () => {
        budzet -= iznos;
        prihod -= iznos;
        globProcenat = rashod / prihod * 100;
        ukupno.innerHTML=renderujHTML(budzet, prihod, rashod, Math.floor(globProcenat))
        ispis.remove();

    })
    globProcenat=0;
    procenat=0;
}

const dodajRashod = (opis, iznos, budzet) => {
    rashod += iznos;
    procenat = iznos / budzet * 100;
    budzet -= iznos;
    globProcenat = rashod / prihod * 100
    let ispis = document.createElement('div')
    ispis.id = "prikaz-rashoda";
    // onHover(ispis)
    ispis.innerHTML = `${opis} Iznosi: ${iznos} I to je: ${Math.floor(procenat)}%`
    prikazRashoda.appendChild(ispis)
    ukupno.innerHTML=renderujHTML(budzet, prihod, rashod, Math.floor(globProcenat))
    let obrisiPromenu = document.createElement('button');
    obrisiPromenu.innerHTML = 'OBRISI';
    obrisiPromenu.id="dugme-brisanje"
    // obrisiPromenu.style.display= 'none'
    ispis.appendChild(obrisiPromenu);
    obrisiPromenu.addEventListener('click', () => {
        budzet += iznos;
        rashod -= iznos;
        procenat=iznos/budzet*100
        globProcenat = rashod / prihod * 100;
        ukupno.innerHTML=renderujHTML(budzet, prihod, rashod, Math.floor(globProcenat))
        ispis.remove();
    })
    globProcenat=0;
    procenat=0;
}

// const onHover=(element) =>{
//     element.addEventListener('mouseover', (e) => {
//       document.querySelector('#dugme-brisanje').style.display = 'block';
//     });
//     element.addEventListener('mouseleave', (e) => {
//       document.querySelector('#dugme-brisanje').style.display='none';
//     });
//   }
const renderujHTML = (budzet, prihod, rashod, procenat) => {
return `<H1>Dostupan budzet u Martu 2020:</H1>
<div id="saldo">${prihod-rashod}</div>
<div id="trenutno-stanje">
    <div id="trenutno-prihodi">
        <p>Prihod:</p>
        <p>+${prihod}</p>
    </div>
    <div id="trenutno-rashodi">
        <p>Rashod:</p>
        <p>-${rashod} ${procenat}%</p>
    </div>
</div>`
}
