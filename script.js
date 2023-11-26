// Declarar las constantes de las clases y del Id.
const circulo = document.getElementById('circulo');
const texto = document.getElementsByClassName('texto')[0];
const boton = document.getElementsByClassName('boton')[0];

// Modificacion directa de css 
texto.style.fontSize = '30px';
texto.classList.toggle = 'negrita';
// modificado por el Set de atributos.
boton.setAttribute('style','font-size: 25px ; border-radius: 20%; background-color : gray;');

// Agregar un event listener al botón
boton.addEventListener('click', cambiarColorCirculo);

// Colores permitidos
const coloresPermitidos = ['#FF0000', '#00FF00', '#0000FF'];

// Función para cambiar el color del círculo
function cambiarColorCirculo() {
    // Seleccionar un color al azar de la lista de colores permitidos
    const nuevoColor = coloresPermitidos[Math.floor(Math.random() * coloresPermitidos.length)];
  
    // Aplicar el nuevo color al círculo
    circulo.style.backgroundColor = nuevoColor;
}


