import {api,datos} from "./main.js";

export const buscandoDeEpisodios = document.querySelector("input");
const btn = document.getElementById("btn");

btn.addEventListener("click",api);

const contenedor = document.getElementById("contenedor");



export function contenedorDatos(){
const filtrado = datos.filter (el => el.length > 2);
console.log(filtrado);
}