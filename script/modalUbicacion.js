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



//valor ciudad navbar
const listado_ciudades = document.getElementById('listado_ciudades')
const ciudad =  document.getElementById('valor_ciudad')

//Modal de carrito
const ciudad_modal_carrito =  document.getElementById('ciudad_modal_carrito')


function valor_ciudad(){
    localStorage.setItem('ubicacion',listado_ciudades.value);
    ciudad.innerHTML=`${listado_ciudades.value}`
    ciudad_modal_carrito.innerHTML=` ${listado_ciudades.value}`

}