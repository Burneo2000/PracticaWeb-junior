//Muestrame el menu
const showMenu = (toggLeId, navId) => {
    const toggle = document.getElementById(toggLeId);
    nav = document.getElementById(navId);

    //Validamos si la variable existe
    if(toggle && nav){
        toggle.addEventListener('click', () => {
            //Agregamos la clase show-menu a la etiqueta div que contiene el boton hamburguesa
            nav.classList.toggle('show-menu');
        })
    } 
}

showMenu('nav-toggle','nav-menu');


//>>>>>>>>>>>>>>>>>>>>> TESTIMONIOS >>>>>>>>>>>>>>>>>>>>>

let slider = document.querySelector('#slider-contenedor');
let sliderIndividual = document.querySelectorAll('#slider-test');
let contador = 1;
let ancho = sliderIndividual[0].clientWidth;
let intervalo = 5000;


//Para que el slider se adapte a diferentes pantallas
window.addEventListener('resize', function(){
    ancho = sliderIndividual[0].clientWidth; //volvemos a calcular en ancho del slide
});
//Para que el slider se adapte a diferentes pantallas


//ejecutamos la funcion cada cinco segundos
setInterval(function tiempo() {
    slides(); 
},intervalo);
//ejecutamos la funcion cada cinco segundos


function slides() {
    slider.style.transform = 'translate('+ (- ancho * contador) + 'px';
    slider.style.transition = 'transform 1s';
    contador++;

    //Si la transicion llega al limite de slides iniciamos de cero
    if(contador == sliderIndividual.length){
        contador = 0;
    }
}
