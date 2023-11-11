const fs = require('fs');
const fs = require('fs');

function leer(ruta, cb){
    fs.readfile(ruta, (err, data)=>{
        console.log(data.toString);

    })
}
leer(`${__dirname}/archivo.txt`, console.log);

function escribir (ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function (err){
        if (err){
            console.log('No se ha podido escribir', err)
        } else{
            console.log('Se ha escrito correctamente')
        }
    })
}


//tercero borramos el archivo1.txt
function borrar(ruta, cb){
    fs.unlink(ruta,cb);
}
borrar(`${__dirname}/archivo1.txt`, console.log);

//escribir(`${__dirname}/archivo1.txt`, 'Reesribimos el archivo', console.log);
//leer(`${__dirname}/archivo1.txt`, console.log);
