// 1) Declara una clase Usuario
class Usuario {
    // 2) Atributos
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre,
            this.apellido = apellido,
            this.libros = [],
            this.mascotas = []
    }
    // 3) Metodos
    getFullName() {
        return (this.nombre + ' ' + this.apellido);
    }
    addMascota(mascota) {
        this.mascotas.push(mascota)
    }
    countMascotas() {
        return this.mascotas.length;
    }
    addBook(nombre, autor) {
        this.libros.push({ nombre, autor })
    }
    getBookNames() {
        let bookNames = [];
        this.libros.map(element => bookNames.push(element.nombre))
        return bookNames;
    }
}
//Usuario de prueba
const usuario = new Usuario('Francisco', 'Andrade');
usuario.addMascota('perro');
usuario.addBook('la teoria del todo', 'stephen hawking');
usuario.addBook('la teoria del big bang', 'stephen hawking');
console.log(usuario.getFullName())
console.log(usuario.countMascotas());
console.log(usuario.getBookNames());