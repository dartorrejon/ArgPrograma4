//1. Crea un array que contenga el nombre de cinco colores escritos como strings.
const colores = ["negro","blanco","gris","rojo","verde"]


//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.
let temp = colores[2]


//3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del ejercicio 1.
console.log(colores[0][0])



//4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la función Math.random().
for(i=0;i<10;i++){
console.log(Math.floor(Math.random()*(100-20)+20))}


//5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
let nums =[]

for(i=1;i<=10;i++){
    nums.push(i)
}
console.log(nums)


//6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola
let ale = []

for(i=0;i<=10;i++){
    ale.push(Math.floor(Math.random()*100))
}
console.log("Array Original")
console.log(ale)




//7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la consola.
let copy_array = ale.slice(0) //Utilizo el metodo slice para hacer una copia del array original.
console.log("Array Copia")
console.log(copy_array)
ale.pop() //Elimino un elemento del array original
console.log("Array Original")
console.log(ale)
console.log("Array Copia")
console.log(copy_array)


/*8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.*/
// let palabra =prompt("Ingrese una palabra(FIN = cancelar):").toLowerCase()
// let cad = palabra
// while(palabra != "cancelar"){
//     palabra = prompt("Ingrese otra palabra(FIN = cancelar:").toLowerCase()
//     if(palabra !="cancelar")
//         cad += " - "+palabra
// }
// if (cad != "cancelar") {
//     console.log(cad)
// }

// let palabra2 =prompt("Ingrese una palabra(FIN = cancelar):").toLowerCase()
// let palArray =[]

// while(palabra2 != "cancelar"){
//     palArray.push(palabra2)
//     palabra2 = prompt("Ingrese otra palabra(FIN = cancelar:").toLowerCase()
    
// }
// if (palArray != []) {
//     let cad2=""
//     for(i=0;i<palArray.length;i++){
//         if (i==0){
//             cad2 = palArray[i]
//         }else{
//             cad2 += " - " +palArray[i]
//         }
//     }
//     console.log(cad2)
// }


/*9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html.*/

function obtenerDolares(){
    let dolares = document.getElementById("dolares").value;
    let pesos = dolares*300
    
    document.getElementById("pesos").value = pesos
    document.getElementById("pesos").readOnly = true
}

//10. Generar la inversa del ejercicio anterior (de pesos a dólares).

function obtenerPesos(){
    let pesos = document.querySelector("#pesos2").value
    let dolares = pesos/300
    document.querySelector("#dolares2").value = dolares
    document.querySelector("#dolares2").readOnly = true
}

/*11. Hacer un formulario que convierta de grados centígrados a grados Fahrenheit. Para
ello deberá multiplicar por 9/5 y sumar 32. Tener en cuenta que 30 grados centígrados
son 86 grados fahrenheit.*/
function convertir(){
    let far = document.querySelector("#Temperatura #far")
             
    let centi = document.querySelector("#centigrados").value
    let fare = (centi*9/5)+32
    far.style.fontSize = "2em"
    far.innerText = "Temperatura en Farhenheit: "+fare+" °F."
}

/*12. Hacer un formulario para solicitar el envío de una caja de cartón. En el formulario
podremos especificar las características de la caja. Ejemplo:*/


function enviarMensaje(){
    let opcion
    let nombre = document.querySelector("#nombre").value
    let material = document.querySelector("#opciones").innerText
    let dimension =  document.getElementsByName("tamanio")
    let comentario = document.querySelector("#descripcion").value
    
    let mensaje = document.querySelector("#mensaje")
        
        for (let i = 0; i < dimension.length; i++) {
          if (dimension[i].checked) {
            opcion =dimension[i].value;
          }
        }
    mensaje.value = nombre+" ah pedid una caja de "+material+" con una dimension"+opcion+". "+comentario //Funciona pero cuando imprime el msje en el input luego se borra automaticamente no se por que =(

}

/*13. A través de un formulario, el usuario debe introducir un número secreto que estará
entre 0 y 5.
El usuario tendrá tres intentos para acertar el número, si no lo logra, habrá perdido el
juego.
Debemos indicar en un cuadro de texto si el usuario gana, falla el número o pierde.*/

const nroOculto = Math.floor(Math.random()*6)
let cont=0
let p = document.querySelector("#resultado")

function adivinarNro(){
    let ocultos = document.querySelectorAll(".oculto")
    if(cont <3){
        if(document.querySelector("#nro") != nroOculto){
            if(cont==0){
                for(i=0;i<ocultos.length;i++){
                    ocultos[i].hidden = false;
                }
            }   
            cont++
            document.getElementById("cantintentos").innerText = "Intentos : "+ cont //muestra el incremento de intentos
            document.getElementById("nro").value = "" // limpia el campo de ingreso del intento
            document.getElementById("nro").focus(this) //pone el foco en el campo
        }else{
            ocultos[1].hidden = true
            p.innerText ="GANOOO Felicidades!! El numero secreto era "+nroOculto
        }
    }else{
        ocultos[1].hidden = true
        p.innerText = "PERDIO!!!No le quedan mas intentos! Maximo 3."
    }
}

/*14. Dado un input y un botón, escribir nombres de personas e ir mostrando en una lista
desordenada a medida que se agregan.*/
let nomPersona = document.querySelector("#nombrePersona")
let listaPersona = document.querySelector("#listaNombresPersona")

function agregarNombre(){
    let elementoLista = document.createElement("li")
    elementoLista.innerText = nomPersona.value
    listaPersona.appendChild(elementoLista)
}



