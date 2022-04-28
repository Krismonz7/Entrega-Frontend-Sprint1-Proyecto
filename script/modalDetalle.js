const open2 =  document.getElementById('open2');
const close2 = document.getElementById('close2');

const detalle_container =  document.getElementById('detalle_container');
const modal_detalle = document.getElementById('modal_detalle')

open2.addEventListener('click',()=>{
    detalle_container.classList.add('show');
    modal_detalle.classList.add('show');
})

close2.addEventListener('click',()=>{
    detalle_container.classList.remove('show');
    modal_detalle.classList.remove('show');
})