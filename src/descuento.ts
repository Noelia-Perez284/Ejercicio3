let btnEnviar = <HTMLButtonElement>document.getElementById("btnEnviar");
let inputprecio = <HTMLInputElement>document.getElementById("precio");
let inputcantidad = <HTMLInputElement>document.getElementById("cantidad");
let inputmes = <HTMLInputElement>document.getElementById("mes");
let total = <HTMLElement>document.getElementById("total");

btnEnviar.addEventListener("click", () => {
  let compra: number = Number(inputprecio.value) * Number(inputcantidad.value);
  let descuento: number = compra * 0.15;
  //console.log(inputmes.value.toUpperCase())
  if (Number(inputmes.value) === 10) {
    let compradescuento = compra - descuento;
    total.innerHTML = "El monto de tu compra es " + compradescuento;
    console.log("El monto de tu compra es " + compradescuento);
  } else {
    total.innerHTML = "El monto de tu compra es " + compra;
    console.log("El monto de tu compra es " + compra);
  }
});
