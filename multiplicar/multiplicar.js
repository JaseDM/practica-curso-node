const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {

    const tabla = [];

    return new Promise( (resolve, reject) => {

        if (!Number(base)){
            reject(`El parametro base ${base} no es un número`);
            return;
        }else if(!Number(limite)){
            reject(`El parametro limite ${ limite } no es un número`);
            return;
        }

        for (let i = 1; i <= limite; i++) {
            tabla.push(`${base} * ${i} = ${base * i}`);
            
        }

        resolve(tabla);
    })

}



let crearArchivo = ( base, limite = 10 ) => {

    return new Promise( (resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido como base ${base}, no es un número`);
            return;
        } else if(!Number(limite)){
            reject(`El valor introducido como limite ${limite}, no es un número`);
            return;
        }

        let data = '';

        for(let i = 1; i <= limite; i++){
            data += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
        
            if (err) reject( err );
            else resolve(`tabla-${ base }-al-${ limite }.txt`);
        
           
        
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}

