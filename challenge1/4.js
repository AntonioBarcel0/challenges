/*
Considera una lista de alumnos. Cada alumno tiene un nombre, nota media y una lista de asignaturas. 
Haz una función que devuelva una lista de los alumnos que están cursando 'JavaScript' y tienen una nota media superior a 8.
*/

const alumnos = [
    {
        nombre: "Pepe",
        media: 10,
        asignaturas: [
            "JavaScript",
            "BBDD",
            "Despliegue"
        ]
    },
    {
        nombre: "Luisa",
        media: 8,
        asignaturas: [
            "JavaScript",
            "BBDD",
            "Despliegue"
        ]
    },
    {
        nombre: "Juan",
        media: 8,
        asignaturas: [
            "JavaScript",
            "BBDD",
            "Despliegue"
        ]
    },
    {
        nombre: "Manue",
        media: 8,
        asignaturas: [
            "BBDD",
            "Despliegue"
        ]
    },
    {
        nombre: "Paca",
        media: 7,
        asignaturas: [
            "JavaScript",
            "BBDD",
            "Despliegue"
        ]
    }
];

function filtrarAlumnos(alumnos){
    return alumnos.filter(alumno => {
        const media = alumno.media > 8
        const asignaturas = alumno.asignaturas.includes("JavaScript")

        return media && asignaturas
    })
}

const alumnosFiltrados = filtrarAlumnos(alumnos)
console.log(alumnosFiltrados)