let input = document.getElementById("input");
let avvia = document.getElementById("bottone");
let btnStop = document.querySelector(".stop");
let clear = document.querySelector(".clear");
let contatore = document.getElementById("contatore");
let intervalId;

avvia.addEventListener("click" , function (){
 
  let valore = parseInt(input.value);
    if(valore > 0 ) {
      intervalId = setInterval( () => {
        valore--;
        contatore.innerHTML= valore;
        console.log(valore);
          if(valore <= 0){
            clearInterval(intervalId);
          } 
        } , 1000)
        
      }
      
});

btnStop.addEventListener("click" , function(){

  clearInterval(intervalId);

});

clear.addEventListener("click" , function(){

  clearInterval(intervalId);
  contatore.innerHTML = "0";
  input.value = "0";
  
});
