// Obtener ruta actual
let ruta = window.location.pathname;

// Extraer el numero de la pagina
let pagina = ruta.includes("index") ? parseInt(ruta.match(/\d+/)?.[0] || 1) : 1;

// Calcular el rango de personajes segun la página
let inicio = (pagina - 1) * 4;
let fin = inicio + 4;

// Obtener datos de la API
let info = await fetch("https://dattebayo-api.onrender.com/characters")
let data = await info.json()
let personajes = data.characters.slice(inicio, fin);

// Asignar datos 
personajes.forEach((personaje, i) => {
    let imagen = document.getElementById(`cardimage${i + 1}`);
    let nombre = document.getElementById(`cardtitle${i + 1}`);
    let clan = document.getElementById(`cardhead${i + 1}`);
    let habilidad = document.getElementById(`carddescription${i + 1}`);

    // Asignar valores
    if (imagen) imagen.src = personaje.images[0];
    if (nombre) nombre.innerHTML = personaje.name;
    if (clan) clan.innerHTML = `Clan: ${personaje.personal.clan} Aldea: ${personaje.personal.affiliation[0]}`;
    if (habilidad) habilidad.innerHTML = `Habilidad: ${personaje.jutsu[1]}`;
});