import { tarea1 } from "./index.js";

function main() {
  console.time("tiempo de ejecucion");
  console.log("hola soy", tarea1());
  console.timeEnd("tiempo de ejecucion");
}

main();
