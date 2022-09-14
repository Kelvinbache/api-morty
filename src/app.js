import {api,objectos} from "./main.js";

export const buscandoDeEpisodios = document.querySelector("input");
const btn = document.getElementById("btn");

btn.addEventListener("click",api);

const contenedor = document.getElementById("contenedor");


export function contenedorDatos(){
  objectos.forEach(element => {
    console.log(element.image);
  });
}

