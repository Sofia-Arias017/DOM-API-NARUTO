// URL 
const url = new URL('https://dattebayo-api.onrender.com/characters');

export default url;

// Función para obtener todos los personajes
let getALL = async () => {
    const url = 'https://dattebayo-api.onrender.com/characters';
    const config = {
        method: "GET",
    };
    const response = await fetch(url, config);
    return response.json();
};

// Obtener la información de la API
let info = await fetch("https://dattebayo-api.onrender.com/characters");
let data = await info.json();

// Asignar personajes específicos a variables individuales
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters;

// Primer personaje
let titulo1 = document.getElementById("cardtitle1");
let imagen1 = document.getElementById("cardimage1");
let clan1 = document.getElementById("cardhead1");
let habilidad1 = document.getElementById("carddescription1");

// Mostrar info del primer personaje
imagen1.src = q.images[0];
titulo1.innerHTML = q.name;
clan1.innerHTML = `Clan: ${q.personal.clan || "Desconocido"} | Aldea: ${q.personal.affiliation[0] || "Desconocida"}`;
habilidad1.innerHTML = `Técnica destacada: ${q.jutsu[5] || "No registrada"}`;

// --- Segundo personaje ---
let titulo2 = document.getElementById("cardtitle2");
let imagen2 = document.getElementById("cardimage2");
let clan2 = document.getElementById("cardhead2");
let habilidad2 = document.getElementById("carddescription2");

// Mostrar info del segundo personaje
imagen2.src = r.images[0];
titulo2.innerHTML = r.name;
clan2.innerHTML = `Clan: ${r.personal.clan || "Desconocido"} | Aldea: ${r.personal.affiliation[0] || "Desconocida"}`;
habilidad2.innerHTML = `Técnica destacada: ${r.jutsu[1] || "No disponible"}`;

// --- Tercer personaje ---
let titulo3 = document.getElementById("cardtitle3");
let imagen3 = document.getElementById("cardimage3");
let clan3 = document.getElementById("cardhead3");
let habilidad3 = document.getElementById("carddescription3");

// Mostrar info del tercer personaje
imagen3.src = s.images[0];
titulo3.innerHTML = s.name;
clan3.innerHTML = `Clan: ${s.personal.clan || "Desconocido"} | Aldea: ${s.personal.affiliation[0] || "Desconocida"}`;
habilidad3.innerHTML = `Técnica destacada: ${s.jutsu[1] || "No disponible"}`;

// --- Cuarto personaje ---
let titulo4 = document.getElementById("cardtitle4");
let imagen4 = document.getElementById("cardimage4");
let clan4 = document.getElementById("cardhead4");
let habilidad4 = document.getElementById("carddescription4");

// Mostrar info del cuarto personaje
imagen4.src = t.images[0];
titulo4.innerHTML = t.name;
clan4.innerHTML = `Clan: ${t.personal.clan || "No registrado"} | Aldea: ${t.personal.affiliation[0] || "Desconocida"}`;
habilidad4.innerHTML = `Técnica destacada: ${t.jutsu[1] || "No registrada"}`;
