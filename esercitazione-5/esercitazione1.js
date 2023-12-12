const persona = {
    nome : "Lorenzo",
    cognome : "Burgio",
    età : "26",
    saluto: "Ciao Mbare!"

}

console.log(persona.saluto)


let rubrica = {
    contatti: [
      {nome: 'Nicola', telefono: '3331111111'},
      {nome: 'Lorenzo', telefono: '3332222222'},
      {nome: 'Paola', telefono: '3333333333'}, 
      {nome: 'Jenny', telefono: '3334444444'}
    ],

    stampa1() {
        console.log( rubrica["contatti"])
    },
    stampa2() { 
        console.log(`Nome: ${rubrica.contatti[0].nome} Numero: ${rubrica.contatti[0].telefono}`)
    } ,
    elimina(nome){ 
        let index = this.contatti.findIndex(
        (contatto) => contatto.nome === nome);
        if (index != -1){
            this.contatti.splice(index,1)
        }

    },
    add(nuovonome, nuovotelefono) { 
       this.contatti.push({nome:nuovonome,telefono:nuovotelefono})
    },
  }
rubrica.stampa1()
rubrica.stampa2()
rubrica.elimina("Jenny")
rubrica.add("Mbare", "239058923")


 




let punteggiorandom = Math.floor((Math.random() * 10) + 1);

let bowling = {
    'Player': [
        {'Giocatore': 'Ermenegildo','punteggio':0},
        {'Giocatore': 'Ermanno','punteggio': 0},
        {'Giocatore': 'Gesualdo','punteggio': 0},
    ]

}


