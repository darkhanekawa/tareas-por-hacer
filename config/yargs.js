const argv = require('yargs')
.command('crear','Crear tarea por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Describe la tarea a realizar'
    }
})
.command('actualizar','Actualiza tarea por hacer', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Describe la actualizacion de la tarea'
    },
    completado: {
        alias: 'c',
        default: true
    }
})
.command('borrar','Burra una tarea determinada', {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Describe la tarea que será borrada'
    }
})
.help()
.argv;

module.exports = {
    argv
}