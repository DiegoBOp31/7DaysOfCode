/*
if (COMPARAR numeroUn y stringUn) {
  console.log('Las variables numeroUn y stringUn tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroUn y stringUn no tienen el mismo valor')
}
if (COMPARAR numeroTreinta y stringTreinta) {
  console.log('Las variables numeroTreinta y stringTreinta tienen el mismo valor y el mismo tipo')
} else {
  console.log('Las variables numeroTreinta y stringTreinta no tienen el mismo tipo')
}
if (COMPARAR numeroDiez y stringDiez) {
  console.log('Las variables numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes')
} else {
  console.log('Las variables numeroDiez y stringDiez no tienen el mismo valor')
}
*/
function comparaNumerosUno(){
    let numeroUn = parseInt(prompt("Ingresa el número 1"));
    let stringUn = prompt("Ingresa el número 1 otra vez");
    console.log(typeof(numeroUn));
    console.log(typeof(stringUn));
    if(numeroUn == stringUn && typeof(numeroUn)!=typeof(stringUn)){
        alert("Las variables numeroUn y stringUn tienen el mismo valor pero tipos diferentes");
    }else{
        alert("Las variables numeroUn y stringUn no tienen el mismo valor");
    }
}

function comparaNumerosTreinta(){
    let numeroTreinta = parseInt(prompt("Ingresa el número 30"));
    let stringTreinta = prompt("Ingresa el número 30 otra vez");
    console.log(typeof(numeroTreinta));
    console.log(typeof(stringTreinta));
    if(numeroTreinta == stringTreinta && typeof(numeroTreinta)!=typeof(stringTreinta)){
        alert("Las variables numeroTreinta y stringTreinta tienen el mismo valor pero tipos diferentes");
    }else{
        alert("Las variables numeroTreinta y stringTreinta no tienen el mismo valor");
    }
}

function comparaNumerosDiez(){
    let numeroDiez = parseInt(prompt("Ingresa el número 10"));
    let stringDiez = prompt("Ingresa el número 10 otra vez");
    console.log(typeof(numeroDiez));
    console.log(typeof(stringDiez));
    if(numeroDiez == stringDiez && typeof(numeroDiez)!=typeof(stringDiez)){
        alert("Las variables numeroDiez y stringDiez tienen el mismo valor pero tipos diferentes");
    }else{
        alert("Las variables numeroDiez y stringDiez no tienen el mismo valor");
    }
}

comparaNumerosUno();
comparaNumerosTreinta();
comparaNumerosDiez();