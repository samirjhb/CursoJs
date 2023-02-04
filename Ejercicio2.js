const nombre = "samir";
const edad = 24;
const eresDesarrollador = true;
const fechaNacimiento = new Date(1998, 04, 17);
const fechaLibro= new Date(1991, 01, 01);

const libroFavorito = {
    titulo: "El Mundo de Sofia",
    autor: "Jostein Gaarder",
    fecha: fechaLibro,
    url: "https://www.buscalibre.cl/libro-el-mundo-de-sofia-jostein-gaarder-siruela/9788498414516/p/4154958",
}

const lista = new Array(nombre, edad, eresDesarrollador, fechaNacimiento, libroFavorito);

console.log("Mi lista seria: ", lista);