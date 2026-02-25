let pausado = false;
let minutosText = document.getElementById("minutos");
let segundosText = document.getElementById("segundos");
let zero = "0";
let min = 24;
let seg = 60;
let interval = null;

function atualizarDisplay() {
    let minutosText = document.getElementById("minutos");
    let segundosText = document.getElementById("segundos");

    minutosText.textContent = min < 10 ? "0" + min : min;
    segundosText.textContent = seg < 10 ? "0" + seg : seg;

    // reinicia animação
    tempo.classList.remove("animar");
    void tempo.offsetWidth; // força reflow
    tempo.classList.add("animar");
}

function cronometroSTART_PADRAO() {
    
    minutosText = document.getElementById("minutos");
    segundosText = document.getElementById("segundos");
    
    if(interval != null) return;

    pausado = false
    
    interval = setInterval(()=>{
        

        if(!pausado){
           if (seg === 0) {
                if (min === 0) {
                    clearInterval(interval);
                    interval = null;
                    return;
                }
                min--;
                seg = 59;
            } else {
                seg--;
            }

            atualizarDisplay();
        }
    }, 1000)

}

function cronometroSTOP_PADRAO(){
    clearInterval(interval);
    interval = null;
}

function cronometroReset_PADRAO(){    
    clearInterval(interval);
    interval = null;

    pausado = true;

    min = 25;
    seg = 0;

    atualizarDisplay();
}

document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("Start").addEventListener("click", cronometroSTART_PADRAO);
    document.getElementById("Stop").addEventListener("click", cronometroSTOP_PADRAO);
    document.getElementById("Reset").addEventListener("click", cronometroReset_PADRAO);

})