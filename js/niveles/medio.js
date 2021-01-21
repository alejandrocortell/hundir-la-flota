function nivelMedio() {
  // Posición del portaaviones
  let x = numeroAleatorio(0, 5)
  let y = numeroAleatorio(0, 9)

  for (let index = x; index < x + 5; index++) {
    tablero[index][y] = 'P'
  }

  // Posición del acorazado
  let espacioLibre = false
  while (!espacioLibre) {
    x = numeroAleatorio(0, 9)
    y = numeroAleatorio(0, 6)

    if (tablero[x][y] === '-' &&
      tablero[x][y + 1] === '-' &&
      tablero[x][y + 2] === '-' &&
      tablero[x][y + 3] === '-') {

      espacioLibre = true

      tablero[x][y] = 'Z'
      tablero[x][y + 1] = 'Z'
      tablero[x][y + 2] = 'Z'
      tablero[x][y + 3] = 'Z'
    }
  }

  // Posición del buque
  espacioLibre = false
  while (!espacioLibre) {
    x = numeroAleatorio(0, 9)
    y = numeroAleatorio(0, 7)

    if (tablero[x][y] === '-' &&
      tablero[x][y + 1] === '-' &&
      tablero[x][y + 2] === '-') {

      espacioLibre = true

      tablero[x][y] = 'B'
      tablero[x][y + 1] = 'B'
      tablero[x][y + 2] = 'B'
    }
  }

  // Posición de las lanchas
  let lanchas = 0
  while (lanchas < 2) {
    x = numeroAleatorio(0, 9)
    y = numeroAleatorio(0, 9)

    if (tablero[x][y] === '-') {
      tablero[x][y] = 'L'
      lanchas++
    }
  }
}