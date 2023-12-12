const primo = document.querySelector('.primo');
const secondo = document.querySelector('.secondo');
const terzo = document.querySelector('.terzo');
const p = document.querySelectorAll('p');


primo.addEventListener('click', function (){

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    
    p.forEach(function (paragrafo){
        let random = getRandomColor();
        paragrafo.style.color= random;
    })
})

secondo.addEventListener('click', function (){

    p.forEach(function(paragrafo){
        paragrafo.classList.toggle("bold");
    });
});

terzo.addEventListener('click', function (){

    p.forEach(function(paragrafo){
        paragrafo.classList.toggle("nascondi")
    })

})