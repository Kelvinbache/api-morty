import {buscandoDeEpisodios , respuestaNombreEpisodio,respuestaImagen} from "./app.js";

export async function api() {

  /*llamando las carecteristicas de los episodios */
  const caracteristicas = await fetch(`https://rickandmortyapi.com/api/character/${buscandoDeEpisodios.value}`);

  /*llamando a los  episodios */
  const episodios = await fetch(`https://rickandmortyapi.com/api/episode/${buscandoDeEpisodios.value}`);

  /*buscando los datos*/
  const jason = caracteristicas.json().then((mostra) => {
    return respuestaImagen(mostra.image);
  });

  const episodiosJson = episodios.json().then((otros) => {
    return respuestaNombreEpisodio(otros.name, otros.episode, otros.air_date);
  });

}

/*cosas que te piden en la aplicacion

1)mostrar nombre,dia de lanzamiento y
2)mostra una imagen y episodio
3)cambiar los datos de entrada y salida
4)diferenciar las longitudes
5)colocar manejador de errores
*/
