function nivelDificil() {
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
  while (lanchas < 1) {
    x = numeroAleatorio(0, 9)
    y = numeroAleatorio(0, 9)

    if (tablero[x][y] === '-') {
      tablero[x][y] = 'L'
      lanchas++
    }
  }
}