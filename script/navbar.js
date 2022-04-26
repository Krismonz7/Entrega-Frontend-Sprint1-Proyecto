const ham = document.querySelector('.ham');
const enlaces = document.querySelector('.enlaces-menu');
const barras = document.querySelectorAll('.ham span');



ham.addEventListener('click', () => {
    enlaces.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
    

localStorage.setItem('productos',[
    {
        "nombre":"Limon",
        "precio":"26,8",
        "descuento":"32",
        "imagen":"img/ofertas/Product.jpg"

    },
    {
        "nombre":"Tomate",
        "precio":"21",
        "descuento":"20",
        "imagen":"img/ofertas/Product (1).jpg"

    },
    {
        "nombre":"Aguacate",
        "precio":"30",
        "descuento":"24",
        "imagen":"img/ofertas/Product.png"
    },
    {
        "nombre":"manzana",
        "precio":"17",
        "descuento":"10",
        "imagen":"img/ofertas/Product (2).png"

    },
    {
        "nombre":"Hoja de cactus",
        "precio":"10",
        "descuento":"57",
        "imagen":"img/ofertas/Product (1).png"

    }
])
});
