console.log("Hola a toda la Cohorte 2022")

var i = 0;
setInterval(function() {
    console.log(i);
    i++;

    //if( i === 5){
    //    console.log('Forzamos un error: ');
    //    var a = 3 + z; // Z no está definida, se romperá el proceso
    //}

}, 1000); //1000 milisegundos (1 seg) es el tiempo que durará este proceso
console.log('Segunda instrucción');