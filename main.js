let pausado = false;
let min = 0;
let seg = 0;
let miliseg = 0;
let zero = "";
let minutosText = document.getElementById("minutos");
let segundosText = document.getElementById("segundos");

function cronometroSTART() {
    let interval;
    let min = 25;
    let seg = 0;
    pausado = false;
    let miliseg = 999;

    minutosText = document.getElementById("minutos");
    segundosText = document.getElementById("segundos");

    min = 24;
    seg = 60;
    interval = setInterval(()=>{
        if(pausado === false){

            seg -= 1;

            if(seg == 0){
                min -= 1;
                seg = 59;
            }

            minutosText.textContent = min;
            segundosText.textContent = seg;

            if(seg <= 9){
                zero = "0";
                segundosText.textContent =  zero + seg;
            };

            if(min <= 9){
                zero = "0";
                minutosText.textContent = zero + min;
            }

        }
    }, 1000)

}

function cronometroSTOP(){
    pausado = true;

    const minutosText = document.getElementById("minutos");
    const segundosText = document.getElementById("segundos");
    const millissegundosText = document.getElementById("millissegundos");
}

function cronometroReset(){
    minutosText.textContent = 25;
    segundosText.textContent = "00";
    millissegundosText.textContent = miliseg;
}