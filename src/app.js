import { api } from "./main.js";

const buscandoDeEpisodios = document.querySelector("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", api);

const contenedor = document.getElementById("contenedor");

function respuesta(...datos) {
  setTimeout(() => {for (const data in datos) {
          console.log(data.length[0]);
  }}, 4000);
}

/*exportando variables */
export {
  buscandoDeEpisodios,
  respuesta
}