const fs = require('fs')

let listadoPorHacer = [];

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado : false
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const guardarDB = () => {
    
    
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('./db/data.json', data, 
                error => {
                        if (error){
                            throw new Error('No se pudo grabar', error);
                        } 

                        //console.log('grabado')
                })
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');        
    } catch (error) {
        listadoPorHacer = []
    }
    //console.log(listadoPorHacer)
}

const getListar = () => {
    cargarDB();
    return listadoPorHacer
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(t => t.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado
        guardarDB();
        return true
    } else
        return false
} 

const borrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(t => t.descripcion === descripcion)

    if (index >= 0) {
        console.log('index', index)
        listadoPorHacer.splice(index, 1)
        guardarDB();
        return true
    } else
        return false

    

}

module.exports = {
    crear, getListar, actualizar, borrar
}