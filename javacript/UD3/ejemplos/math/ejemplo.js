//Empleo del objeto Math: .exp, .pow y .random
//Math.exp(10) Explicación: Devuelve el número E elevado a 10
document.write(Math.exp(10));
document.write("<br>");
//Math.pow(2,10)) Explicación Devuelve 2 elevado a 10
document.write(Math.pow(2,10));
document.write("<br>");
//Ejercicio: Haz un script que calcules dos números de forma aleatoria, por ejemplo a y b. Luego
//opera “a” elevado a “b”.
var a = Math.round(Math.random()*100000000);
var b = Math.round(Math.random()*10);
var resultado= Math.pow(a,b);
document.write(resultado);
document.write("<br>");
//Empleo del objeto Math: diferencias entre .floor y .round
//diferencias entre Math.floor y Math.round.
document.write(Math.floor(Math.random()*10)); //Redondeo hacia abajo
document.write("<br>");
document.write(Math.round(Math.random()*10)); //Redondeo hacia arriba
document.write("<br>");
//Ejercicio: Haz un script que muestre la fecha actual y por consola saca el mes actual.
//Haz una comparación y si es Octubre muestra por pantalla la hora actual.
//Ejercicio: Haz un script que muestre la fecha actual y por consola saca el mes actual. Haz una
//comparación y si es Octubre muestra por pantalla la hora actual.
let fecha_actual = new Date();
let mes= fecha_actual.getMonth()+1;
console.log(mes);
if (mes==10){
document.write(fecha_actual);
document.write("<br>");
}else{
console.log("Como no es Octubre No hago nada");
}
