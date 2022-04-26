const open =  document.getElementById('open');
const modal_container= document.getElementById('modal_container');
const modal_principal= document.getElementById('modal_principal');
const close= document.getElementById('close');

open.addEventListener('click',()=>{
modal_principal.classList.add('show');
modal_container.classList.add('show');
})

close.addEventListener('click',()=>{
modal_principal.classList.remove('show');
modal_container.classList.remove('show');
})



//segundo modal
