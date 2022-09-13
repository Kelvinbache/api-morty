import { numero1, numero2 } from "./main.js";

function cambio() {
  const valor1 = Number(numero1.value);
  const valor2 = Number(numero2.value);
  /*estamos rectornando los valores */
  return ejecutar(valor1, valor2);
}

async function ejecutar(valor1, valor2) {
  try {
    /*esperando los datos de la operacion */
    const numero1 = await valor1;
    const numero2 = await valor2;
    /*valor asinado cuando los datos sea correctos*/
    return numero1 + numero2;

    /*maneja los errores*/
  } catch (error) {
    console(error);
  }
}

/*esto  maneja el tiempo de ejecucion*/
export function tiempo() {
  setTimeout(() => {
    console.log(cambio());
  }, 4000);
}
