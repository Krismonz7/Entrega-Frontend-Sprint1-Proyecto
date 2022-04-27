//Links de heroku
const data = "https://tiendita-json.herokuapp.com/ofertas";
//Llamada de dom
const cards = document.getElementById('cards');

function trearProducto (){
    fetch(data)
    .then((res)=>res.json())
    .then((data)=> crearTarjeta(data))
}

//Seccion ofertas
function crearTarjeta(datos){
    console.log(datos);
    datos.forEach(objeto => {
        let nombre= objeto.nombre;
        let precio= objeto.precio;
        let descuento= objeto.descuento;
        let imagen= objeto.imagen;
        cards.innerHTML+=`
        <div class="tarjeta">
        <p class="descuento">
            ${descuento}%dto
        </p>
        <div class="imagen_tarjeta">
        <img src=${imagen} alt="">
        </div>
        <p class="precio">$ ${precio}/kg</p>
        <p class="titulo"> ${nombre}</p>
        <button class="agregar">
            Agregar
        </button>
    </div> 
        `
    });

}
trearProducto(data);



//Seccion populares
//Links heroku
const data_populares = "https://tiendita-json.herokuapp.com/populares";
//Llamada de DOM
const cards_2 = document.getElementById('cards_2');


function trearProducto2 (){
    fetch(data_populares)
    .then((res2)=>res2.json())
    .then((data_populares)=> crearTarjeta2(data_populares))
}


function crearTarjeta2(datos2){
    console.log(datos2);
    datos2.forEach(objeto2 => {
        let nombre2= objeto2.nombre2;
        let precio2= objeto2.precio2;
        let descuento2= objeto2.descuento2;
        let imagen2= objeto2.imagen2;
        cards_2.innerHTML+=`
        <div class="tarjeta">
        <div class="imagen_tarjeta">
        <img src=${imagen2} alt="">
        </div>
        <p class="precio">$ ${precio2}/kg</p>
        <p class="titulo"> ${nombre2}</p>
        <button class="agregar">
            Agregar
        </button>
    </div> 
        `
    });
}


