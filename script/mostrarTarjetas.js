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
    console.log(datos2);
    datos2.forEach((objeto2) => {
        let nombre2= objeto2.nombre2;
        let precio2= objeto2.precio2;
        let imagen2= objeto2.imagen2;
        cards2.innerHTML+=`
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


crearProducto(data);
crearProducto2(data2);


