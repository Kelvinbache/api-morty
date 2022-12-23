import {creadoraDeImagenes} from './app.js';

async function api(numero) {

  /*llamando las carecteristicas de los episodios */
  const caracteristicas = await fetch(`https://rickandmortyapi.com/api/character/${numero}`);
  
  //buscando el objecto json
  const jason =  caracteristicas.json().then((mostral)=> {
       
 /*pasando las peticiones de la api a recorridos */
        manejadorDeRecorrido(mostral);  
  }); 
}

/*estamos recorriendo las peticiones de la api*/
function manejadorDeRecorrido(resultado){
     creadoraDeImagenes(resultado.image);
}

export {api}

/*cosas que te piden en la aplicacion
1)separar los elementos del jason
3)crear una forma de que las imagen salgan a lasar
4)controlador de errores para la busqueda de imagenes
5)crear el nodo para mostral el enlace de la foto
*/
