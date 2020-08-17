const descripcion = {
    demand : true,
    alias: 'd',
    desc : 'Descripción de la tarea por hacer'
}

const completado = {
    alias : 'c',
    default : true,
    description : 'Marca como completado'
}

const opt1 = {
    descripcion
};

const opt2 = {
    descripcion,
    completado
};
        
module.exports = require('yargs')
                    .command('crear', 'Crea una tarea', opt1)
                    .command('listar', 'Lista tods las tareas')
                    .command('actualizar', 'Actualizar información de una tarea', opt2)
                    .command('borrar', 'Borrar información de una tarea', opt1)
                    .help()
                    .argv;