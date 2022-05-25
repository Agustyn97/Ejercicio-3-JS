/* Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.

👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id 
coincida con el numero ingresado en el input. 

🚨 Si no coincide con ningún id, renderizar un mensaje de error. */

const pizzas = [
    {
        id: 1,
        nombre: "Muzza1",
        ingredientes: ["salsa", "queso muzzarela"],
        precio: 500
    },
    {
        id: 2,
        nombre: "Especial",
        ingredientes: ["Jamon", "queso muzzarela, morrones"],
        precio: 580
    },
    {
        id: 3,
        nombre: "Napolitana",
        ingredientes: ["salsa", "queso muzzarela","tomates"],
        precio: 700
    },
    {
        id: 4,
        nombre: "4 quesos",
        ingredientes: ["salsa", "queso muzzarela","queso azul", "parmesano", "provolone"],
        precio: 900
    },
    {
        id: 5,
        nombre: "hawaiana",
        ingredientes: ["salsa", "queso muzzarela", "jamon", "anana"],
        precio: 1100
    },
    {
        id: 6,
        nombre: "Huevo y Panceta",
        ingredientes: ["salsa", "queso muzzarela", "huevo", "panceta"],
        precio: 600
    },
]


window.onload = function() {

    const nombrePizza = document.querySelector("h2")
    const precio = document.querySelector("h4")
    const boton = document.querySelector("button");
    const input = document.querySelector("input");

    boton.addEventListener("click" , () => {
        const unapizza = buscarPizza(input.value)


        if(unapizza.length != 0){
            nombrePizza.innerHTML = unapizza[0].nombre
            precio.innerHTML = unapizza[0].precio
        }else{
            nombrePizza.innerHTML = "ERROR"
            precio.innerHTML = "ERROR"
        }


    });
};

function buscarPizza(valor) {
    return pizzas.filter( pizza => pizza.id == valor)
}