//ej 1
//let nombre = window.prompt("Nombre");
//let apellido  = window.prompt("Primer apellido");
//let fullName = nombre + " " + apellido;
//let edad = window.prompt("Edad?");
//let fecha = new Date()
//let nacimiento = fecha.getFullYear() - edad
//console.log(fullName)
//console.log(nacimiento)

//ej 2
//console.log(Math.exp(10))

//ej 3
//let num = prompt("Numero?")
//console.log(num % 2 == 0)

//ej 4
//let num1 = prompt("Numero 1?")
//let num2 = prompt("Numero 2?")
//console.log((num2 % num1) == 0)

//ej 5
//let array = new Array(12);
//array.push("Enero")
//array.push("Febrero")
//array.push("Marzo")
//array.push("Abril")
//array.push("Mayo")
//array.push("Junio")
//array.push("Julio")
//array.push("Agosto")
//array.push("Septiembre")
//array.push("Octubre")
//array.push("Noviembre")
//array.push("Dicimiembre")
//for (const i in array) {
//    console.log(array[i])    
//}

//ej 6
//let num1 = prompt("Numero 1")
//let num2 = prompt("Numero 2")
//console.log("Es " + num1 + " mayor que " + num2 + "?" + " " + (num1 > num2) );
//console.log("Es " + num2 + " mayor que " + num1 + "?" + " " + (num2 > num1) );
//console.log("Es " + num1 + " positivo? " + (num1 >= 0) );
//console.log("Es " + num2 + " positivo? " + (num2 >= 0) );

//ej7
//for(i = 0; i < 30; i++){
//    document.body.innerHTML += i + "\n";
//}

//ej8
//let num = Number(prompt("Numero"))
//let resultado = 1
//for (i = num;i > 1;i--){
 //   resultado = i * resultado
//}
//console.log(resultado)

//ej 9
//let entrada = prompt("Introduce una ciudad (Zaragoza, Barcelona, Madrid):");
//
//let mensaje = 
//    (entrada === "Zaragoza" && "¡Has elegido Zaragoza! Disfruta de la Basílica del Pilar.") ||
//    (entrada === "Barcelona" && "¡Has elegido Barcelona! Prepárate para ver la Sagrada Familia.") ||
//    (entrada === "Madrid"    && "¡Has elegido Madrid! Te espera la Gran Vía y el Retiro.") ||
//    "La ciudad introducida no está en la lista exacta (recuerda usar la mayúscula inicial).";
//
//alert(mensaje);
