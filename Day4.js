const numeroMaximo = 10;
let intento;
let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
let acertar = false;

for(let i=2; i>-1; i--){
    intento = parseInt(prompt("Intenta adivinar el número secreto del 1 al 10"));
    if(intento === numeroGenerado){
        alert(`Genial!!! Acertaste el número secreto era ${numeroGenerado}`);
        acertar = true;
        break;
    }else{
        alert(`Fallaste, vuelve a intentarlo. Te ${(i===1?"queda":"quedan")} ${i} ${(i===1)?"intento":"intentos"}`);
        if(intento > numeroGenerado){
            alert("El número secreto es más pequeño");
        }else{
            alert("El número secreto es más grande");
        }
    }
}
if (acertar==false) {
    alert(`Perdiste el juego. El número secreto era ${numeroGenerado}`);
}