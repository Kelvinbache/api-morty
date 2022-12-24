import {api} from './main.js';

/*buscando la caja madre para las imagenes*/
const caja = document.getElementById("caja");

/*llamando al boton para iniciar la busqueda de los archivos*/
const boton = document.getElementById('boton');
boton.addEventListener('click',inicio);

/*retorna un munero al azar*/
function imagenAlAzar (){
    const numero = Math.floor(Math.random() * 200/3);
    return numero;
}

/*funcion ejecutora para los achivos*/
function inicio(){
   api(imagenAlAzar());
}

/*funcion para crear imagen y esperar las imagenes de la api*/
function creadoraDeImagenes(imagenes){
    
/*creando un elemento para crear imagenes*/
const imagen = document.createElement("img");

/*colocando un atributo para pasar los enlaces*/
imagen.setAttribute("src",imagenes);

/*pegando las imagenes a la caja madre*/
  caja.appendChild(imagen);

    setTimeout(cambiarImagen,1000);
}

/*Aqui estamos cambian las imagenes*/
function cambiarImagen(){
   if(caja.children.length > 1) caja.children[0].remove();
}



/*exportando la funcion para buscar las imagenes*/
export{creadoraDeImagenes}