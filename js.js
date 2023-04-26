

// Elementos del DOM
var gameText = document.getElementById("game-text");
var gameInput = document.getElementById("game-input");
var gameBtn = document.getElementById("game-btn");

// Variables del juego
var playerScore = 0;
var currentLevel = 1;

// Función para imprimir texto en el juego
function printGameText(text) {
  gameText.innerHTML += "<p>" + text + "</p>";
}

//
// Función para cambiar de nivel
function changeLevel(level) {
  currentLevel = level;

  // Limpiar el contenido del juego
  gameText.innerHTML = "";

  // Ir al nivel correspondiente
  switch (currentLevel) {
    case 1:
      printGameText("Esta persona, un hombre de mediana edad, con tez ajada y dorada por el sol, regentaba un negocio en un local cercano cuya tapadera era la alimentacion");
      printGameText("OS-Cowboy tras su caida, solo recordaba que el nombre de su contacto era muy comun en la peninsula que daba nombre al negocio");
      printGameText("¿Como se llamaba dicho sujeto?");

      break;
    case 2:
      printGameText("Saludas a Mehmet y le entregas el dispositivo retro. Mehmet te mira fijamente en busca de la palabra clave que activara su sistema operativo.");
      printGameText("Recuerdas qu estaba relacionada con algo que te proporcionó placer tantas noches solitarias.");
      printGameText("¿Cual es la clave?");
      break;
    case 3:
      printGameText("Tras la activación de Mehmet, se introduce el dispositivo y afirma: 01111001 01101111 01110011 01100101 01101101 01101001 01110100 01100101");
      printGameText("Mientras se baja la bragueta y procede a mostrarte un pad numerico");
      printGameText("Esta secuencia de numeros te agita por dentro y te remite a tiempos tecnologicos pasados");
      printGameText("¿A que version de tus antiguos compañeros protoandroides te transportaba dicho sistema operacional");
      break;
    case 4:
      printGameText("Tras introducir la clave con delicadeza, Mehmet muestra una pantalla en su pecho a la que comienza a reproducirse un video");
      printGameText("El video muestra una ciber-androide con un chaleco de luces leds naranjas atada a una silla y gritando: ");
      printGameText("TA PUTINHU TIU! TA PUTINHU TIU! TA PUTINHU TIU!  ");
      printGameText("Al fondo de la escena aprecias el logo de un animal simiesco que poblaba el continente ahora conocido como Ciberandalucia del sur");
      printGameText("Sientes un cosquilleo y un impulso irrefrenable que te mueve a actuar");
      printGameText("¿A que direccion deberias ir?");
      break;
    case 5:
      printGameText("Llegas a los HQ de CiberSBG, que se hallan custodiados por un grupo de Cibernackers.");
      printGameText("El panorama es desolador y solo te queda una opcion: LUCHAR.");
      printGameText("¿Con que armas te deshaces de ellos?");
      break;
    case 6:
      printGameText("Tras acabar con la legion de Ciberknackers, accedes al misterioso lugar en busca de la ciber-androide de tus sueños.");
      printGameText("Encuentras una puerta cerrada en una habitacion llena de piezas de metal con 7 formas diferentes entre las que se incluye un palo bien largo.");
      printGameText("A la derecha de la puerta se encuentra una ciber cerradura numerica con 4 digitos.");
      printGameText("¿Que codigo introduces?");
      break;
    case 7:
      printGameText("La puerta se abre y ves a lo lejos una serie de luces leds anaranjadas");
      printGameText("De repente, delante de ti aterriza un ciborg barbudo que te grita: 'NOW, YOU GIVE ME WHAT IS MINE' y se dirige hacia ti enfurecido. ");
       printGameText("El imponente ciborg te dobla en tamaño y fuerza por lo que no tienes nada que hacer contra el, intentas bloquear sus golpes pero no resistiras mucho mas ");
        printGameText("En la lejania escuchas una exotica voz familiar que dice:  lembre-se do que eles pisaram em você");
      break;
    case 8:
      printGameText("Un calambre comienza a recorrerte la espalda y notas como el tiempo pasa mucho mas lento ");
      printGameText("En un arrebato de adrenalina, furia y rabia ves tu vida pasar: el ciberparkour, el ciberskate, el ciberferial, la cibersubida al deposito, los ciberbotellones en el ciberxigxag, la cibercamisa mojada la defecacion en ciberbolsa, el ciberguantazo... ");
       printGameText("Hasta recordar el momento en el que la ciber-ciborg de leds anaranjados te regalo el artilugio conocido como Sandevistan ");
        printGameText("Aprovechando este poder nacido del amor y la amistad esqivas uno tras otro los golpes del ciborg de barba anaranjada");
        printGameText("¿Donde asestas el golpe final?");
      break;
    case 9:
      printGameText("El gran ciborg cae al suelo noqueado y chisporroteando");
      printGameText("Desenchufas la ciberjaula en la que se encontraba recluida la ciborg de la que siempre estuvistes enamorado y sale corriento hacia ti");
       printGameText("Comienza a volar girando en el aire mientras se acerca a ti para acabar propinandote tremendo chute no peito al grito de: ");
       printGameText("¡AGORA VOCE ESTA PUTINHU!");
       const button = document.getElementById('myButton');

 printGameText("¡Felicidades, has terminado el juego!");

  // Mostrar el botón de finalizar juego
  var endBtn = document.getElementById("end-btn");
  endBtn.style.display = "block";

      break;
   }
}

// Función para manejar la entrada del jugador
function handleInput() {
  var inputValue = gameInput.value.toLowerCase();
  gameInput.value = "";

  // Manejar la entrada en función del nivel actual
  switch (currentLevel) {
    case 1:
      if (inputValue.includes("mehmet")) {
        printGameText("Decides buscar más información sobre los juegos retro.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(2);
      } else {
        printGameText("¡No seas racista!");
      }
      break;
    case 2:
      if (inputValue.includes("arroz")) {
        printGameText("Envías un correo electrónico a 'gameover@pixelcity.com'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(3);
      } else {
        printGameText("No estaba tan rico");
      }
      break;
    case 3:
      if (inputValue.includes("10")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(4);
      } else {
        printGameText("Respeta a tus ancestros.");
      }
      break;
    case 4:
      if (inputValue.includes("goldenbridge")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(5);
      } else {
        printGameText("No deberias haber bebido tanto whisky");
      }
      break;
    case 5:
      if (inputValue.includes("manos")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(6);
      } else {
        printGameText("No es lo suficientemente potente");
      }
      break;
    case 6:
      if (inputValue === "1984") {
        printGameText("¡Correcto! La clave es válida.");
        printGameText("¡Avanzas al siguiente nivel!");
                changeLevel(7);
      } else {
        printGameText("tin tinonin tinonin tinonin");
      }
      break;
      case 7:
      if (inputValue.includes("osk")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(8);
      } else {
        printGameText("toyaco");
      }
      break;
    case 8:
      if (inputValue.includes("higado")) {
        printGameText("Decides investigar el juego retro 'Pac-Man'.");
        printGameText("¡Avanzas al siguiente nivel!");
        changeLevel(9);
      } else {
        printGameText("Prueba mas fuerte");
      }
      break;
    case 9:
      break;
    default:
      break;
  }
}

// Función para imprimir texto en el juego
function printGameText(text) {
  gameText.innerHTML += "<p>" + text + "</p>";
}

// Configuración inicial del juego
var currentLevel = 1;

// Obtener elementos del DOM
var gameText = document.getElementById("game-text");
var gameInput = document.getElementById("game-input");

// Imprimir el texto del primer nivel
changeLevel(1);

// Agregar evento para manejar la entrada del jugador
gameInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    handleInput();
  }
});

