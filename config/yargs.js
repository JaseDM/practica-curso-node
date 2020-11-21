// Constante con las opciones 
const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
            alias: 'l',
            default: 10
    }
}

// Requerimos el paquete yargs
const argv = require('yargs')
                // Configuramos los argumentos
                .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
                .command('crear', 'Crea un archivo con una tabla de multiplicar', opts)
                // Despliega la ayuda con el flag --help
                .help()
                // Devuelve los argumentos
                .argv;

module.exports = {
    argv
}