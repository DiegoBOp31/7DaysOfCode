function dameInformacion(){
    let nombre = prompt("¿Cómo te llamas?");
    let edad = prompt("¿Cuántos años tienes");
    let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");

    alert(`Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`);

    let estudiar = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con "1" para SÍ o "2" para NO`);
    if(estudiar === "1"){
        alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito");
    }else if (estudiar === "2") {
        alert("Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?");
    } else {
        alert("Esa respuesta no es válida");
    }
}

dameInformacion();