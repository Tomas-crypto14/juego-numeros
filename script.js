// --- Elementos del DOM ---
const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const guessButton2 = document.getElementById('guessButton');
const guessButton3 = document.getElementById('guessButton');
const message = document.getElementById('message');
const attemptsInfo = document.getElementById('attempts');
const guessesList = document.getElementById('guessesList');
const playAgainButton = document.getElementById('playAgainButton');
const texto = document.getElementById('texto');
const easy = document.getElementById('easy');
const normal = document.getElementById('normal');
const hard = document.getElementById('hard');
// --- Variables del Juego ---

let secretNumber;
let attempts;
const MAX_ATTEMPTS = 10;
let max_number;
const MIN_NUMBER = 1;
const record = localStorage.getItem("record") || Infinity;
// --- Funciones ---

// Función para iniciar o reiniciar el juego
function startGame() {
    texto.innerHTML = `He pensado en un número entre 1 y 100. ¿Puedes adivinar cuál es?`
    max_number = 100;
    guessesList.innerHTML = '';
    // Genera un número secreto entre MIN_NUMBER y MAX_NUMBER
    secretNumber = Math.floor(Math.random() * max_number) + MIN_NUMBER;
    attempts = 0; // Reinicia los intentos

    // Mensajes iniciales y estado de la UI
    message.textContent = '';
    message.className = 'message'; // Quita clases de color
    attemptsInfo.textContent = '';
    guessInput.value = ''; // Limpia el input
    guessInput.disabled = false; // Habilita el input
    guessButton.disabled = false; // Habilita el botón de adivinar
    playAgainButton.style.display = 'none'; // Oculta el botón de jugar de nuevo
    guessInput.focus(); // Pone el foco en el input

    console.log(`Pssst... el número secreto es ${secretNumber}`); // Ayuda para depurar
}

// Función para manejar el intento del usuario
function handleGuess() {
    const userGuessText = guessInput.value;

    // Validar si la entrada está vacía
    if (userGuessText === '') {
        setMessage('Por favor, introduce un número.', 'info');
        return;
    }

    const userGuess = parseInt(userGuessText);

    // Validar si la entrada es un número válido y está en el rango
    if (isNaN(userGuess) || userGuess < MIN_NUMBER || userGuess > max_number) {
        setMessage(`Introduce un número válido entre ${MIN_NUMBER} y ${max_number}.`, 'info');
        guessInput.value = ''; // Limpiar el input inválido
        guessInput.focus();
        return;
    }

    // Incrementar el contador de intentos
    attempts++;
    attemptsInfo.textContent = `Intentos: ${attempts} / ${MAX_ATTEMPTS}`;

    const listItem = document.createElement("li");
    listItem.textContent = userGuess;
    guessesList.appendChild(listItem);
    // Comparar el intento con el número secreto
    if (userGuess === secretNumber) {
        setMessage(`¡Correcto! 🎉 El número era ${secretNumber}. Lo adivinaste en ${attempts} intentos.`, 'correct');
        if (attempts < record){
            localStorage.setItem("record", attempts);
        }
        //localStorage.setItem("HighScore", attempts);
        //localStorage.setItem("record", attempts);
        endGame();
        //Para los intentos hay que hacer una comparacion con el incrementador de intentos
        //y el numero maximo de intentos, hasta que llegue a 10 para.
    } else if (attempts === MAX_ATTEMPTS){
        setMessage(`Has perdido, el numero era ${secretNumber}.`, `Vuelve a intentarlo`)
        endGame();
    }else if (userGuess < secretNumber) {
        setMessage('¡Demasiado bajo! Intenta un número más alto. 👇', 'wrong');
    } else {
        setMessage('¡Demasiado alto! Intenta un número más bajo. 👆', 'wrong');
    }

    // Limpiar el input para el siguiente intento (si no ha ganado)
    if (userGuess !== secretNumber) {
        guessInput.value = '';
        guessInput.focus();
    }
}

// Función para mostrar mensajes al usuario
function setMessage(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`; // Añade clase para el color (correct, wrong, info)
}

// Función para terminar el juego (cuando se adivina el número)
function endGame() {
    guessInput.disabled = true; // Deshabilita el input
    guessButton.disabled = true; // Deshabilita el botón de adivinar
    playAgainButton.style.display = 'inline-block'; // Muestra el botón de jugar de nuevo
    localStorage.setItem("HighScore", attempts);
    localStorage.setItem("record", attempts);
}

function startGameEasy() {
    texto.innerHTML = `He pensado en un número entre 1 y 50. ¿Puedes adivinar cuál es?`
    max_number = 50;
    guessesList.innerHTML = '';
    // Genera un número secreto entre MIN_NUMBER y MAX_NUMBER
    secretNumber = Math.floor(Math.random() * max_number) + MIN_NUMBER;
    attempts = 0; // Reinicia los intentos

    // Mensajes iniciales y estado de la UI
    message.textContent = '';
    message.className = 'message'; // Quita clases de color
    attemptsInfo.textContent = '';
    guessInput.value = ''; // Limpia el input
    guessInput.disabled = false; // Habilita el input
    guessButton.disabled = false; // Habilita el botón de adivinar
    playAgainButton.style.display = 'none'; // Oculta el botón de jugar de nuevo
    guessInput.focus(); // Pone el foco en el input

    console.log(`Pssst... el número secreto es ${secretNumber}`); // Ayuda para depurar
}

// Función para manejar el intento del usuario

function startGameHard() {
    texto.innerHTML = `He pensado en un número entre 1 y 200. ¿Puedes adivinar cuál es?`
    max_number = 200;
    guessesList.innerHTML = '';
    // Genera un número secreto entre MIN_NUMBER y MAX_NUMBER
    secretNumber = Math.floor(Math.random() * max_number) + MIN_NUMBER;
    attempts = 0; // Reinicia los intentos

    // Mensajes iniciales y estado de la UI
    message.textContent = '';
    message.className = 'message'; // Quita clases de color
    attemptsInfo.textContent = '';
    guessInput.value = ''; // Limpia el input
    guessInput.disabled = false; // Habilita el input
    guessButton.disabled = false; // Habilita el botón de adivinar
    playAgainButton.style.display = 'none'; // Oculta el botón de jugar de nuevo
    guessInput.focus(); // Pone el foco en el input

    console.log(`Pssst... el número secreto es ${secretNumber}`); // Ayuda para depurar
}

// Función para mostrar mensajes al usuario
function setMessage(msg, type) {
    message.textContent = msg;
    message.className = `message ${type}`; // Añade clase para el color (correct, wrong, info)
}

// Función para terminar el juego (cuando se adivina el número)
function endGame() {
    guessInput.disabled = true; // Deshabilita el input
    guessButton.disabled = true; // Deshabilita el botón de adivinar
    playAgainButton.style.display = 'inline-block'; // Muestra el botón de jugar de nuevo
}

// --- Event Listeners ---

// Escuchar clics en el botón "Adivinar"
guessButton.addEventListener('click', handleGuess);
normal.addEventListener('click', startGame);
//Para empezar la partida con la difucultad por defecto.
startGame();
easy.addEventListener('click', startGameEasy);
hard.addEventListener('click', startGameHard);
// Escuchar la tecla "Enter" en el campo de entrada
guessInput.addEventListener('keyup', function(event) {
    // Si la tecla presionada es Enter (código 13)
    if (event.key === 'Enter') {
        event.preventDefault(); // Evita comportamiento por defecto (si estuviera en un form)
        handleGuess(); // Llama a la función de adivinar
    }
});

// Escuchar clics en el botón "Jugar de Nuevo"
playAgainButton.addEventListener('click', startGame);

// --- Iniciar el juego al cargar la página ---
//startGame();