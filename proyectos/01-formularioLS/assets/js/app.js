// Variables 
const contenedorListaTweets = document.getElementById("lista-tweets");


// EventListener
eventListener();

function eventListener() {
    // Cuando se envie al formulario
    document.querySelector("#formulario").addEventListener("submit", agregarTweet);

    // Borrar Tweets 
    contenedorListaTweets.addEventListener("click", borrarTweet);

    // Contenido cargado
    document.addEventListener("DOMContentLoaded", cargarTweets);
}


// Cargar Tweets del localStorage
function cargarTweets() {
    let tweets = obtenerTweetsLocalStorage();

    tweets.forEach((tweet) => {
        // Crear elemento li agregar texto
        const li = document.createElement("li");
        li.textContent = tweet;
        // Crear el boton de eliminar
        const botonBorrar = document.createElement("a");
        botonBorrar.classList.add("borrar-tweet");
        botonBorrar.textContent = "X";

        // Añadirlos al contenedor
        li.appendChild(botonBorrar)
        contenedorListaTweets.appendChild(li);

    })
}

// Añadir tweet al DOM
function agregarTweet(e) {
    e.preventDefault();

    // Leer el valor del textArea
    const tweet = document.getElementById("tweet");

    if (tweet.value != "") {
        // Crear elemento li agregar texto
        const li = document.createElement("li");
        li.textContent = tweet.value;
        // Crear el boton de eliminar
        const botonBorrar = document.createElement("a");
        botonBorrar.classList.add("borrar-tweet");
        botonBorrar.textContent = "X";

        // Añadirlos al contenedor
        li.appendChild(botonBorrar)
        contenedorListaTweets.appendChild(li);

        // Añadir al localStorage
        agregarTweetLocalStorage(tweet.value);
        tweet.value = "";
    }
}


// Agregar tweet al localStorage 
function agregarTweetLocalStorage(tweet) {
    let tweets = obtenerTweetsLocalStorage();
    tweets.push(tweet);

    // Agregar al localStorage
    localStorage.setItem("tweets", JSON.stringify(tweets));
}


// Borrar Tweet del DOM 
function borrarTweet(e) {
    e.preventDefault();
    if (e.target.classList.contains("borrar-tweet")) {
        borrarTweetLocalStorage(e.target.parentElement.textContent);
        e.target.parentElement.remove();
    }
}


// Borrar Tweet de localStorage
function borrarTweetLocalStorage(tweet) {
    let tweets = obtenerTweetsLocalStorage();
    tweet = tweet.substring(0, tweet.length - 1);

    const index = tweets.indexOf(tweet);
    tweets.splice(index, 1);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}


// Obtener tweets del localStorage
function obtenerTweetsLocalStorage() {
    let tweets;

    // Revisamos los valores del localStorage
    if (localStorage.getItem("tweets") === null) {
        tweets = [];
    } else {
        tweets = JSON.parse(localStorage.getItem("tweets"));
    }

    return tweets;
}