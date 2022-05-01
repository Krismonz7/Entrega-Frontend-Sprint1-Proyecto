//seccion de variaciones en el modal carrito
const seccion  =  document.getElementById('general_modal')


//session storage - agregar objeto 
const productos = [{nombre:'zukaritas', cantidad:3,precio:20},
{nombre:'frutloops', cantidad:1,precio:22},
{nombre:'Rayos', cantidad:3,precio:12},
{nombre:'salmon', cantidad:3,precio:37},
{nombre:'Super Ricas', cantidad:6,precio:20}];
const guardarLocal = (clave, valor) => { sessionStorage.setItem(clave, valor) };


// Almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));


//Condicional de carrito vacio/lleno
//Traer la lista de objetos
let lista = JSON.parse( sessionStorage.getItem('listaProductos'));

if(lista === '[]'){
    console.log('no hay nada en el carrito');
    seccion.innerHTML=''; 
    seccion.innerHTML=`

    <div class="imagen_modal_carrito">
                <img src="img/modales/carrito/car_vacio.png" alt="">
                </div>
                <h3>Tu carrito esta vacio</h3>
    <div class="footer_modal_carrito">
    <button class="vaciar" id="vaciar_canasta">
        Vaciar carrito
    </button>

    <button class="ir_pago" id="ir_pago">
        <h4 class="numero">
            1
        </h4>
        <h4>Ir a pagar</h4>
        <h4 class="total_pago">
            260$
        </h4>
    </button>
</div>
    `
}






if(sessionStorage.getItem('listaProductos').length >3 ){
    console.log('hay algo en el carrito');
    lista.forEach(objeto=>{
        let{nombre,precio,cantidad}=objeto;
        seccion.innerHTML+=`
    <div class="modal_carrito_tarjeta">
        <div class="modal_carrito_imagen_tarjeta">
        <img src="img/populares/Product(1).png" alt="">
        </div>
        <div class="titulos">
            <h1 class="nombre">
                ${nombre}
            </h1>
            <h3 class="precio">
                $${precio}
            </h3>
        </div> 
        <div class="cantidades">
            <button class="boton_cantidad">
                +
            </button>
            <h2 class="cantidad">
                ${cantidad}
            </h2>
            <button class="boton_cantidad">
                -
            </button>
        </div>
    </div>
    `
    
     })
    
}


