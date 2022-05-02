const open_carrito = document.getElementById('open_carrito');
const modal_carrito_container = document.getElementById('carrito-modal-container')
const close_carrito =  document.getElementById('close_carrito');

open_carrito.addEventListener('click',()=>{
    modal_carrito_container.classList.add('show');
})

close_carrito.addEventListener('click',()=>{
    modal_carrito_container.classList.remove('show');
})


//seccion de iframe



//Elementos a alterar en el modal
const seccion_carrito= document.getElementById('seccion_carrito');
const modal_carrito = document.getElementById('sub_modal_carrito');

let lista = JSON.parse( sessionStorage.getItem('listaProductos'));

if(lista === '[]'){
    console.log('no hay nada en el carrito');
    seccion_carrito.innerHTML=`
    <iframe src="modalCarrito.html" frameborder="0" class="modal_iframe"></iframe>
    `;

}if(sessionStorage.getItem('listaProductos').length >3 ){
    console.log('hay productos en el carrito')
    modal_carrito.innerHTML=`
    <iframe src="modalCarrito.html" frameborder="0" class="modal_iframe"></iframe>

    <div class="footer_modal_carrito">
    <button class="vaciar" id="vaciar_canasta">
        Vaciar carrito
    </button>

    <button class="ir_pago" id="ir_pago">
        <h4 class="numero">
            5
        </h4>
        <h4>Ir a pagar</h4>
        <h4 class="total_pago">
            260$
        </h4>
    </button>
</div>
    `
}






