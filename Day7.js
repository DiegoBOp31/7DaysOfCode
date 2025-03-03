function suma(){
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    let resultado = numero1+numero2;
    alert(`El resultado es: ${resultado}`);
}
function resta(){
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    let resultado = numero1-numero2;
    alert(`El resultado es: ${resultado}`);
}
function multiplicacion(){
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    let resultado = numero1*numero2;
    alert(`El resultado es: ${resultado}`);
}
function division(){
    let numero1 = parseInt(prompt("Ingresa un número"));
    let numero2 = parseInt(prompt("Ingresa otro número"));
    if(numero2==0){
        alert("No se puede hacer la division entre 0");
    }else{
        let resultado = numero1/numero2;
        alert(`El resultado es: ${resultado}`);
    }
}
function calculadora(){
    let operacion = prompt("Qué operación quieres hacer, suma, resta, multiplicación o división?");
    switch (operacion) {
        case "suma":
            suma();
            break;
        case "resta":
            resta();
            break;
        case "multiplicación":
            multiplicacion();
            break;
        case "división":
            division();
            break;
        default:
            alert("Esa opción no es válida");
    }    
}

calculadora();