// Declarar las constantes de las clases y del Id.
const circulo = document.getElementById('circulo');
const texto = document.getElementsByClassName('texto')[0];
const boton = document.getElementsByClassName('boton')[0];

//Cambio de color del id Circulo.
circulo.classList.toggle('naranja');
circulo.classList.toggle('rojo');
circulo.classList.toggle('verde');

// Modificacion directa de css 
texto.style.fontSize = '30px';
texto.classList.toggle = 'negrita';
// modificado por el Set de atributos.
boton.setAttribute('style','font-size: 25px ; border-radius: 20%; background-color : gray;');
