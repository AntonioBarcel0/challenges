/* Ejercicio 3
Tienes una lista de palabras y una cadena de letras disponibles. Devuelve las palabras que se pueden formar solo usando esas letras.
const words = ['casa', 'mesa', 'silla'];
const letters = 'asciem';
// manufactureWords(words, letters) debería mostrar ['casa', 'mesa']
*/

const words = ['casa', 'mesa', 'silla']
const letters = 'ascieml'

function manufactureWords(words, letters){
    let craftable = []
    words.forEach((word) => {
        let count = 0
        for (let i = 0; i < word.length; i++){
            if (letters.includes(word.at(i))){
                count ++
            }
        }
        if (word.length === count){
            craftable.push(word)
        }
    })
    console.log(craftable)
}
manufactureWords(words, letters)


const manufactureWords1 = (words, letters) => {
    const manufacturable = words.filter(g => {
        for (const letter in g){
            if (!letters.includes(g[letter])){
                return false 
            }
        }
    })
    console(manufacturable)
}