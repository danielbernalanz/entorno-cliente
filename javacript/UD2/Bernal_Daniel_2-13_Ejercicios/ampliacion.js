//ej 1

// let NotaProyecto = parseFloat(prompt("Nota proyecto?"))
// let NotaExamen = parseFloat(prompt("Nota examen?"))
// let media = ((NotaProyecto + NotaExamen) / 2)
// let Calificacion;

// console.log(NotaProyecto)
// console.log(NotaExamen)

// if (NotaProyecto < 4.5 || NotaExamen < 4.5){
//     Calificacion = "Suspenso"
// }
// if ((NotaProyecto >= 4.5 && NotaExamen >= 4.5) && media < 5){
//     Calificacion = "Suspenso"
// }
// if ((NotaProyecto >= 4.5 && NotaExamen >= 4.5) && media >= 5 && media < 7){
//     Calificacion = "Aprobado"
// }
// if ((NotaProyecto >= 4.5 && NotaExamen >= 4.5) && media >= 7 && media <= 9){
//     Calificacion = "Notable"
// }
// if ((NotaProyecto >= 4.5 && NotaExamen >= 4.5) && media >= 9){
//     Calificacion = "Sobresaliente"
// }

// document.body.innerHTML = "Nota final: " + Calificacion

//ej 2

// let numeroDNI = prompt("Numero DNI?")
// let letraDNI = prompt("Letra DNI??")

// let formatoCorrecto = (numeroDNI.length === 8) && (letraDNI.length === 1);

// let abecedario = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C',
// 'K', 'E']

// let calculoLetra = numeroDNI % 23

// let letraEsValida = letraDNI.toUpperCase() == abecedario[calculoLetra]

// let esNegativo = numeroDNI < 0  

// console.log(formatoCorrecto)
// console.log(letraEsValida)
// console.log(!esNegativo)

// if (formatoCorrecto && letraEsValida && !esNegativo){
//     document.body.innerHTML = "El DNI es valido"
// } else{
//     document.body.innerHTML = "El DNI no es valido"
// }

//ej 3



document.body.innerHTML += "<p>TABLA DE MULTIPLICAR DEL 7";
for(i = 1;i <= 10;i++){
    document.body.innerHTML += "<p>7 x " + i + " = " + (7 * i);
}
document.body.innerHTML += "<p>TABLA DE SUMAR DEL 8";
for(i = 1;i <= 10;i++){
    document.body.innerHTML += "<p>8 + " + i + " = " + (8 + i);
}
document.body.innerHTML += "<p>TABLA DE DIVIDIR DEL 9";
for(i = 1;i <= 10;i++){
    document.body.innerHTML += "<p>9 / " + i + " = " + (9 / i);
}
document.body.innerHTML += "<p>125 / 8 con desplazamiento de bits";
document.body.innerHTML += "<p> " + (125 >> Math.log2(8));
document.body.innerHTML += "<p>40 x 4 con desplazamiento de bits";
document.body.innerHTML += "<p> " + (40 << Math.log2(4));
document.body.innerHTML += "<p>25 / 2 con desplazamiento de bits";
document.body.innerHTML += "<p> " + (25 >> Math.log2(2));
document.body.innerHTML += "<p>10 x 16 con desplazamiento de bits";
document.body.innerHTML += "<p> " + (10 << Math.log2(16));


