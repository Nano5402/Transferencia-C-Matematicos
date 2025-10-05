const piezasporhora = 250
const horastrabajadas = 8
const capacidadcajas = 12

let totalpiezas = piezasporhora * horastrabajadas
let cajas = totalpiezas / capacidadcajas
let sueltas = totalpiezas % capacidadcajas

alert(`El total de piezas fabricadas es de: ${totalpiezas} 
    La cantidad de cajas que se llenan serían: ${cajas}
    Y las piezas que quedan sueltas son: ${sueltas}`)