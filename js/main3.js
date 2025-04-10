// URL
const url = new URL('https://dattebayo-api.onrender.com/characters');
export default url;

// Exportar los elementos de la URL
let getALL = async () => {
    const url = 'https://dattebayo-api.onrender.com/characters';
    const config = {
        method: "GET",
    };
    const response = await fetch(url, config);
    return response.json();
};

// Obtener información de la API
let info = await fetch("https://dattebayo-api.onrender.com/characters");
let data = await info.json();

// Desestructurar personajes
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters;

// Primer personaje
let titulo1 = document.getElementById("cardtitle1")
let imagen1 = document.getElementById("cardimage1")
let clan1 = document.getElementById("cardhead1")
let habilidad1 = document.getElementById("carddescription1")

imagen1.src = i.images[0]
titulo1.innerHTML = i.name
clan1.innerHTML = (`Clan: No clan Aldea: ${i.personal.affiliation[0]}`)
habilidad1.innerHTML = (`Habilidad: ${i.jutsu[5]}`)

// --- Segundo personaje ---
let titulo2 = document.getElementById("cardtitle2");
let imagen2 = document.getElementById("cardimage2");
let clan2 = document.getElementById("cardhead2");
let habilidad2 = document.getElementById("carddescription2");

imagen2.src = j.images?.[0]?.trim() ? j.images[0] : "https://placehold.co/600x400@2x.png";
titulo2.innerHTML = j.name || "Nombre no disponible";
clan2.innerHTML = `Clan: ${j.personal?.clan || "Sin clan"} | Aldea: ${j.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad2.innerHTML = `Habilidad: ${j.jutsu?.[1] || "No disponible"}`;

// --- Tercer personaje ---
let titulo3 = document.getElementById("cardtitle3");
let imagen3 = document.getElementById("cardimage3");
let clan3 = document.getElementById("cardhead3");
let habilidad3 = document.getElementById("carddescription3");

imagen3.src = k.images?.[0]?.trim() ? k.images[0] : "https://placehold.co/600x400@2x.png";
titulo3.innerHTML = k.name || "Nombre no disponible";
clan3.innerHTML = `Clan: ${k.personal?.clan || "Sin clan"} | Aldea: ${k.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad3.innerHTML = `Habilidad: ${k.jutsu?.[1] || "No disponible"}`;

// --- Cuarto personaje ---
let titulo4 = document.getElementById("cardtitle4");
let imagen4 = document.getElementById("cardimage4");
let clan4 = document.getElementById("cardhead4");
let habilidad4 = document.getElementById("carddescription4");

imagen4.src = l.images?.[0]?.trim() ? l.images[0] : "https://placehold.co/600x400@2x.png";
titulo4.innerHTML = l.name || "Nombre no disponible";
clan4.innerHTML = `Clan: ${l.personal?.clan || "Sin clan"} | Aldea: ${l.personal?.affiliation?.[0] || "Desconocida"}`;
habilidad4.innerHTML = `Habilidad: ${l.jutsu?.[1] || "No disponible"}`;
