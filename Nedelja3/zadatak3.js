// Jedan nacin
// function deljivoSaPet(niz){
//     for (let element of niz){
//         if(element%5==0){
//             console.log(element);
            
//         }
//     }
// }
// deljivoSaPet([1, 3, 5, 6, 12, 15, 200, 120, 27]);


// Drugi nacin
function deljivoSaPet(niz){
    for (let i=0; i<niz.length;i++){
        let element=niz[i]
        if (element%5==0){
            console.log(element);
            
        }
    }
}

deljivoSaPet([3, 5, 6, 15, 150, 12])