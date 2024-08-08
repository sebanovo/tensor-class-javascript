const $ = elemento => document.querySelector(elemento);

const botones = {
  Cargar: $('#Cargar'),
  CargarSerieAritmetica: $('#CargarSerieAritmetica'),
  CargarSerieGeometrica: $('#CargarSerieGeometrica'),
  Pertenencia: $('#Pertenencia'),
  VerificarMayor: $('#VerificarMayor'),
  VerificarMenor: $('#VerificarMenor'),
  VerificarTodosIguales: $('#VerificarTodosIguales'),
  MultiplicacionPorEscalar: $('#MultiplicacionPorEscalar'),
  Transposición: $('#Transposición'),
  DevolverMayor: $('#DevolverMayor'),
  DevolverMenor: $('#DevolverMenor'),
  Ordenar: $('#Ordenar'),
  SegmentarParImpar: $('#SegmentarParImpar'),
  IntercalarParImpar: $('#IntercalarParImpar'),
  VerificarOrdenado: $('#VerificarOrdenado'),
  BuscarPosicion: $('#BuscarPosicion'),
  Frecuencia: $('#Frecuencia')
};

export default botones;
