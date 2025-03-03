let frutas = [];
let lacteos = [];
let congelados = [];
let dulces = [];
let articulo = "";
let agregar = "si";
let categoria = "";

while(agregar != "no"){
    agregar = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    while (agregar != "si" && agregar != "no") {  
        alert("¡Operación no reconocida!");
        agregar = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'si' o 'no'.");
    }
        
    if (agregar === "no"){  
        break;
    }

    articulo = prompt("¿Qué artículo quieres agregar?");
    categoria = prompt("¿En qué categoría encaja ese alimento? (lácteos, dulces, congelados, frutas)");
    categoria = categoria.toLowerCase();
    if(categoria === "frutas"){
        frutas.push(articulo);
    }else if(categoria === "lacteos"){
        lacteos.push(articulo);
    }else if(categoria === "congelados"){
        congelados.push(articulo);
    }else if(categoria === "dulces"){
        dulces.push(articulo);
    }else {
        alert(`La categoria ${categoria} no existe`);
    }
}

alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);