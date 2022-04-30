const open_carrito = document.getElementById('open_carrito');
const modal_carrito = document.getElementById('carrito-modal-container')
const close_carrito =  document.getElementById('close_carrito');

open_carrito.addEventListener('click',()=>{
    modal_carrito.classList.add('show')
})

close_carrito.addEventListener('click',()=>{
    modal_carrito.classList.remove('show')
})






