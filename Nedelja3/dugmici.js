let pCount = document.querySelector('#Brojac');
let dugmeNaruci = document.querySelector('#Naruci');
let dugmeNaruci2 = document.querySelector('#Naruci2');
let dugmeNaruciOdmah = document.querySelector('#NaruciOdmah');
let dugmeNaruciOdmah2 = document.querySelector('#NaruciOdmah2');

let Brojac = 0;
dugmeNaruci.addEventListener('click', (a) => {
    Brojac++;
    pCount.innerHTML = Brojac
})

dugmeNaruci2.addEventListener('click', (a) => {
    Brojac++;
    pCount.innerHTML = Brojac
})

dugmeNaruciOdmah.addEventListener('click', (a) => {
    if (Brojac > 0) {
        console.log(poruka());
        Brojac = 0;
        pCount.innerHTML = Brojac
    }
    else {
        console.log(greska());
    }
})

dugmeNaruciOdmah2.addEventListener('click', (a) => {
    if (Brojac > 0) {
        console.log(poruka());
        Brojac = 0;
        pCount.innerHTML = Brojac
    }
    else {
        console.log(greska());
    }
})


function getNowDateInFormat() {
    let datum = new Date();
    return `${datum.getDate()}.${datum.getMonth() + 1}.${datum.getFullYear()}.`
}

function getNowTimeInFormat() {
    let vreme = new Date();
    return `${vreme.getHours()}:${vreme.getMinutes()}:${vreme.getSeconds()}`
}


function poruka() {
    document.getElementById("Poruka").innerHTML = `Ukupno ste narucili ${Brojac} pica ` + `${getNowDateInFormat()} ${getNowTimeInFormat()}`
}

function greska() {
    document.getElementById("Poruka").innerHTML = 'Ups! Morate izabrati nesto! ' + `${getNowDateInFormat()} ${getNowTimeInFormat()}`
}

