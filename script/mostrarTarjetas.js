

const data = "https://tiendita-json.herokuapp.com/ofertas";
const data_populares = "https://tiendita-json.herokuapp.com/populares";
const cards = document.getElementById('cards');
const cards_2 = document.getElementById('cards_2');

function trearProducto (){
    fetch(data)
    .then((res)=>res.json())
    .then((data)=> crearTarjeta(data))
}

function crearTarjeta(datos){
    console.log(datos);
    cards.innerHTML="";
    datos.forEach(objeto => {
        let nombre= objeto.nombre;
        let precio= objeto.precio;
        let descuento= objeto.descuento;
        let imagen= objeto.imagen;
        cards.innerHTML+=`
        <div class="tarjeta">
        <p class="descuento">
            ${descuento}
        </p>
        <div class="imagen_tarjeta">
        <img src=${imagen} alt="">
        </div>
        <p class="precio">Precio:$ ${precio} </p>
        <p class="titulo"> ${nombre}</p>
        <button class="agregar">
            Agregar
        </button>
    </div> 
        `
    });

}
trearProducto();
