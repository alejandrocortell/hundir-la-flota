let tablero
let tableroJugador

function elegirDificultad(nivel) {
  tablero = crearTableroVacio()
  tableroJugador = crearTableroVacio()

  if (nivel === 0) {
    nivelFacil()
  } else if (nivel === 1) {
    nivelMedio()
  } else if (nivel === 2) {
    nivelDificil()
  }
  document.getElementById('estado').innerHTML = 'Inicio del juego';
  cambiaVisualizacionBotones()
  generaTabla(tableroJugador, tablero)

  // Debug
  console.log(imprimeTablero(tablero))
  //console.log(imprimeTablero(tableroJugador))
}