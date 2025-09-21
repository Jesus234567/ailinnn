// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "All I knew", time: 5 },
  { text: "This morning when I woke", time: 5.7 },
  { text: "Is I know something now", time: 8.7 },
  { text: "Know something now I didn't before", time: 11.7 },
  { text: "And all I've seen", time: 15.7 },
  { text: "Since eighteen hours ago", time: 18.7 },
  { text: "Is green eyes and freckles and your smile", time: 21 },
  { text: "In the back of my mind making me feel like", time: 24 },
  { text: "I just wanna know you better, know you better, know you better now", time: 28 },
  { text: "I just wanna know you better, know you better, know you better now", time: 35 },
  { text: "I just wanna know you better, know you better, know you better now", time: 41 },
  { text: "I just wanna know you, know you, know you", time: 47 },
  { text: "'Cause all I know is we said, 'Hello'", time: 51 },
  { text: "And your eyes look like comin' home", time: 54 },
  { text: "All I know is a simple name", time: 58 },
  { text: "Everything has changed", time: 61 },
  { text: "All I know is you held the door", time: 64 },
  { text: "And you'll be mine and I'll be yours", time: 67 },
  { text: "All I know since yesterday", time: 69.5 },
  { text: "Is everything has changed", time: 72.5 },
  { text: "And all my walls", time: 83 },
  { text: "Stood tall painted blue", time: 86 },
  { text: "But I'll take 'em down, take 'em down", time: 89 },
  { text: "And open up the door for you", time: 91 },
  { text: "And all I feel in my stomach is butterflies", time: 94 },
  { text: "The beautiful kind, makin' up for lost time", time: 99 },
  { text: "Takin' flight, makin' me feel like", time: 101 },
  { text:"I just wanna know you better know, you better know, you better now", time: 105 },
  { text:"I just wanna know you better know, you better know, you better now", time: 112 },
  { text:"I just wanna know you better know, you better know, you better now", time: 118 },
  { text: "I just wanna know you, know you, know you", time:124 },
  { text: "'Cause all I know is we said, 'Hello'", time:128 },
  { text: "And your eyes look like comin' home", time:  131},
  { text: "All I know is a simple name", time: 135 },
  { text: "Everything has changed", time:  138},
  { text: "All I know is you held the door", time:  141},
  { text: "And you'll be mine and I'll be yours", time: 144 },
  { text: "All I know since yesterday", time:  147},
  { text: "Is everything has changed", time:  150},
  { text: "Come back and tell me why", time:  153},
  { text: "I'm feelin' like I've missed you all this time", time: 156 },
  { text: "And meet me there tonight", time: 165 },
  { text: "And let me know that it's not all in my mind", time: 169 },
  { text: "BENDITO FEBRERO", time: 173 },
  { text: "BENDITO 2025", time: 176 },
  { text: "BENDITA TÚ", time: 179 },
  { text: "PORQUE PERMITIRME ESTAR AQUÍ, HACIENDO ESTO", time: 182 },
  { text: "PORQUE LO MEJOR DE ESTA VIDA", time: 185 },
  { text: "HAS SIDO TÚ", time: 169 },
  { text: "TE AMO", time: 190},
  { text: "DOY GRACIAS A DIOSITO POR HABERME PUESTO EN TU CAMINO", time:193},
  { text: "Y ESTE ES UN PEQUEÑO DETALLE QUE QUERÍA DARTE", time: 197},
  { text: "PORQUE MÁS QUE AILIN BEDOYA", time: 200},
  { text: "ERES LA CHINITA QUE ILUMINA MIS OJOS", time: 203},
  { text: "LA MUJER QUE ME HA HECHO ENTENDER LO QUE ES AMAR",time: 206},
  { text: "LO QUE ES DE VERDAD QUERER A ALGUIEN",time:210},
  { text: "LO BONITO QUE ES QUERER",time:213},
  { text: "Y ESPERO QUE ESTE SOLO SEA EL PRINCIPIO",time:216},
  { text: "DE LO BONITO QUE NOS ESPERA EN EL FUTURO",time:219},
  { text: "TE ADORO UN MONTÓN CHINITA",time:222},
  { text: "QUE SIEMPRE ESTÉS CONMIGO ES LO QUE MÁS DESEO",time:225},
  { text: "QUEDATE POR SIEMPRE ❤️, PORQUE...",time:228},
  { text: "All I know since yesterday", time: 231 },
  { text: "Is everything has changed", time: 234},
  { text: "PARA MI CHINITA :p",time:237},
  { text: "Att: de su Pollito 🐣", time: 240 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 246000);