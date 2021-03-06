//Links de heroku
const data = "https://tiendita-json.herokuapp.com/ofertas";

//Llamada de dom
const cards = document.getElementById('cards');

function crearProducto (){
    fetch(data)
    .then((res)=>res.json())
    .then((data)=> crearTarjeta(data))
}

//Seccion ofertas
function crearTarjeta(datos){
    datos.forEach(objeto => {
        let nombre= objeto.nombre;
        let precio= objeto.precio;
        let descuento= objeto.descuento;
        let imagen= objeto.imagen;
        let id =  objeto.id;
        let seccion ='ofertas';
        cards.innerHTML+=`
        <div class="tarjeta" value="seccion_ofertas">
        <input type="hidden" >
        <p class="descuento">
            ${descuento}%dto
        </p>
        <div class="imagen_tarjeta">
        <img src=${imagen} alt="">
        </div>
        <p class="precio">$ ${precio}/kg</p>
        <p class="titulo"> ${nombre}</p>
        <button class="agregar" onclick="agregar_carrito('${nombre}','${id}','${seccion}','${precio}','${imagen}')">
            Agregar
        </button>
    </div> 
        `
    });

}




//Seccion populares
//Links heroku
const data2 = "https://tiendita-json.herokuapp.com/populares";
//Llamada de DOM
const cards2 = document.getElementById('cards2');


function crearProducto2 (){
    fetch(data2)
    .then((res2)=>res2.json())
    .then((data2)=> crearTarjeta2(data2))
}



function crearTarjeta2(datos2){
    datos2.forEach((objeto2) => {
        let nombre= objeto2.nombre;
        let precio= objeto2.precio;
        let imagen= objeto2.imagen;
        let id=objeto2.id;
        let seccion='populares';
        cards2.innerHTML+=`
        <div class="tarjeta">
        <div class="imagen_tarjeta">
        <img src=${imagen} alt="">
        </div>
        <p class="precio">$ ${precio}/kg</p>
        <p class="titulo"> ${nombre}</p>
        <button class="agregar" onclick="agregar_carrito('${nombre}','${id}','${seccion}','${precio}','${imagen}')">
            Agregar
        </button>
    </div>  `
    });
}
crearProducto(data);
crearProducto2(data2);









