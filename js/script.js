//acceder a los primeros elementos de un array

document.write("<h2>Elementos de una array</h2>")
const numbersx = [1, 2, 3, 4, 5]
let index = 4

document.write("El arreglo en su primera posicion es: "+numbersx[0]+"<br>")

document.write("El arreglo en la posicion dos es: "+numbersx[2]+"<br>")

//Puedes usar variables para acceder a los elementos de un array.

document.write("la variable index corresponde a: "+numbersx[index]+"<br>")

//Modificar elementos de un array

numbersx[0] = 10
numbersx[2] = 30

document.write("El array modificado es: "+numbersx+"<br>")

document.write("<h3>La longitud de un array</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array tiene una longitud de: "+frutas.length+"<br>")

document.write("<h3>Metodos de array</h3>")
//Metodos de arrays: .push()

document.write("<h4>Metodos de array: .push()</h4>")

const frutass = ["plátano", "fresa"]
frutass.push("naranja")

document.write("El numero de frutas que hay en el array es: "+frutass.length+"<br>")
document.write("El array de frutas es: "+frutass+"<br>")

const newcuen = frutass.push("banano")

document.write("El nuevo arrays de frutas es: "+newcuen+"<br>")
document.write("El numero de frutas que hay actualmenta en el array es: "+frutass.length+"<br>")

//Metodos de arrays: .pop()

document.write("<h4>Metodos de array: .pop()</h4>")

const frutasx = ["plátano", "fresa", "naranja"]
const ultimaFrutax = frutasx.pop()

document.write("El numero de frutas que hay en el array es: "+frutasx.length+"<br>")
document.write(" usando pop es: "+ultimaFrutax+"<br>")

//Metodos de array: .shift()
document.write("<h4>Metodos de array: .shift()</h4>")

const frutasf = ["plátano", "fresa", "naranja"]
const priFru = frutasf.shift()

document.write("El numero de frutas que hay en el array es: "+frutasf.length+"<br>")
document.write("La fruta que queda en el array usando shift es: "+priFru+"<br>")

//Metodos de array: .unshift()
document.write("<h4>Metodos de array: .unshift()</h4>")

const frutash = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

document.write("Las frutas que hay en el array usando unshift son: "+frutash+"<br>")

document.write("<h3>Concatenar arrays</h3>")

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

document.write("Los numeros concatenados con (concat) quedaron asi: "+allNumbers+"<br>") 

const alllNumbers = [...numbers, ...numbers2]

document.write("Los numeros concatenados con (...) quedaron asi: "+alllNumbers+"<br>") 

document.write("<h3>Iteracion de arrays en JavaScript</h3>")

document.write("<h4>Bucle While</h4>")

let frutasg = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutasg.length) {
  document.write(frutasg[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}

document.write("<h4>Bucle for</h4>")

let frutasl = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutasl.length; i++) {
  document.write(frutasl[i]) // imprime el elemento en la posición i
}

document.write("<h4>Bucle for...of</h4>")

let frutasm = ['🍎' , '🍓', '🍌']

for (let fruta of frutasm) {
  document.write(fruta) // imprime el elemento en la posición i
}

document.write("<h4>El método array.forEach()</h4>")

let frutasz = ['🍎', '🍌', '🍓']

frutasz.forEach(function (frutad, index, originalArray) {
  document.write(frutad) // imprime el elemento en la posición i
})






































