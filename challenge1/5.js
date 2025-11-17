/*
Considera una lista de libros en una biblioteca. Cada libro tiene un título, género y número de páginas.
Crea una función que devuelva una lista solo con los libros de género "Ficción" y que tengan más de 300 páginas.
*/

const libros = [
    { titulo: "El Quijote", genero: "Ficción", paginas: 450 },
    { titulo: "Cien Años de Soledad", genero: "Ficción", paginas: 350 },
    { titulo: "Historia del Mundo", genero: "No Ficción", paginas: 800 },
    { titulo: "1984", genero: "Ficción", paginas: 250 },
    { titulo: "Biografía de Einstein", genero: "No Ficción", paginas: 400 }
];

function filtrarLibros(libros){
    return libros.filter(libro =>{
        const genero = libro.genero.toLowerCase()
        const paginas = libro.paginas > 300

        return genero === "ficción" && paginas
    })
}

const librosFiltrados = filtrarLibros(libros)

console.log(librosFiltrados)