//Creamos la clase producto
class producto{
    constructor ( item, imagen, material, medida, precio){
    this.item = item;
    this.imagen =imagen;
    this.material= material;
    this.medida = medida;
    this.precio = precio;}
//Muestra datos del producto
    descripcion(){
        return  ( this.item + " - " + this.material +" - "+ this.medida) };
//Muestra datos del producto+precio
    Elementos(){
        return  ( this.item + " - " + this.material +" - "+ this.medida +" - "+ "$"+this.precio) };
}


//Variables de los productos
let cajonera = new producto("Cajonera", "./images/cajonera.jpg", "Paraíso laqueado con correderas metálicas","120x47x120cm", 45000);
let sillon = new producto("Sillón", "./images/zigzag.jpg", "Pana antimanchas Zig Zag", "75x65x70cm", 28000);
let silla = new producto("Silla Eames", "./images/silla.jpg", "Patas de madera", "82x52x49cm", 8000);
let sofa = new producto( "Sofá dos cuerpos", "./images/sofa.jpg", "Pana con estructura metálica","82x75x152", 55000);
let mesa = new producto("Mesa comedor", "./images/mesa.jpg", "Madera Paraíso","73x80x120", 39000);
let ratona = new producto("Mesa ratona", "./images/ratona.jpg", "Madera Paraíso", "90x50x45cm", 19000);


//Creamos Array Catálogo y le añadimos los productos
let catalogo= [];
catalogo.push(cajonera);
catalogo.push(sillon);
catalogo.push(silla);
catalogo.push(sofa);
catalogo.push(mesa);
catalogo.push(ratona)

//Creamos el carrito con un Array
let carrito = [];

const items = document.querySelector('#items');
const carritoCompra = document.querySelector('#carrito');


            
catalogo.forEach((producto) => {
     // Estructura
     const Container = document.createElement('div');
     Container.classList.add('card', 'col-sm-4');
    // Card Body
    const ContainerCard = document.createElement('div');
    ContainerCard.classList.add('card-body');
    // Nombre
    const nombre = document.createElement('h5');
    nombre.classList.add('card-title');
    nombre.textContent = producto.descripcion()
    // Imagen
    const Imagen = document.createElement('img');
    Imagen.classList.add('img-fluid');
    Imagen.setAttribute('src', producto.imagen);
    // Precio
    const Precio = document.createElement('p');
    Precio.classList.add('card-text');
    Precio.textContent = ("$"+producto.precio)
    // Boton 
    const Boton = document.createElement('button');
    Boton.classList.add('btn-Add');
    Boton.textContent = '+';
    Boton.setAttribute("agregar", producto.Elementos());
    Boton.addEventListener('click', agregarAlCarrito);
    // Insertamos todo en HTML
    ContainerCard.appendChild(Imagen);
    ContainerCard.appendChild(nombre);
    ContainerCard.appendChild(Precio);
    ContainerCard.appendChild(Boton);
    Container.appendChild(ContainerCard);
    items.appendChild(Container);})
           
//Función Agregar productos al Carrito
function agregarAlCarrito(producto) {
// Agregamos el Producto al carrito
carrito.push(producto.target.getAttribute("agregar"));
verCarrito()
}


//Función mostrar productos en Carrito
let VerProductos=document.getElementById("carrito")
function verCarrito(){
    let VP =document.createElement("p")
    carrito.forEach((i) => {
    VP.textContent= (i);
    VerProductos.appendChild(VP)
    })
}
   


