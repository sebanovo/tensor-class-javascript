import { promptSwal, check, messageSwal } from '../lib/alertSwal'
import { Tensor } from 'utilities-library'
import {
  drawTensor,
  updateTensor,
  incrementLayerGrap,
  decrementLayerGrap
} from './tensor-visualizer'
import botones from '../lib/components'

let t1 = new Tensor()

t1.cargar(3, 3, 3, 1, 9)
drawTensor(t1)

document.getElementById('increase-layer').addEventListener('click', () => {
  incrementLayerGrap()
  updateTensor(t1)
})

document.getElementById('decrease-layer').addEventListener('click', () => {
  decrementLayerGrap()
  updateTensor(t1)
})

botones.Cargar.addEventListener('click', async () => {
  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Capas')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('Rango A')
  if (!result4.isConfirmed) return
  const result5 = await promptSwal('Rango B')
  if (!result5.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const nroCapas = Number(result3.value)
  const a = Number(result4.value)
  const b = Number(result5.value)

  t1.cargar(nroFila, nroColumna, nroCapas, a, b)

  updateTensor(t1)
  check({
    title: 'Cargado',
    text: 'El tensor se ha cargado con exito!!!',
    icon: 'success'
  })
})

botones.CargarSerieAritmetica.addEventListener('click', async () => {
  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Capas')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('Número inicial (a1)')
  if (!result4.isConfirmed) return
  const result5 = await promptSwal('Razón (razón)')
  if (!result5.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const nroCapas = Number(result3.value)
  const a1 = Number(result4.value)
  const razon = Number(result5.value)

  t1.cargarSerieAritmetica(nroFila, nroColumna, nroCapas, a1, razon)

  updateTensor(t1)
  check({
    title: 'Cargar Serie Aritmetica',
    text: 'El tensor se ha cargado con exito!!!',
    icon: 'success'
  })
})

botones.CargarSerieGeometrica.addEventListener('click', async () => {
  const result1 = await promptSwal('Filas')
  if (!result1.isConfirmed) return
  const result2 = await promptSwal('Columnas')
  if (!result2.isConfirmed) return
  const result3 = await promptSwal('Capas')
  if (!result3.isConfirmed) return
  const result4 = await promptSwal('Número inicial (a1)')
  if (!result4.isConfirmed) return
  const result5 = await promptSwal('Razón (razón)')
  if (!result5.isConfirmed) return

  const nroFila = Number(result1.value)
  const nroColumna = Number(result2.value)
  const nroCapas = Number(result3.value)
  const a1 = Number(result4.value)
  const razon = Number(result5.value)

  t1.cargarSerieGeometrica(nroFila, nroColumna, nroCapas, a1, razon)

  updateTensor(t1)
  check({
    title: 'Cargar Serie Geometrica',
    text: 'El tensor se ha cargado con exito!!!',
    icon: 'success'
  })
})

botones.Pertenencia.addEventListener('click', async () => {
  const number = await promptSwal('Número')
  messageSwal(t1.pertenencia(Number(number.value)) ? 'Pertenece' : 'No pertenece')
})

botones.VerificarMayor.addEventListener('click', async () => {
  const number = await promptSwal('Número')
  messageSwal(t1.verificarMayor(Number(number.value)) ? 'Es mayor' : 'No es Mayor')
})

botones.VerificarMenor.addEventListener('click', async () => {
  const number = await promptSwal('Número')
  messageSwal(t1.verificarMenor(Number(number.value)) ? 'Es menor' : 'No es Menor')
})

botones.VerificarTodosIguales.addEventListener('click', () => {
  messageSwal(
    t1.verificarTodosIguales()
      ? 'Todos los elementos son iguales ✔'
      : 'No todos los elementos son iguales ❌'
  )
})

botones.MultiplicacionPorEscalar.addEventListener('click', async () => {
  const number = await promptSwal('Escalar')
  t1.multiplicacionPorEscalar(Number(number.value))
  updateTensor(t1)
})

botones.Transposición.addEventListener('click', () => {
  t1.transposicion()
  t1.transposicion()
  updateTensor(t1)
  check({
    title: 'Transposición',
    text: 'Tensor transpuesto Correctamente',
    icon: 'success'
  })
})

botones.DevolverMayor.addEventListener('click', () => {
  messageSwal(`Número mayor: ${t1.devolverMayor()}`)
})

botones.DevolverMenor.addEventListener('click', () => {
  messageSwal(`Número menor: ${t1.devolverMenor()}`)
})

botones.Ordenar.addEventListener('click', () => {
  t1.ordenar()
  updateTensor(t1)
  check({
    title: 'Ordenar',
    text: 'Tensor Ordenado Correctamente',
    icon: 'success'
  })
})

botones.SegmentarParImpar.addEventListener('click', () => {
  t1.segmentar('esPar')
  updateTensor(t1)
  check({
    title: 'Segmentar Par Impar',
    text: 'Tensor Segmentado Correctamente',
    icon: 'success'
  })
})

botones.IntercalarParImpar.addEventListener('click', () => {
  t1.intercalar('esPar')
  updateTensor(t1)
  check({
    title: 'Intercalar Par Impar',
    text: 'Tensor Intercalado Correctamente',
    icon: 'success'
  })
})

botones.VerificarOrdenado.addEventListener('click', () => {
  messageSwal(t1.verificarOrdenado() ? 'Tensor Ordenado' : 'Tensor No ordenado')
})

botones.BuscarPosicion.addEventListener('click', async () => {
  const number = await promptSwal('Número a buscar')
  const [x, y, z] = t1.buscarPosicion(Number(number.value))
  messageSwal(`(x,y,z) = (${x},${y},${z})`)
})

botones.Frecuencia.addEventListener('click', async () => {
  const number = await promptSwal('Número a sacar Frecuencia')
  const frecuencia = t1.frecuencia(Number(number.value))
  messageSwal(`Frecuencia = ${frecuencia}`)
})

export default botones
