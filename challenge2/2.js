/* Ejercicio 2
En una tienda hay una lista de nombres de juguetes y una cadena de materiales. Escribe una función que devuelva qué juguetes se pueden fabricar con los materiales disponibles.
const toys = ['robot', 'muñeca', 'camion'];
const materials = 'rbotcamun';
// manufactureToys(toys, materials) debería mostrar ['robot', 'muñeca', 'camion']
*/

const toys = ['robot', 'muñeca', 'camion'];
const materials = 'rbotcamuneiñ';

function manufactureToys(toys, materials){
    let craftable = []
    toys.forEach((toy) => {
        let count = 0
        for (let i = 0; i < toy.length; i++){
            if (materials.includes(toy.at(i))) {
                count ++
            }
        }
        if (toy.length === count ) {
            craftable.push(toy)
        }
    });
    console.log(craftable)
}

manufactureToys(toys, materials)


const manufactureToys1 = (toys, materials) => {
    const manufacturable = toys.filter(g => {
        for(const letter in g){
            if (!materials.includes(g[letter])) {
                return false
            }
        }
        return true
    })
    console.log(manufacturable)
}

manufactureToys1(toys, materials)