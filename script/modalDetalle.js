const open2 =  document.getElementById('open2');
const detalle_container =  document.getElementById('detalle_container');
const modal_detalle = document.getElementById('modal_detalle');
const close2 = document.getElementById('close2');

open2.addEventListener('click',()=>{
    detalle_container.classList.add('show2');
    modal_detalle.classList.add('show2');
})

close2.addEventListener('click',()=>{
    detalle_container.classList.remove('show2');
    modal_detalle.classList.remove('show2');
})