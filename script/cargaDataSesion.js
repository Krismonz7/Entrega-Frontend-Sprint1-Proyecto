//session storage - agregar objeto 
const productos = [{nombre:'zukaritas', cantidad:3,precio:20},
{nombre:'frutloops', cantidad:1,precio:22},
{nombre:'Rayos', cantidad:3,precio:12},
{nombre:'salmon', cantidad:3,precio:37},
{nombre:'Super Ricas', cantidad:6,precio:20}];
const guardarLocal = (clave, valor) => { sessionStorage.setItem(clave, valor) };

// Almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));




//Boton de guardado de producto  
const lista_entera = JSON.parse(sessionStorage.getItem('listaProductos'));
console.log(lista_entera)
let elemento={};
let cantidad = 1;
function agregar_carrito(nombre,id,seccion,precio,imagen){
    console.log('se a agregado un objeto al carrito en '+seccion);
    elemento = {nombre:nombre,id:id,seccion:seccion,precio:precio,imagen:imagen}
    console.log(elemento)
    lista_entera.push(elemento)
    console.log(lista_entera)

}

console.log(lista_entera)
    





