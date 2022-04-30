const open_carrito = document.getElementById('open_carrito');
const modal_carrito = document.getElementById('carrito-modal-container')
const close_carrito =  document.getElementById('close_carrito');

open_carrito.addEventListener('click',()=>{
    modal_carrito.classList.add('show')
})

close_carrito.addEventListener('click',()=>{
    modal_carrito.classList.remove('show')
})

//Seccion de modal carrito lleno

//session storage - agregar objeto 

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };

// Almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));


//Traer la lista de objetos
let lista_actualizada = JSON.parse( localStorage.getItem('listaProductos'));
console.log(lista_actualizada)

function crearItemLista(lista){
    lista.forEach(item => {
        let {producto,precio,id}=item;
        console.log('precio:'+precio+'  producto:  '+producto+'  id:  '+id)
        
    });
}

crearItemLista(lista_actualizada) 


