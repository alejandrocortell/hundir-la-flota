// Crea un tablero de 10x10 relleno de '-'
function crearTableroVacio() {
  let tablero = []

  for (let index = 0; index < 10; index++) {
    let nuevaFila = new Array(10)
    nuevaFila.fill('-')
    tablero.push(nuevaFila)
  }
  return tablero
}

// Crea en html una tabla del jugador a partir del array indicado
function generaTabla(tableroJugador, tablero) {
  // Obtener la referencia del elemento body
  let idTablero = document.getElementById('container-tablero')

  if (idTablero.getElementsByTagName('table')[0]) {
    idTablero.removeChild(idTablero.getElementsByTagName('table')[0])
  }

  // Crea un elemento <table> y un elemento <tbody>
  let tabla = document.createElement('table')
  let tblBody = document.createElement('tbody')

  // Crea las celdas
  for (let i = 0; i < tableroJugador.length; i++) {
    // Crea las hileras de la tabla
    let hilera = document.createElement('tr')

    for (let j = 0; j < tableroJugador[i].length; j++) {
      // Crea un elemento <td> y un nodo de texto, haz que el nodo de
      // texto sea el contenido de <td>, ubica el elemento <td> al final
      // de la hilera de la tabla
      let celda = document.createElement('td')
      let textoCelda = document.createTextNode(tableroJugador[i][j])
      celda.appendChild(textoCelda)
      celda.setAttribute('id', '*' + i + '#' + j)
      celda.setAttribute('class', 'celda')
      celda.addEventListener('click', function () {
        let x = celda.id.slice(1, 2)
        let y = celda.id.slice(3, 4)
        bombardear(x, y, tablero)
        //actualizaTableroCiego(x, y, tablero, tableroCiego)
      })
      hilera.appendChild(celda)
    }

    // agrega la hilera al final de la tabla (al final del elemento tblbody)
    tblBody.appendChild(hilera)
  }

  // posiciona el <tbody> debajo del elemento <table>
  tabla.appendChild(tblBody)
  // appends <table> into <body>
  idTablero.appendChild(tabla)
}

// Recibe las coordenadas con la casilla bombardeadas e indica si hay barco o no
function bombardear(x, y, tablero) {
  if (tablero[x][y] === '-') {
    actualizaTableroJugador(false, x, y)
  } else {
    actualizaTableroJugador(true, x, y)
  }
}

// Modifica el tablero del jugador
function actualizaTableroJugador(tocado, x, y) {
  let tableroNuevoJugador = tableroJugador
  if (tocado) {
    tableroNuevoJugador[x][y] = 'X'
    document.getElementById('*' + x + '#' + y).innerHTML = 'X'
    document.getElementById('*' + x + '#' + y).classList.add('tocado')
    document.getElementById('estado').innerHTML = '¡Tocado!'
  } else {
    tableroNuevoJugador[x][y] = 'A'
    document.getElementById('*' + x + '#' + y).innerHTML = 'A'
    document.getElementById('*' + x + '#' + y).classList.add('agua')
    document.getElementById('estado').innerHTML = '¡Agua!'
  }
  tableroJugador = tableroNuevoJugador

  compruebaTablero(tablero, tableroJugador)
}

// Comprueba si quedan barcos sin hundir
function compruebaTablero(tablero, tableroJugador) {
  let barcoVivo = false

  for (let i = 0; i < tablero.length; i++) {
    for (let j = 0; j < tablero[i].length; j++) {
      if (tablero[i][j] !== '-' && tableroJugador[i][j] === '-') {
        barcoVivo = true
      }
    }
  }

  barcoVivo ? console.log('sigue Jugando') : finJuego()
}

// Muestra/oculta los botones de selección de juego
function cambiaVisualizacionBotones() {
  let botones = document.getElementById('conjunto-botones')

  if (!botones.classList.contains('ocultar-botones')) {
    botones.classList.add('ocultar-botones')
  } else {
    botones.classList.remove('ocultar-botones')
  }
}
// Muestra los cambios tras el fin del juego
function finJuego() {
  document.getElementById('estado').innerHTML = 'Fin del juego'
  cambiaVisualizacionBotones()
}

// Devuelve un string formateado del tablero 10x10 para imprimir en consola
function imprimeTablero(tablero) {
  let stringTablero = ''

  tablero.forEach((fila) => {
    fila.forEach((posicion) => {
      stringTablero += posicion + ' '
    })
    stringTablero += '\n'
  })

  return stringTablero
}

// Devuelve un numero entero aleatorio entre min y max, ambos incluidos
function numeroAleatorio(min, max) {
  return Math.floor(min + Math.random() * (max - min + 1))
}
