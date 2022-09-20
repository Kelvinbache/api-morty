import { api } from "./main.js";

const buscandoDeEpisodios = document.querySelector("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", api);

//contenedor de las imageny datos
const contenedor = document.getElementById("contenedor");

//funcion creadora de los datos
function respuestaNombreEpisodio(...datos) {
  const h2 = document.createElement("h1");

  setTimeout(() => {
    for (let i = 0; i < datos.length; i++) {
      contenedor.innerHTML += `
          <br><br>
          nombre del episodio:${datos[0]} 
          <br><br> 
          episodio:${datos[1]}
          <br><br>
          dia de lanzamineto:${datos[2]}
          <br><br>
          `;
      break;
    }
  }, 4000);

}

//funcion creadora de imagen
function respuestaImagen(image) {
  const src = document.createElement("img");
  setTimeout(() => { src.setAttribute("src", image) }, 4000);
  contenedor.appendChild(src);
  cambiarTodo();
}

//funcion de cambio
function cambiarTodo(){
  if(contenedor.childNodes.length > 2 )contenedor.childNodes[0].remove();
}

/*exportando variables */
export {
  buscandoDeEpisodios,
  respuestaNombreEpisodio,
  respuestaImagen
}