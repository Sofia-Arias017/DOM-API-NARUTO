// URL 
const url = new URL('https://dattebayo-api.onrender.com/characters');
export default url;

// Obtener todos los personajes desde la API
let info = await fetch("https://dattebayo-api.onrender.com/characters");
let data = await info.json();

// Desestructurar personajes
const [a, b, c, d, e, f, g, h] = data.characters;
console.log("Personaje h:", h);

// --- Primer personaje ---
let titulo1 = document.getElementById("cardtitle1");
let imagen1 = document.getElementById("cardimage1");
let clan1 = document.getElementById("cardhead1");
let habilidad1 = document.getElementById("carddescription1");

imagen1.src = e.images?.[0] || "https://placehold.co/600x400@2x.png";
titulo1.innerHTML = `${e.name}`;
clan1.innerHTML = `Aldea: ${e.personal?.affiliation?.[0] || "Desconocida"} | Clan: Sin clan`;
habilidad1.innerHTML = `Técnica destacada: ${e.jutsu?.[5] || "No disponible"}`;

// --- Segundo personaje ---
let titulo2 = document.getElementById("cardtitle2");
let imagen2 = document.getElementById("cardimage2");
let clan2 = document.getElementById("cardhead2");
let habilidad2 = document.getElementById("carddescription2");

imagen2.src = f.images?.[0] || "https://placehold.co/600x400@2x.png";
titulo2.innerHTML = `${f.name}`;
clan2.innerHTML = `Clan: ${f.personal?.clan || "Desconocido"} | Aldea: ${f.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad2.innerHTML = `Jutsu único: ${f.jutsu?.[1] || "No disponible"}`;

// --- Tercer personaje ---
let titulo3 = document.getElementById("cardtitle3");
let imagen3 = document.getElementById("cardimage3");
let clan3 = document.getElementById("cardhead3");
let habilidad3 = document.getElementById("carddescription3");

imagen3.src = g.images?.[0] || "https://placehold.co/600x400@2x.png";
titulo3.innerHTML = `${g.name}`;
clan3.innerHTML = `Clan: ${g.personal?.clan || "Desconocido"} | Aldea: ${g.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad3.innerHTML = `Jutsu principal: ${g.jutsu?.[1] || "No disponible"}`;

// --- Cuarto personaje ---
let titulo4 = document.getElementById("cardtitle4");
let imagen4 = document.getElementById("cardimage4");
let clan4 = document.getElementById("cardhead4");
let habilidad4 = document.getElementById("carddescription4");

imagen4.src = h.images?.[0] || "https://placehold.co/600x400@2x.png";
titulo4.innerHTML = h.name || "Nombre no disponible";
clan4.innerHTML = `Clan: ${h.personal?.clan || "Desconocido"} | Aldea: ${h.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad4.innerHTML = `Habilidad: ${h.jutsu?.[1] || "No disponible"}`;
