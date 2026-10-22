let fecha = new Date(2000,5,22);
let fecha2 = new Date(2000,5,21);

let diferenciams = fecha2 - fecha

let diasdiferencia  = Math.abs(diferenciams / 1000 / 60 / 60 / 24) 
console.log(diasdiferencia)

