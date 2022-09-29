import { api } from "./main.js";

const buscandoDeEpisodios = document.querySelector("input");
const btn = document.getElementById("btn");

btn.addEventListener("click", api);

//contenedor de las imageny datos
const contenedor = document.getElementById("contenedor");

//funcion creadora de los datos
function respuestaNombreEpisodio(...datos) {
  const ul = document.createElement("ul");

  setTimeout(() => {
    for (let i = 0; i < datos.length; i++) {
      const lista = document.createElement("li");
      lista.textContent = datos[i];
      ul.appendChild(lista);
    }
    contenedor.appendChild(ul);
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
function cambiarTodo() {
  //condicion para eliminar los primeros datos
  if (contenedor.childNodes.length > 2) {

    for (const borrar in contenedor.children) {
      setTimeout(() => {console.log(borrar)},2000);     
    }

  }
      //tiempo de espera para eliminar los datos 
}
/*exportando variables */
export {
  buscandoDeEpisodios,
  respuestaNombreEpisodio,
  respuestaImagen
}

