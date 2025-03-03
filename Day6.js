let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";
let agregarMas = "sí";  

while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }
	
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "eliminar") {  
	    alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  
	break;
    }
	
    if(agregarMas === "sí"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
        if(categoria === 'frutas'){
            frutas.push(comida);
        } else if (categoria === 'lacteos'){
            lacteos.push(comida);
        } else if (categoria === 'dulces'){
            dulces.push(comida);
        } else if (categoria === 'congelados'){
            congelados.push(comida);
        } else {
            alert("Esa categoria no está predefinida.")
        }
    } else if(agregarMas === "eliminar"){
	    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){ 
		alert("¡La lista está vacía!"); //La condicion del if está de más porque arriba se comprueba si la lista está vacia
	    } else { 
            eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
            if(frutas.indexOf(eliminar) != -1){
                frutas.splice(frutas.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
            } else if(lacteos.indexOf(eliminar) != -1){
                lacteos.splice(lacteos.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
            } else if (dulces.indexOf(eliminar) != -1){
                dulces.splice(dulces.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
            } else if (congelados.indexOf(eliminar) != -1){
                congelados.splice(congelados.indexOf(eliminar), 1);
                alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
            } else {
                alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
            }
	    }
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);