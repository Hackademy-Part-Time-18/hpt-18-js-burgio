let voto = 30;

if (voto <18) {
    console.log("eccellente")
}  else if (voto >=18 && voto <=21) {
    console.log("ottimo")
}  else if (voto >=21 && voto <=24){
    console.log("distinto")
}  else if (voto >=24 && voto <=27){
    console.log("buono")
}  else if (voto >=27 && voto <=29){
    console.log("sufficiente")
}  else if (voto ===30) { 
    console.log("Insufficiente")
} 

switch (true){
    case voto <18:
    console.log("eccellente");
    break;
    case voto >=18 && voto <=21:
    console.log("ottimo");
    break;
    case voto >=21 && voto <=24:
    console.log("distinto");
    break;
    case voto >=24 && voto <=27:
    console.log("buono");
    break;
    case voto >=27 && voto <=29:
    console.log("eccellsufficienteente");
    break;
    case voto ===30:
    console.log("Insufficiente");
    break;

}

let temp = 30;

if (temp <20) {
    console.log("non ci sono piu’ le mezze stagioni")
}  else if (temp >=30) {
    console.log("u mare, lu sole, lu ientu")
}  else if (temp <30){
    console.log("mi dia una peroni sudata")
}  else if (temp <0){
    console.log("non e’ tanto il freddo quanto l’umidità")
}  else if (temp <-10){
    console.log("copriti…ancora ti raffreddi")
} 

switch (true){
    case temp <20:
    console.log("non ci sono piu’ le mezze stagioni");
    break;
    case temp >=30:
    console.log("u mare, lu sole, lu ientu");
    break;
    case temp <30:
    console.log("mi dia una peroni sudata");
    break;
    case temp <0:
    console.log("non e’ tanto il freddo quanto l’umidità");
    break;
    case temp <-10:
    console.log("copriti…ancora ti raffreddi");
    break;

}

totcat = 44;
fila = 6;
numfile=Math.floor(totcat/ fila);
restantifila= totcat % fila;
restanticat = fila-restantifila;
console.log(`Ci sono ${numfile} file di gatti e ne mancano ${restanticat} per una nuova fila, con un avanzo di ${restantifila}`);

