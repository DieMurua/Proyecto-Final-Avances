let imagenes = document.querySelectorAll('#caja-piezas img');

let espacio1 = document.getElementById('caja1');

let espacio2 = document.getElementById('caja2');

let espacio3 = document.getElementById('caja3');

function iniciar(){
for (let i=0; i<imagenes.length; i++){
    imagenes.addEventListener('dragstart', arrastrado, false)
}

    espacoio1.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);

    espacio1.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);

    espacio2.addEventListener('drop', soltar, false);

    espacoio2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);

    espacio2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);

    espacio2.addEventListener('drop', soltar, false);

    espacio3.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    espacio3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);

    espacio3.addEventListener('drop', soltar, false);
}

function arrastrado(e){
    elemento = e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltar(e){
    e.preventDefault();
    console.log(e)
    let id = e.dataTransfer.getData('Text');
    let imagen = document.getElementById(id);
    imagen.style.display = 'none';
    e.target.innerHTML = '<img src= "'+imagen.src+'"height= "350px" width= "270px">';
}

iniciar()

const juego = document.getElementById('juego');
const botonReinicio = document.getElementById('boton-reinicio');

const original = juego.innerHTML;

function reiniciarContenido() {
    juego.innerHTML = original;
}

botonReinicio.addEventListener('click', reiniciarContenido);
