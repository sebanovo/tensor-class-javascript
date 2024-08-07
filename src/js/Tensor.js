export class Tensor {
  filas = 0
  columnas = 0
  capas = 0

  tensor = []
  cargar(filas, columnas, capas, a, b) {
    this.filas = filas
    this.columnas = columnas
    this.capas = capas

    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = Math.floor(Math.random() * (b - a + 1) + a)
        }
      }
    }
  }

  /**
   * Metodo que carga serie Aritmetica
   * @param {number} filas numero de filas
   * @param {number} columnas numero de columnas
   * @param {number} capas numero de capas
   * @param {number} a1 valor inicial
   * @param {number} r la razón
   * @returns {void}
   */
  cargarSerieAritmetica(filas, columnas, capas, a1, r) {
    this.filas = filas
    this.columnas = columnas
    this.capas = capas

    let n = 1

    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = a1 + (n - 1) * r
          n++
        }
      }
    }
  }

  /**
   * Metodo que carga serie Geometrica
   * @param {number} filas numero de filas
   * @param {number} columnas numero de columnas
   * @param {number} capas numero de capas
   * @param {number} a1 valor inicial
   * @param {number} r la razón
   * @returns {void}
   */
  cargarSerieAritmetica(filas, columnas, capas, a1, r) {
    this.filas = filas
    this.columnas = columnas
    this.capas = capas

    let n = 1

    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = a1 * Math.round(Math.pow(r, n - 1))
          n++
        }
      }
    }
  }

  /**
   * Busca si un número pertenece al tensor
   * @param {number} num numero a buscar
   * @returns {boolean}
   */
  pertenencia(num) {
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] === num) {
            return true
          }
        }
      }
    }
    return false
  }

  /**
   * Verifica si un número es mayor a todos los números del tensor
   * @param {number} num numero a comparar
   * @returns {boolean}
   */
  verificarMayor(num) {
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] > num) {
            return false
          }
        }
      }
    }
    return true
  }

  /**
   * Verifica si un número es mayor a todos los números del tensor
   * @param {number} num numero a comparar
   * @returns {boolean}
   */
  verificarMenor(num) {
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] < num) {
            return false
          }
        }
      }
    }
    return true
  }

  /**
   * Verifica si el tensor esta ordenado respecto a una razón
   * @param {number} r la razón
   * @returns {boolean}
   */
  verificarOrdenadoRazon(r) {
    // pending
  }

  /**
   * Verifica si todos los elementos del tensor son iguales
   * @returns {boolean}
   */
  verificarTodosIguales() {
    const first = this.tensor[0][0][0]
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] !== first) {
            return false
          }
        }
      }
    }
    return true
  }

  /**
   * Verifica si todos los elementos del tensor son diferentes
   * @returns {boolean}
   */
  verificarTodosDiferentes() {
    // pending
  }

  /**
   * Suma dos matrices
   * @param {Tensor} t1 objeto de la clase tensor
   * @param {Tensor} t2 objeto de la clase tensor
   * @returns {void}
   */
  suma(t1, t2) {
    if (t1.filas !== t2.filas || t1.columnas !== t2.columnas || t1.capas !== t2.capas) {
      throw new Error('No se pueden sumar tensores de dimensiones diferentes')
    }
    this.filas = t1.filas
    this.columnas = t1.columnas
    this.capas = t1.capas

    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = t1.tensor[z][x][y] + t2.tensor[z][x][y]
        }
      }
    }
  }

  /**
   * Suma dos tensores
   * @param {Tensor} t1 objeto de la clase tensor
   * @param {Tensor} t2 objeto de la clase tensor
   * @returns {void}
   */
  resta(t1, t2) {
    if (t1.filas !== t2.filas || t1.columnas !== t2.columnas || t1.capas !== t2.capas) {
      throw new Error('No se pueden sumar tensores de dimensiones diferentes')
    }
    this.filas = t1.filas
    this.columnas = t1.columnas
    this.capas = t1.capas

    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = t1.tensor[z][x][y] - t2.tensor[z][x][y]
        }
      }
    }
  }

  /**
   * Multiplica dos tensores
   * @param {Tensor} t1 objeto de la clase tensor
   * @param {Tensor} t2 objeto de la clase tensor
   * @returns {void}
   */
  multiplicacion(t1, t2) {
    // pending
  }

  /**
   * Multiplica el tensor por un escalar
   * @param {number} escalar número real
   * @returns {void}
   */
  multiplicacionPorEscalar(escalar) {
    for (let z = 0; z < this.capas; z++) {
      if (!this.tensor[z]) {
        this.tensor[z] = []
      }
      for (let x = 0; x < this.filas; x++) {
        if (!this.tensor[z][x]) {
          this.tensor[z][x] = []
        }
        for (let y = 0; y < this.columnas; y++) {
          this.tensor[z][x][y] = escalar * this.tensor[z][x][y]
        }
      }
    }
  }

  transposicion() {
    const transposed = new Tensor().cargar(this.filas, this.columnas, this.capas, 0, 0)

    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          transposed.tensor[y][x][z] = this.tensor[z][x][y]
        }
      }
    }

    this.tensor = transposed.tensor
    this.filas = transposed.filas
    this.columnas = transposed.columnas
    this.capas = transposed.capas
  }

  intercambiar(z1, x1, y1, z2, x2, y2) {
    ;[this.tensor[z1][x1][y1], this.tensor[z2][x2][y2]] = [
      this.tensor[z2][x2][y2],
      this.tensor[z1][x1][y1]
    ]
  }

  /**
   * Retorna el número mayor del tensor
   * @returns {number}
   */
  devolverMayor() {
    if (this.filas === 0 || this.columnas === 0 || this.capas === 0) {
      throw new Error('La matriz está vacía.')
    }

    let mayor = this.tensor[0][0][0]

    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (mayor < this.tensor[z][x][y]) {
            mayor = this.tensor[x][y]
          }
        }
      }
    }
    return mayor
  }

  /**
   * Retorna el número menor del tensor
   * @returns {number}
   */
  devolverMenor() {
    let menor = this.tensor[0][0][0]

    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (menor > this.tensor[z][x][y]) {
            menor = this.tensor[z][x][y]
          }
        }
      }
    }

    return menor
  }

  /**
   * Ordena el tensor
   */
  ordenar() {
    let inf, inc
    for (let z1 = 0; z1 < this.capas; z1++) {
      for (let x1 = 0; x1 < this.filas; x1++) {
        for (let y1 = 0; y1 < this.columnas; y1++) {
          for (let z2 = z1; z2 < this.capas; z2++) {
            if (z1 === z2) {
              inf = x1
            } else {
              inf = 0
            }
            for (let x2 = inf; x2 < this.filas; x2++) {
              if (z1 === z2 && x1 === x2) {
                inc = y1
              } else {
                inc = 0
              }
              for (let y2 = inc; y2 < this.columnas; y2++) {
                if (this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1]) {
                  this.intercambiar(z1, x1, y1, z2, x2, y2)
                }
              }
            }
          }
        }
      }
    }
  }

  /**
   * Segmenta el tensor pasandole una funcion de un objeto de la instancia Numero
   * @param {MethodsOfNumero} method metodo del objeto Numero
   */
  segmentarParImpar() {
    let inf
    let inc
    for (let z1 = 0; z1 < this.capas; z1++) {
      for (let x1 = 0; x1 < this.filas; x1++) {
        for (let y1 = 0; y1 < this.columnas; y1++) {
          for (let z2 = z1; z2 < this.capas; z2++) {
            if (z1 === z2) {
              inf = x1
            } else {
              inf = 0
            }
            for (let x2 = inf; x2 < this.filas; x2++) {
              if (z1 === z2 && x1 === x2) {
                inc = y1
              } else {
                inc = 0
              }
              for (let y2 = inc; y2 < this.columnas; y2++) {
                let b1 = this.tensor[z2][x2][y2] % 2 === 0
                let b2 = this.tensor[z1][x1][y1] % 2 === 0

                if (
                  (b1 && !b2) ||
                  (b1 && b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1]) ||
                  (!b1 && !b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1])
                ) {
                  this.intercambiar(z2, x2, y2, z1, x1, y1)
                }
              }
            }
          }
        }
      }
    }
  }

  intercalarParImpar() {
    let inf
    let inc
    let bool = true

    for (let z1 = 0; z1 < this.capas; z1++) {
      for (let x1 = 0; x1 < this.filas; x1++) {
        for (let y1 = 0; y1 < this.columnas; y1++) {
          if (bool) {
            for (let z2 = z1; z2 < this.capas; z2++) {
              if (z1 === z2) {
                inf = x1
              } else {
                inf = 0
              }
              for (let x2 = inf; x2 < this.filas; x2++) {
                if (z1 === z2 && x1 === x2) {
                  inc = y1
                } else {
                  inc = 0
                }
                for (let y2 = inc; y2 < this.columnas; y2++) {
                  let b1 = this.tensor[z2][x2][y2] % 2 === 0
                  let b2 = this.tensor[z1][x1][y1] % 2 === 0

                  if (
                    (b1 && !b2) ||
                    (b1 && b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1]) ||
                    (!b1 && !b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1])
                  ) {
                    this.intercambiar(z2, x2, y2, z1, x1, y1)
                  }
                }
              }
            }
          } else {
            for (let z2 = z1; z2 < this.capas; z2++) {
              if (z1 === z2) {
                inf = x1
              } else {
                inf = 0
              }
              for (let x2 = inf; x2 < this.filas; x2++) {
                if (z1 === z2 && x1 === x2) {
                  inc = y1
                } else {
                  inc = 0
                }
                for (let y2 = inc; y2 < this.columnas; y2++) {
                  let b1 = this.tensor[z2][x2][y2] % 2 === 0
                  let b2 = this.tensor[z1][x1][y1] % 2 === 0

                  if (
                    (!b1 && b2) ||
                    (!b1 && !b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1]) ||
                    (b1 && b2 && this.tensor[z2][x2][y2] < this.tensor[z1][x1][y1])
                  ) {
                    this.intercambiar(z2, x2, y2, z1, x1, y1)
                  }
                }
              }
            }
          }
          bool = !bool
        }
      }
    }
  }

  verificarOrdenado() {
    let control = this.tensor[0][0][0]
    for (let z1 = 0; z1 < this.capas; z1++) {
      for (let x1 = 0; x1 < this.filas; x1++) {
        for (let y1 = 0; y1 < this.columnas; y1++) {
          if (this.tensor[z1][x1][y1] < control) {
            return false
          }
          control = this.tensor[z1][x1][y1]
        }
      }
    }
    return true
  }

  buscar(num) {
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] === num) {
            return [x, y, z]
          }
        }
      }
    }
    return [null, null, null]
  }

  frecuencia(num) {
    let frec = 0
    for (let z = 0; z < this.capas; z++) {
      for (let x = 0; x < this.filas; x++) {
        for (let y = 0; y < this.columnas; y++) {
          if (this.tensor[z][x][y] === num) {
            frec++
          }
        }
      }
    }
    return frec
  }
}
