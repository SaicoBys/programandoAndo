function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function eleccion(jugada) {
  let result = "";
  if (jugada == 1) {
    result = "Piedra 🪨";
  } else if (jugada == 2) {
    result = "Papel 📃";
  } else if (jugada == 3) {
    result = "Tijera ✂️";
  } else {
    result = "MAL ELEGIDO";
  }
  return result;
}

// 1 es piedra, 2 es papel, 3 es tijera
let player = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  let pc = aleatorio(1, 3);
  player = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera");
  // alert("Elegiste " + player)

  alert("PC elige " + eleccion(pc));
  alert("Tú eliges " + eleccion(player));

  // COMBATE
  if (pc == player) {
    alert("EMPATE!");
  } else if (
    (player == 1 && pc == 3) ||
    (player == 2 && pc == 1) ||
    (player == 3 && pc == 2)
  ) {
    triunfos++;
    alert("GANASTE!");
  } else {
    perdidas++;
    alert("Perdiste");
  }
}
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.");
