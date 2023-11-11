async function hola(nombre){
    return new Promise (function (resolve, reject) {
        setTimeout(function () {  
            console.log('Hola' + nombre);
            resolve(nombre);
        }, 1000);
    });
  
}

async function hablar(nombre){
    return new Promise ((resolve, reject) =>{
        setTimeout( function() {
            console.log ('bla bla bla');
            //resolve(nombre);
            reject('Hay un error');
    
    
        }, 1000);
    });
    

}

async function adios(nombre){
        return new Promise (function (resolve, reject)  {
            setTimeout (function () {
                console.log ('adios' + nombre);
                resolve(nombre);
        
            }, 1000);
        })
        
}

console.log('iniciando el proceso...');
hola('Ariel')
    .then (hablar)
    .then(adios)
    .then((nombre) => {
        console.log('terminando el proceso');

    })
    .catch(error =>{
        console.log('Ha habido un error: ');
        console.log(error);

    })
//

async function main() {
    let nombre = await hola ('Ariel');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log ('Terminamos el ')
}
console.log('empezamos el proceso')
main();
console.log('Esta va a ser la segunda instrución')

// codigo en ingles//

function sayhello(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('hello' + name);
            resolve(name);
                        
        }, 1000);
    });
}

function talk(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('bla bla bla');
            resolve(name);
        },1000);
    
    });             
}

function saybye(name){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log('bye bye' + name);
            resolve(name);
                        
        }, 1000);
    });
}
async function conversation(name){
    console.log ('Code in English')
    console.log('Starting async process...');
    await sayhello(name);
    await talk();
    await talk();
    await talk();
    await sayBye(name);
    console.log('Process completed');

}