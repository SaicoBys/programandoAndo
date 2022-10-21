let ataqueJugador
let ataqueEnemigo
function iniciarJuego() {
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
     /* Creamos una variable para guardar el boton-mascota de HTML, en JS y poder manipularlo */
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)

    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueAgua)
}

function seleccionarMascotaJugador() {
    /* Aqui creamos las variables donde vamos a guardar los mokepon, usando un Document.getElementById, para guarda cada mokepon en una variable y poder usarla mas adelante */
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spanMascotaJugador = document.getElementById('mascota-jugador')
    
    /* Aqui usamos las varaibles donde guardamos los mokepon, para hacer la logica del programa */
    if (inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = 'Ratigueya'
    } /* Si no se selecciona nada, esete mensaje se va a mostrar */ else {
        alert('Selecciona una mascota')
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaAleartoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (mascotaAleartoria == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAleartoria == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    alert(ataqueJugador)
    ataqueAleartorioEnemigo()
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    alert(ataqueJugador)
    ataqueAleartorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    alert(ataqueJugador)
    ataqueAleartorioEnemigo()
}

function ataqueAleartorioEnemigo() {
    let ataqueAleartorio = aleatorio(1,3)

    if (ataqueAleartorio == 1) {
        ataqueEnemigo = 'FUEGO'
    }
    else if (ataqueAleartorio == 2) {
        ataqueEnemigo = 'AGUA'
    }
    else {
        ataqueEnemigo = 'TIERRA'
    }
}


function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)