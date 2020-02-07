let godina = true
let mesec = 1

switch (mesec) {
    case 0:
    case 2:
    case 4:
    case 6:
    case 7:
    case 9:
    case 11:
        console.log('Ovaj mesec ima 31 dan');
        break;
    case 1:
        if (godina == true) {
            console.log('29 dana')
        }
        else {
            console.log('28 dana')
        }
        break;
    case 3:
    case 5:
    case 8:
    case 10:
        console.log('Ovaj mesec ima 30 dana');
        break;

    default:
        console.log('Morate izabrati broj od 0 do 11 jer postoji samo 12 meseci');
        break;

}