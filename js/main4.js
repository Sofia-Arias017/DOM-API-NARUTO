// URL
const url = new URL('https://dattebayo-api.onrender.com/characters')

export default url;

// Función para obtener todos los personajes
let getALL = async () => {
    const url = 'https://dattebayo-api.onrender.com/characters'
    const config = {
        method: "GET",
    }
    const response = await fetch(url, config)
    return response.json()
}

// Obtener información de la API
let info = await fetch("https://dattebayo-api.onrender.com/characters")
let data = await info.json()

// Asignar cada personaje a una constante por posición
const [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t] = data.characters

// Primer personaje
let titulo1 = document.getElementById("cardtitle1")
let imagen1 = document.getElementById("cardimage1")
let clan1 = document.getElementById("cardhead1")
let habilidad1 = document.getElementById("carddescription1")

// Mostrar datos del primer personaje
imagen1.src = m.images[0]
titulo1.innerHTML = m.name
clan1.innerHTML = `Sin clan • Aldea: ${m.personal.affiliation[0]}`
habilidad1.innerHTML = `Técnica destacada: ${m.jutsu[5]}`

// --- Segundo personaje ---
let titulo2 = document.getElementById("cardtitle2")
let imagen2 = document.getElementById("cardimage2")
let clan2 = document.getElementById("cardhead2")
let habilidad2 = document.getElementById("carddescription2")

// Mostrar datos del segundo personaje
imagen2.src = n.images[0]
titulo2.innerHTML = n.name
clan2.innerHTML = `Origen desconocido • Aldea: ${n.personal.affiliation[0]}`
habilidad2.innerHTML = `Jutsu especial: ${n.jutsu[1]}`

// --- Tercer personaje ---
let titulo3 = document.getElementById("cardtitle3")
let imagen3 = document.getElementById("cardimage3")
let clan3 = document.getElementById("cardhead3")
let habilidad3 = document.getElementById("carddescription3")

// Mostrar datos del tercer personaje
imagen3.src = o.images[0]
titulo3.innerHTML = o.name
clan3.innerHTML = `Clan: ${o.personal.clan} • Aldea: ${o.personal.affiliation[0]}`
habilidad3.innerHTML = `Arte ninja: ${o.jutsu[1]}`

// --- Cuarto personaje ---
let titulo4 = document.getElementById("cardtitle4")
let imagen4 = document.getElementById("cardimage4")
let clan4 = document.getElementById("cardhead4")
let habilidad4 = document.getElementById("carddescription4")

// Mostrar datos del cuarto personaje
imagen4.src = p.images[0]
titulo4.innerHTML = p.name
clan4.innerHTML = `Clan: ${p.personal.clan} • Aldea: ${p.personal.affiliation[0]}`
habilidad4.innerHTML = `Técnica secreta: ${p.jutsu[1]}`
