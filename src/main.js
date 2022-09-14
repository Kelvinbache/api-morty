import { contenedorDatos,buscandoDeEpisodios} from "./app.js";

export async function api() {

  /*llamando las carecteristicas de los episodios */
  const caracteristicas = await fetch(`https://rickandmortyapi.com/api/character/${buscandoDeEpisodios.value}`);

  /*llamando a los  episodios */
  const episodios = await fetch(`https://rickandmortyapi.com/api/episode/`);

  /*buscando los datos*/
  const jason = caracteristicas.json().then((mostra) => {
    return objectos.push({ image: mostra.image });
  });

  const episodiosJson = episodios.json().then((otros) => {
    return objectos.push(
      { nombre: otros.name },
      { episodio: otros.episode },
      { lanzamiento: otros.air_date }
    );
  });

  /*segundos que tarda la respuesta*/
  setTimeout(()=>{contenedorDatos()},4000);
}


/*contenedor de los datos*/



export const objectos = [];


/*cosas que te piden en la aplicacion
1)mostrar nombre,dia de lanzamiento y mostrar a lazar la url
2)mostra una imagen y episodio

*/
