/* Ejercicio 3
Dada una lista de frutas y una cadena con letras, ¿qué frutas se pueden "crear" con esas letras?
const fruits = ['pera', 'banana', 'uva'];
const chars = 'pbnaruve';
// manufactureFruits(fruits, chars) debería mostrar ['pera', 'uva']
*/

const fruits = ['pera', 'banana', 'uva'];
const chars = 'pbnaruve';

const manufactureFruits = (fruits, chars) => {
    const manufacturable = fruits.filter(g => {
        for (const char in g){
            if (!chars.includes(g[char])) {
                return false;
            }
        }
        return true;
    });
    console.log(manufacturable);
}

manufactureFruits(fruits, chars);
