
const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



const comandos = argv._[0];

switch (comandos) {
        case 'listar':
        listarTabla(argv.base, argv.limite)
                .then( tabla => { 
                        console.log('==========================='.green);
                        console.log(`===Tabla del ${ argv.base }=============`.green);
                        console.log('==========================='.green);
                        for (const row of tabla) {
                                console.log(row.green);
                        }
                 })
                .catch(error => console.log(error));
                break;

        case 'crear':
        crearArchivo(argv.base, argv.limite)
                .then(archivo => console.log(`Archivo creado: ${ archivo }`.underline.brightGreen))
                .catch(error => console.log(error));

                break;
                
        default:
                console.log('Comando no reconocido');
                break;
}




