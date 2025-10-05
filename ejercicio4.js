// Estas son las 4 notas que sacó el aprendiz, y como no cambian, las dejamos como constantes
const nota1 = 4.5
const nota2 = 3.8
const nota3 = 2.9
const nota4 = 4.0

// Sumamos todas las notas para saber cuánto dio en total
let suma = nota1 + nota2 + nota3 + nota4

// Sacamos el promedio dividiendo la suma entre 4 (porque son 4 notas)
let promedio = suma / 4

// Ahora hacemos una operación especial que mezcla las notas en dos grupos
// Primero sumamos nota1 y nota2 → da 8.3
// Luego sumamos nota3 y nota4 → da 6.9
// Multiplicamos esos dos resultados → 8.3 * 6.9 = 57.27
// Y al final lo dividimos entre 2 → 57.27 / 2 = 28.635
let operacion = (nota1 + nota2) * (nota3 + nota4) / 2

// Mostramos todo en una ventana emergente para que el usuario lo vea
alert(`El resultado de las 4 notas sumadas es: ${suma} 
El promedio de las notas es: ${promedio}
Y la operación resulta sería: ${operacion}`)

// También lo dejamos en la consola por si alguien quiere revisar ahí
console.log(`El resultado de las 4 notas sumadas es: ${suma} 
El promedio de las notas es: ${promedio}
Y la operación resulta sería: ${operacion}`)