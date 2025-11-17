/*
Considera una lista de desarrolladores. Cada desarrollador tiene un nombre, puesto y años de experiencia. 
Crea una función que devuelva una lista con los desarrolladores cuyo puesto sea 'Frontend Developer' y además tengan más de 2 años de experiencia.
*/

const desarrolladores = [
    {
        nombre: "Pepe",
        puesto: "Frontend Developer",
        experiencia: "2 años"
    },
    {
        nombre: "Luisa",
        puesto: "Frontend Developer",
        experiencia: "1 años"
    },
    {
        nombre: "Juan",
        puesto: "Backend Developer",
        experiencia: "2 años"
    },
    {
        nombre: "Paca",
        puesto: "Frontend Developer",
        experiencia: "2 años"
    }
];

function filtrarDesarrolladores(desarrolladores){
    return desarrolladores.filter(desarrolador => {
        const puesto = desarrolador.puesto.toLowerCase()
        const experiencia = desarrolador.experiencia.toLowerCase()

        return puesto === "frontend developer" && experiencia === "2 años"
    })
}

const desarrolladoresFiltrados = filtrarDesarrolladores(desarrolladores)
console.log(desarrolladoresFiltrados)