/*
Considera una lista de videojuegos donde cada objeto incluye nombre, plataforma y si está en oferta. 
Crea una función que devuelva una lista de los videojuegos que estén en oferta y sean de la plataforma 'Nintendo Switch'.
*/

const inventarioJuegos = [
    {
        nombre: "Splatoon",
        plataforma: "Nintendo Switch",
        precio: "En oferta"
    },
    {
        nombre: "Zelda",
        plataforma: "Nintendo Switch",
        precio: "Normal"
    },
    {
        nombre: "Half life 2",
        plataforma: "PC",
        precio: "En oferta"
    },
    {
        nombre: "Left4Dead 2",
        plataforma: "PC",
        precio: "En oferta"
    },
];

function filtrarVideojuegos(inventarioJuegos){
    return inventarioJuegos.filter(juego => {
        const precio = juego.precio.toLowerCase()
        const plataforma = juego.plataforma.toLowerCase()

        return precio === "en oferta" && plataforma === "nintendo switch"
    })
}

const juegosFiltrados = filtrarVideojuegos(inventarioJuegos)
console.log(juegosFiltrados)