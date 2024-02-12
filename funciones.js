const nombreUsuario = "";
let contadorTulipanes = 1;
let carrito = [];

const  productos = [
    {
        imagen: "./image/Flower4.webp",
        nombre: "Ramo tulipanes azules y pompitos amarillos",
        precio: 89.00,
        cantidad: 1
    },
    {
        imagen: "./image/Flower5.webp",
        nombre: "Arreglo Cerámica con Tulipanes",
        precio: 169.00,
        cantidad: 1
    },
    {
        imagen: "./image/Flower6.webp",
        nombre: "Arreglo Girasoles Primavera",
        precio: 149.00,
        cantidad: 1
    },
    {
        imagen: "./image/Flower6.webp",
        nombre: "Arreglo Girasoles Primavera",
        precio: 149.00,
        cantidad: 1
    }

];

function iniciarMap(){

}

// Función para agregar productos al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.log(`"${producto.nombre}" ha sido agregado al carrito.`);
}

// Función para mostrar productos en el carrito
function mostrarProductoEnCarrito(producto) {
    const carritoDiv = document.getElementById('tulipanes-con-pompitos');

    // Crear elementos HTML para mostrar el producto
    const divCol = document.createElement('div');
    divCol.classList.add('col');

    const img = document.createElement('img');
    img.src = producto.imagen;
    img.alt = producto.nombre;
    img.width = 180;
    img.height = 180;
    img.classList.add('img-fluid');

    divCol.appendChild(img);
    // carritoDiv.appendChild(divCol);
}

// Mostrar productos agregados al carrito al cargar la página
window.onload = function() {
    // Supongamos que carrito es un array con los productos agregados
    const carrito = [
        { imagen: './image/Flower4.webp', nombre: 'Ramo tulipanes azules y pompitos amarillos', precio: 'S/ 89.00' },
        // Agrega los demás productos según sea necesario
    ];

    // Mostrar cada producto
    carrito.forEach(mostrarProductoEnCarrito);
};

//guardando los datos de el formulario registro en la sesion storage

function registrate(event){
    event.preventDefault();
    let nombre = document.getElementById("name").value;
    localStorage.setItem('ls_name', nombre);
    let lastName = document.getElementById("last-name").value;
    localStorage.setItem('ls_lastName', lastName);
    let tipoDocumento = document.getElementById("tipo-documento").value;
    localStorage.setItem('ls_tipoDocumento', tipoDocumento);
    let noDocumento = document.getElementById("document").value;
    localStorage.setItem('ls_noDocumento', noDocumento);
    let correoUsuario = document.getElementById("email").value;
    localStorage.setItem('ls_email', correoUsuario);
    let telefono = document.getElementById("phone").value;
    localStorage.setItem('ls_telefono', telefono);
    let contrasena = document.getElementById("password").value;
    localStorage.setItem('ls_password', contrasena)

    window.location.href = 'login.html';
}


//Guardando el correo de inicio de sesion en la sesion storage
function inicio(event){
    event.preventDefault();
    let correoElectronico = document.getElementById("email").value;
    localStorage.setItem('ls_correoElectronico', correoElectronico);
    window.location.href = 'index.html';
    event.preventDefault();

   

}

//guardando los campos del formulario perfil

function registroPerfil(event){
    event.preventDefault();

    let direccionUsuario = document.getElementById("inputAddress").value;
    localStorage.setItem('ls_direccionUsuario',direccionUsuario);

    let pais = document.getElementById("inputCity").value;
    localStorage.setItem('ls_pais', pais);

    let ciudad = document.getElementById("inputState").value;
    localStorage.setItem('ls_ciudad', ciudad);


}

//asignando datos de los formularios anteriores en el formato checkout 

let nombre = localStorage.getItem('ls_name');
if (nombre){
    document.getElementById('firstName').value = nombre;  
}

let apellido = localStorage.getItem('ls_lastName');
if (apellido){  
    document.getElementById('lastName').value = apellido;  
}

let correoElectronico = localStorage.getItem('ls_correoElectronico');
if (correoElectronico) {
    document.getElementById('email2').value = correoElectronico;
    
}

let direccion = localStorage.getItem('ls_direccionUsuario');
if (direccion){
    document.getElementById('address').value = direccion;
}

let pais = localStorage.getItem('ls_pais');
if(pais){
    document.getElementById('country').value = pais;
}

let ciudad = localStorage.getItem('ls_ciudad');
if(ciudad){
    document.getElementById('state').value = ciudad;
}

//cerrar sesion y/o guardar datos del formulario

let confirmacionPago = document.getElementById('botonPago');
function alertar(){
    alert("El pago fue realizado exitosamente")
    window.location.href = 'perfil.html';
}

confirmacionPago.addEventListener('click', alertar)

function cerrarSesion() {
    localStorage.removeItem('ls_direccionUsuario');
    localStorage.removeItem('ls_pais');
    localStorage.removeItem('ls_ciudad');
    localStorage.clear();
    window.location.href = "login.html";
}

//API 

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(data => {
        data.forEach(user =>  {
            const markup = `<li>${user.name}</li>`;
            document.getElementById('voluntarios').insertAdjacentHTML('beforeend', markup)
        })
    })
    .catch(error => console.log(error));



//Incrementando productos con el boton
// document.getElementById("tulipanes-carrito").innerHTML = contadorTulipanes;

// function incremento(){
//     const spanElement = document.getElementById('tulipanes-carrito');
//     contadorTulipanes++;
//     spanElement.innerText = contadorTulipanes;   
// }

// function decremento(){
//     const spanElement = document.getElementById('tulipanes-carrito');
//     contadorTulipanes--;
//     spanElement.innerText = contadorTulipanes;   
// }

//Agregar el event listener a cada producto 
// document.getElementById('tulipanes').addEventListener('click', function() {
//     agregarAlCarrito(productos.tulipanes);
// });

// document.getElementById('tulipanesCeramica').addEventListener('click', function() {
//     agregarAlCarrito(productos.ceramicaConTulipanes);
// });

// document.getElementById('girasolesPrimavera').addEventListener('click', function() {
//     agregarAlCarrito(productos.arregloConGirasoles);
// });

// document.getElementById('folkanica').addEventListener('click', function() {
//     agregarAlCarrito(productos.folkanicaPrimavera);
// });



//usar el correo electronico en el checkout 
