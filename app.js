// --- Juego de Palabras ---
let palabraSecreta;
let intentos = 0;
const listaPalabras = ["sol", "luna", "estrella", "mar", "cielo", "flor", "montaña", "rio", "fuego", "nube" , "bosque", "tierra", "hoja", "viento", "lluvia" , "arbol"];

// 🎵 Cargar sonidos
const sonidoAcierto = new Audio("sonidos/sonido-correcto-331225.mp3");
const sonidoError = new Audio("sonidos/incorrect-293358.mp3");

condicionesIniciales();

function condicionesIniciales() {
  palabraSecreta = listaPalabras[Math.floor(Math.random() * listaPalabras.length)];
  intentos = 0;
  asignarTextoElemento('h1', 'Adivina la Palabra 🌟');
  asignarTextoElemento('p', 'Escribe una palabra relacionada con la naturaleza');
  limpiarCaja();
  document.getElementById('reiniciar').disabled = true;
  console.log("Palabra secreta:", palabraSecreta);
}

function asignarTextoElemento(selector, texto) {
  const elemento = document.querySelector(selector);
  elemento.innerHTML = texto;
}

function limpiarCaja() {
  document.getElementById('palabraUsuario').value = "";
}

function intentoDeUsuario() {
  const palabraUsuario = document.getElementById('palabraUsuario').value.trim().toLowerCase();

  if (!palabraUsuario) {
    asignarTextoElemento('p', '⚠️ Escribe una palabra antes de intentar.');
    return;
  }

  intentos++;

  if (palabraUsuario === palabraSecreta) {
    asignarTextoElemento('p', `🎉 ¡Acertaste! La palabra era "${palabraSecreta}". Lo lograste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'} 👏`);
    document.getElementById('reiniciar').disabled = false;
     sonidoAcierto.play(); // ✅ sonido de acierto
  } 
  else if (palabraUsuario.length === palabraSecreta.length) {
    asignarTextoElemento('p', '😅 Tienen la misma cantidad de letras, ¡pero no es la palabra correcta!');
    sonidoError.play(); // ❌ sonido de error
} 
    else if (palabraUsuario.length > palabraSecreta.length) {
    asignarTextoElemento('p', '❌ La palabra secreta es más corta 📏');
    sonidoError.play(); // ❌ sonido de error
} 
  else {
    asignarTextoElemento('p', '❌ La palabra secreta es más larga 📏');
    sonidoError.play(); // ❌ sonido de error
}

  limpiarCaja();
}

function reiniciar() {
  condicionesIniciales();
}