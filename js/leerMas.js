let i = 0;
let boton = document.querySelector('#historia__btn-leerMas');
boton.addEventListener('click', () => {
    
    if(!i){
        document.getElementById('leer-mas').style.display = 'inline';
        document.getElementById('historia__btn-leerMas').innerHTML = 'Ocultar';
        i = 1;
    }else{
        document.getElementById('leer-mas').style.display = 'none';
        document.getElementById('historia__btn-leerMas').innerHTML = 'Leer más';
        i = 0;
    }
});