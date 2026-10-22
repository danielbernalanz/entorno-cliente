//ej 1
//alert("Hola a todo el Mundo! \n" + "Que facil es incluir 'comillas simples' \n" 
//    + 'y "comillas dobles"'
//)

//ej 2
let n1 = parseInt(prompt("Primer numero")) ;
let n2 = parseInt(prompt("Segundo numero")) ;
let indice = Math.log2(n2);
alert("El resultado de " + n1 + " multiplicado por " + n2 + " es " + (n1 << indice));

//ej 3
let n3 = parseInt(prompt("Primer numero")) ;
let n4 = parseInt(prompt("Segundo numero")) ;
let indice2 = Math.log2(n4);
alert("El resultado de " + n3 + " dividido por " + n4 + " es " + (n3 >> indice2));

//ej 4
console.log("Numero maximo: " + Number.MAX_VALUE + "\n Numero mínimo: " + 
    Number.MIN_VALUE + "\n Numero infinito: " + Number.POSITIVE_INFINITY
) ;
//ej 5
const OVNI = "OBJETO VOLADOR NO IDENTIFICADO";
let Info = "En un lugar de la mancha";
console.log("Es la variable OVNI mayuscula? " + (OVNI == OVNI.toUpperCase()));
console.log("Es la variable OVNI minuscula? " + (OVNI == OVNI.toLowerCase()));
console.log("Es la variable OVNI es ambas? " + (OVNI != OVNI.toLowerCase() && OVNI != OVNI.toUpperCase()));

console.log("Es la variable Info minuscula? " + (Info == Info.toLowerCase()));
console.log("Es la variable Info minuscula? " + (Info == Info.toLowerCase()));
console.log("Es la variable Info es ambas? " + (Info != Info.toLowerCase() && Info != Info.toUpperCase()));
