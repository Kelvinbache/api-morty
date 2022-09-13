import { tiempo } from "./index.js";

function manejador() {
  tiempo();
}

const numero1 = document.querySelector(".numero1");
const numero2 = document.querySelector(".numero2");
const btn = document.getElementById("btn");

btn.addEventListener("click", manejador);

export { numero1, numero2 };
