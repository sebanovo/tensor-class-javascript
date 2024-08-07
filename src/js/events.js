import { Tensor } from "utilities-library";
import botones from "./$";

let t1 = new Tensor();

botones.Cargar.addEventListener('click', () => {
  // dejar vacío
  console.log("Hola beybi")
});

botones.CargarSerieAritmetica.addEventListener('click', () => {
  // lógica para cargar serie aritmética
});

botones.Pertenencia.addEventListener('click', () => {
  // lógica para verificar pertenencia
});

botones.VerificarMayor.addEventListener('click', () => {
  // lógica para verificar mayor
});

botones.VerificarMenor.addEventListener('click', () => {
  // lógica para verificar menor
});

botones.VerificarTodosIguales.addEventListener('click', () => {
  // lógica para verificar todos iguales
});

botones.MultiplicacionPorEscalar.addEventListener('click', () => {
  // lógica para multiplicación por escalar
});

botones.Transposición.addEventListener('click', () => {
  // lógica para transposición
});

botones.DevolverMayor.addEventListener('click', () => {
  // lógica para devolver mayor
});

botones.DevolverMenor.addEventListener('click', () => {
  // lógica para devolver menor
});

botones.Ordenar.addEventListener('click', () => {
  // lógica para ordenar
});

botones.SegmentarParImpar.addEventListener('click', () => {
  // lógica para segmentar par impar
});

botones.IntercalarParImpar.addEventListener('click', () => {
  // lógica para intercalar par impar
});

botones.VerificarOrdenado.addEventListener('click', () => {
  // lógica para verificar ordenado
});

botones.BuscarPosicion.addEventListener('click', () => {
  // lógica para buscar posición
});

botones.Frecuencia.addEventListener('click', () => {
  // lógica para frecuencia
});

export default botones;
