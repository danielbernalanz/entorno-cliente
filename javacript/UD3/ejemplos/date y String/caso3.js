let diasSemana = new Array("Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado");
 var f = new Date();
 document.body.innerHTML += diasSemana[f.getDay()] + "<br>";