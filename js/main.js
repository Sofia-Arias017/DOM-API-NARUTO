// URL 
const url = new URL('https://dattebayo-api.onrender.com/characters');
export default url;

// Función para obtener todos los personajes
let getALL = async () => {
    const config = { method: "GET" };
    const response = await fetch(url, config);
    return response.json();
};

// Obtener la información de la API
let response = await fetch("https://dattebayo-api.onrender.com/characters");
let data = await response.json();

// Asignar los personajes a variables individuales
const [char1, char2, char3, char4] = data.characters;

// Personaje 1
let cardTitle1 = document.getElementById("card-title-1");
let cardImage1 = document.getElementById("cardimage1");
let cardClan1 = document.getElementById("card-head-1");
let cardSkill1 = document.getElementById("card-description-1");

cardImage1.src = char1.images[0];
cardTitle1.innerHTML = char1.name;
cardClan1.innerHTML = `Origen: Clan ${char1.personal.clan} | Aldea: ${char1.personal.affiliation[0]}`;
cardSkill1.innerHTML = `Técnica especial: ${char1.jutsu[52]}`;

// Personaje 2
let cardTitle2 = document.getElementById("card-title-2");
let cardImage2 = document.getElementById("cardimage2");
let cardClan2 = document.getElementById("card-head-2");
let cardSkill2 = document.getElementById("card-description-2");

cardImage2.src = char2.images[0];
cardTitle2.innerHTML = char2.name;
cardClan2.innerHTML = `Origen: Clan ${char2.personal.clan} | Aldea: ${char2.personal.affiliation[0]}`;
cardSkill2.innerHTML = `Técnica especial: ${char2.jutsu[1]}`;

// Personaje 3
let cardTitle3 = document.getElementById("card-title-3");
let cardImage3 = document.getElementById("cardimage3");
let cardClan3 = document.getElementById("card-head-3");
let cardSkill3 = document.getElementById("card-description-3");

cardImage3.src = char3.images[0];
cardTitle3.innerHTML = char3.name;
cardClan3.innerHTML = `Origen: Clan ${char3.personal.clan} | Aldea: ${char3.personal.affiliation[0]}`;
cardSkill3.innerHTML = `Técnica especial: ${char3.jutsu[1]}`;

// Personaje 4
let cardTitle4 = document.getElementById("card-title-4");
let cardImage4 = document.getElementById("cardimage4");
let cardClan4 = document.getElementById("card-head-4");
let cardSkill4 = document.getElementById("card-description-4");

cardImage4.src = char4.images[0];
cardTitle4.innerHTML = char4.name;
cardClan4.innerHTML = `Origen: Clan ${char4.personal.clan} | Aldea: ${char4.personal.affiliation[0]}`;
cardSkill4.innerHTML = `Técnica especial: ${char4.jutsu[1]}`;
