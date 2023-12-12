let numb = 2;
for (let mol = 1; mol<11; mol++){
    let somma = numb * mol;
    console.log(somma);
}

let uno = 0;
let count = 0;
let media = 0;

for (let pari = 1; pari <=20; pari ++){
    if (pari % 2 === 0){
        console.log(pari)
    }
    else{
        uno = uno + pari;
        count++;

    }
}
 media = uno/count;
 console.log(media);

//  const variabile = parseInt(prompt('Inserisci un numero da 1 a 3:'));

//  if ( variabile == 1 ){
//     console.log("E’ stata selezionata l’acqua")
//  } else if (variabile == 2){
//     console.log("E’ stata selezionata coca cola")
//  } else if (variabile == 3) {
//     console.log("E’ stata selezionata birra")
//  } else {
//     variabile = parseInt(prompt('Inserisci un numero da 1 a 3:'));
//  }
let variabile; 

 do {
    variabile = parseInt(prompt('Inserisci un numero da 1 a 3:'));
    if ( variabile == 1 ){
        console.log("E’ stata selezionata l’acqua")
     } else if (variabile == 2){
        console.log("E’ stata selezionata coca cola")
     } else if (variabile == 3) {
        console.log("E’ stata selezionata birra")
     }
 } while (variabile <1 || variabile>3)

