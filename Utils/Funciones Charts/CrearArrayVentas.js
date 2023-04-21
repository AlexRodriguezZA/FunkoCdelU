import Ventas from "./Ventas";


//El objetivo de esta funcion es
//Crear el array que contenga las ventas en determinado mes
async function CrearArrayVentas() {
  let array_ventas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const ventas = await Ventas();

  ventas.forEach((venta) => {

    //Obetenemos el mes -> Ej: "2023-03-34" -> obtenemos los valores "03" 
    const numero_mes = venta.fecha[5] + venta.fecha[6];
    const numero_mes_entero = parseInt(numero_mes, 10);

    //Es " -1 " por que el array empienza desde el punto cero es decir si es el mes -> 03 
    //el valor se va a guardar en la posición -> 2 
    array_ventas[numero_mes_entero-1] = array_ventas[numero_mes_entero-1] + 1;
    
  });

  return array_ventas;

}

export default CrearArrayVentas;
