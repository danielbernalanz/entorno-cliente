// let dia = prompt("Dia?") 
// let mes = prompt("Mes?") - 1
// let año = prompt("Año?")

// let fechaNacimiento = new Date(año, mes, dia)
// let fechaActual = new Date(Date.now())
// let edad;
// if (fechaActual.getMonth() < fechaNacimiento.getMonth()) {
//     edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear() - 1
// } else if (fechaActual.getDate() < fechaNacimiento.getDate()){
//     edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear() - 1
// } else {
//     edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear()
// }
// document.body.innerHTML += "Tienes " + edad + " años" 

let texto = new String("Numero de letras de esta cadena");
document.body.innerHTML += "N\xfamero de letras de la cadena de texto: " + texto.length + "<br>";
document.body.innerHTML += "el carácter del índice en la posición 4: " + texto.charAt(4) + "<br>";
document.body.innerHTML += "La posición de la primera letra “s”: " + texto.indexOf("s") + "<br>";
document.body.innerHTML += "La posición de la ultima letra “e”: " + texto.lastIndexOf("e") + "<br>";
document.body.innerHTML += "Cambiar letras x caracteres: " + texto.replace("letras", "caracteres" + "<br>");

