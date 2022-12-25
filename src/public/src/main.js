import {creadoraDeImagenes} from './app.js';

async function api(numero) {

  /*llamando las carecteristicas de los episodios */
  const caracteristicas = await fetch(`https://rickandmortyapi.com/api/character/${numero}`);
  if(caracteristicas.status === 404) return console.error("LA BUSQUEDAD NO ENCONTRO NADA");
  
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

*/
