//acceder a los primeros elementos de un array

document.write("<h2>Elementos de una array</h2>")
const numbers = [1, 2, 3, 4, 5]
let index = 4

document.write("El arreglo en su primera posicion es: "+numbers[0]+"<br>")

document.write("El arreglo en la posicion dos es: "+numbers[2]+"<br>")

//Puedes usar variables para acceder a los elementos de un array.

document.write("la variable index corresponde a: "+numbers[index]+"<br>")

//Modificar elementos de un array

numbers[0] = 10
numbers[2] = 30

document.write("El array modificado es: "+numbers+"<br>")

document.write("<h3>La longitud de un array</h3>")

const frutas = ["manzana", "pera", "plátano", "fresa"]

document.write("El array de frutas es: "+frutas+"<br>")
document.write("El array tiene una longitud de: "+frutas.length+"<br>")





