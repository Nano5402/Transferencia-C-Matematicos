// Esta máquina hace 250 piezas por hora, eso no cambia
const piezasporhora = 250;

// Hoy trabajaron 8 horas seguidas
const horastrabajadas = 8;

// Cada caja puede guardar 12 piezas exactas
const capacidadcajas = 12;

// Calculamos cuántas piezas se hicieron en total
let totalpiezas = piezasporhora * horastrabajadas;

// Ahora miramos cuántas cajas completas se pueden llenar
let cajas = totalpiezas / capacidadcajas;

// Y cuántas piezas quedan sueltas, o sea, las que no alcanzan a llenar otra caja
let sueltas = totalpiezas % capacidadcajas;

// Mostramos todo en una ventana emergente para que el usuario lo vea
alert(`El total de piezas fabricadas es de: ${totalpiezas} 
    La cantidad de cajas que se llenan serían: ${cajas}
    Y las piezas que quedan sueltas son: ${sueltas}`);
