import {api} from './main.js';

/*buscando la caja madre para las imagenes*/
const caja = document.getElementById("caja");

/*llamando al boton para iniciar la busqueda de los archivos*/
const boton = document.getElementById('boton');
boton.addEventListener('click',inicio);

/*retorna un munero al azar*/
function imagenAlAzar (){
    const numero = Math.floor(Math.random() * 200/1)
    return numero;
}

/*funcion ejecutora para los achivos*/
function inicio(){
   api(imagenAlAzar());
   limiteDeTamano();
}

/*funcion para crear imagen y esperar las imagenes de la api*/
function creadoraDeImagenes(imagenes){
    
/*creando un elemento para crear imagenes*/
const imagen = document.createElement("img");

/*colocando un atributo para pasar los enlaces*/
imagen.setAttribute("src",imagenes);

/*colocando un direccion a  la imagen*/
imagen.setAttribute("class","imagen");

/*pegando las imagenes a la caja madre*/
  caja.appendChild(imagen);
}

/*estamos poniendo limintes a las imagenes*/
function  limiteDeTamano(){
       if(caja.children.length >2 )boton.removeEventListener('click',inicio,false);
       
     /*tiempo de espera para mostral el mensaje al usuario*/
     
       if(caja.children.length > 2 ) setTimeout( ()=> {
              return alert('PULSE F5 PARA VOLVER A BUSCAR MAS IMAGENES')
    },2000);
}

/*exportando la funcion para buscar las imagenes*/
export{creadoraDeImagenes}