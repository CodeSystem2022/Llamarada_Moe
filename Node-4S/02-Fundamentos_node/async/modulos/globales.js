// this === global = true
// mostrar algo en consola
//console.log ();

// mostrar un mensaje de error 
//console.error ();

//Ejecutar un código despues de un intervalo de tiempo

//setTimeout(()=>{});

//Ejecutar un codigo cada intervalo de tiempo

//setInterval(()=>{});
// Da prioridad de ejecución a una función asincronica 
//setImmediate (()=>{});

//console.log(setInterval);

//let i = 0;
//let intervalo = setInterval(()=>{
//    console.log('Hola');
//    if (i === 3){
//        clearInterval(intervalo);

//    }
//    i++;

//}, 1000);

setImmediate(()=>{
    console.log('Saludo Inmediato');
    
})
