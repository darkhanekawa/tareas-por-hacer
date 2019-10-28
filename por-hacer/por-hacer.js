const fs = require('fs');

let listadoPorHacer = [];

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json')
    } catch (error) {
        listadoPorHacer = [];
    } 
}

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`DB/data.json`, data, (err) => {
        if(err) throw new Error('No se pudo grabar el archivo');
    });
}

const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado) => {
    cargarDB();
    let index = listadoPorHacer
    .findIndex(tarea => tarea.descripcion === descripcion);

    if(index >= 0){
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let i = listadoPorHacer
    .findIndex(tarea => tarea.descripcion === descripcion);
    if ( i !== -1 ) {
    listadoPorHacer.splice( i, 1 );
    guardarDB();
    return true;
    }else{
    return false;
    }
}

module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}