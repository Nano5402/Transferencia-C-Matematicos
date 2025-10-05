// Estas son las constantes que nos exigen para poder realizar este punto
const transporte = 120000
const alojamiento = 200000
const alimentacion = 150000
const personas = 4
// Estas son las variables que vamos a utilizar para poder desarrollar lo siguiente
let total = transporte + alojamiento + alimentacion
let aportepersona = total / personas
let aportepersonal = 130000
let sobrante = aportepersonal - aportepersona

// Y estas son nuestras impresiones con los datos
alert(`Cada persona debe pagar: $${aportepersona} y le sobra: $${sobrante}`)
console.log(`Cada persona debe pagar: $${aportepersona} y le sobra: $${sobrante}`)