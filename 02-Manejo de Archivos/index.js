const Container = require("./clase")
const productos = new Container("./productos.json")

async function ejecutar(){
    const obj1 ={
        nombre : 'empanada',
        precio : 300,
        thumbnail: 'url'
    }
    const obj2 ={
        nombre : 'hamburguesa',
        precio : 300,
        thumbnail: 'url'
    }
    const obj3 ={
        nombre : 'pizza',
        precio : 300,
        thumbnail: 'url'
    }
await productos.save(obj2).then(id => console.log(id))
// await productos.getById(3).then(obj => console.log(obj))
// await productos.getAll().then(array => console.log(array))
// await productos.deleteById(1)
// await productos.deleteAll()
// await productos.save(obj2)
}

ejecutar();