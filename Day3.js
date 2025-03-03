function juegoDesiciones(){
    let lenguaje;
    let tecnologias;
    let unaMas;

    const frontBack = prompt("¿Quieres seguir en el área de 'Front-End' o 'Back-End'? Escribe el nombre del área:"); 
    if(frontBack==="Front-End"){
        alert(`Acabas de elegir el camino del ${frontBack}. Sigue adelante!`);
        lenguaje = prompt("¿Quieres aprender React o Vue?");
        alert(`Muy buena elección. Aprende mucho sobre ${lenguaje}`);
    }else if(frontBack==="Back-End"){
        alert(`Acabas de elegir el camino del ${frontBack}. Sigue adelante!`);
        lenguaje = prompt("¿Quieres aprender Java o C#?");
        alert(`Muy buena elección. Aprende mucho sobre ${lenguaje}`);
    }else{
        alert("¡No ingresaste un área válida!");
    }

    const especialidad = prompt("Elige 1 si quieres especializarte en el área que elegiste o 2 si quieres ser Fullstack");
    if (especialidad=="1") {
        alert(`Excelente elección!! Serás un gran especialista en ${lenguaje}!!`);
    } else if(especialidad=="2"){
        alert(`Excelente elección!! Serás un gran Fullstack!! Ahora a aprender otros lenguajes además de ${lenguaje}`);
    }else {
        alert("¡No ingresaste un valor válido!");
    }

    unaMas = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
    while (unaMas === "ok") {
        tecnologias = prompt("¿Cuál?");
        alert(`¡${tecnologias} es realmente una tecnología muy interesante!`);
        unaMas = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'ok' en caso positivo.");
    }
}

juegoDesiciones();