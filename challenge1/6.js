/*
Considera una lista de productos en un supermercado. Cada producto tiene un nombre, categoría y precio.
Haz una función que devuelva una lista solo con los productos de categoría "Frutas" y cuyo precio sea menor a 2 euros.
*/

const productos = [
    { nombre: "Manzanas", categoria: "Frutas", precio: 1.5 },
    { nombre: "Pan", categoria: "Panadería", precio: 0.8 },
    { nombre: "Naranjas", categoria: "Frutas", precio: 2.5 },
    { nombre: "Leches", categoria: "Lácteos", precio: 1.2 },
    { nombre: "Plátanos", categoria: "Frutas", precio: 1.8 }
];

function filtrarProductos(productos) {
    return productos.filter(producto=>{
        const categoria = producto.categoria.includes("Frutas")
        const precio = producto.precio < 2

        return categoria && precio
    })
}

const productosFiltrados = filtrarProductos(productos)
console.log(productosFiltrados)