/*1. Generar una función que le ingrese por parámetro algún dato ya sea ingresado por el
usuario o declarado anteriormente en su código y mostrar por consola el tipo de dato
que es. **/

// dato = prompt("Ingrese algun valor:")
// console.log(typeof(dato))



/*2. Dado dos números ingresados por el usuario, se pide realizar una función que
devuelve la resta de ambos números. Mostrar el resultado por la consola.*/

// let valor1 = prompt("Ingrese un valor entero")

// let valor2 = prompt("Ingrese otro valor entero")

// function resta(num1,num2){
//     return num1-num2
// }

// console.log("El valor de la resta es:",resta(valor1,valor2))



/*3. Generar una función que le ingresen por parámetro dos valores distintos en dos
variables a y b, luego el valor ingresado en a pasarlo a b y el valor Ingresado en b,
Pasarlo a a y mostrarlos*/
// let num1 = prompt("Ingrese un numero entero:")
// let num2 = prompt("Ingrese un segundo numero entero:")

// function intercambiar(n1, n2){
//     let aux=n1
//     console.log("Valor de a:",n1)
//     console.log("Valor de b:",n2)
//     n1 = n2
//     n2 = aux
//     console.log("Intercambio...")
//     console.log("Valor de a:",n1)
//     console.log("Valor de b:",n2)
// }

// intercambiar(num1,num2)



/*4. Generar una función que le ingrese por parámetro el valor del lado de un cuadrado
calcular su perímetro, su superficie, e informar los mismos en consola*/

// let lado = prompt("Ingrese el tamaño del lado del cuadrado(cm):")

// function perimetroSuperficie(l){
//     console.log("el perimetro del cuadrado es:",l*4,"cm.")
//     console.log("La superficie del cuadrado es",l*l,"cm cuadrados.")
// }

// perimetroSuperficie(lado)



/*5. Generar una función que dada una temperatura en grados fahrenheit los convierta a
grados celsius.*/

// let temp = prompt("Ingrese la temperatura en grados Fahrenheit:")

// function convertirCelsius(t){
//     return ((t-32)/1.8)
// }

// let tempCelsius = convertirCelsius(temp)

// console.log("La temperatura es ",tempCelsius," °C")



/*6. Realizar una función que calcule el factorial de un número ingresado por el usuario (el
    número no puede ser mayor de 10, realizar la validación). Mostrar el resultado por la
    consola*/

//     let num =prompt("Ingrese un numero entero positivo menor o igual a 10:")

//     while(num <1 || num >10){
//         num = prompt("Numero fuera de rango, ingrese un numero entero positivo <= 10:")
//     }

//     function facto(numero){
//         let fac=1
//         for(i=numero;i>0;i--){
//             fac *= i;
//         }
//         return fac
//     }
// console.log("El factorial de",num,"es",facto(num))

/*7. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
indique si ese texto es un palíndromo. Ejemplo de palíndromo: “Somos o no somos”.*/

// let pal = prompt("Ingrese una palabra o frase sin acentos:")
// palAux = pal.toLowerCase()

// //Funcion que retorna una palabra con los caracteres que solo son letras.
// function soloCaracteres(palabra){
//     p2=""
//     for(i=0;i<palabra.length;i++){
//         if(palabra.charCodeAt(i) >=97  && palabra.charCodeAt(i) <= 122){
//             p2+=palabra[i]
//         }
//     }
//     return p2
// }

// //Guardamos la palabra con solo letras
// palAux=soloCaracteres(palAux)

// //Generamos una palabra nueva recorriendo la frase o palabra de atras para adelante y la guardamos en una nueva variable.
// let pal2 =""
// for(i=(palAux.length-1);i>=0;i--){
//     pal2+=palAux[i]
// }

// //Comparamos los strings si son iguales sera un palindromo, caso contrario no.
// if(palAux === pal2){
//     console.log("La palabra o frase \"",pal,"\" es un palindromo.")
// }else{
//     console.log("La palabra o frase \"",pal,"\" no es un palindromo.")
// }



/*8. Dado una cadena de caracteres ingresada por el usuario, se pide realizar un script que
lo muestre en mayúsculas y luego en minúsculas. Investigue el manejo de string en
Javascript.*/

// let palabra = prompt("Ingrese una palabra o frase:")
// console.log("Palabra en mayusculas:",palabra.toUpperCase())
// console.log("Palabra en minusculas:",palabra.toLowerCase())



/*9. Se pide que un usuario ingrese una nota numérica de un alumno. Muestra la
calificación resultante según la nota ingresada:
0-2: Muy deficiente
3-4: Insuficiente
5: Suficiente
6: Bien
7-8: Notable
9-10: Sobresaliente*/

// let nota = prompt("Ingrese la nota del alumno(numero entero del 0 al 10):")

// switch(nota){
//     case "0":
//     case "1":
//     case "2":
//         console.log("Muy deficiente!")
//         break
//     case "3":
//     case "4":
//         console.log("Insuficiente!")
//         break
//     case "5":
//         console.log("Suficiente.")
//         break
//     case "6":
//         console.log("Bien.")
//         break
//     case "7":
//     case "8":
//         console.log("Notable.")
//         break
//     case "9":
//     case "10":
//         console.log("Sobresaliente!")
//         break
//     default:
//         console.log("Valor no valido!")
//         break
// }



/*10. Se pide realizar un script en el que el usuario introduce el número del mes (1 al 12) y
devuelve si ese mes tiene 30 o 31 días.*/

// mes = prompt("Ingrese el numero del mes(1-12):")

// switch(mes){
//     case "1":
//     case "3":
//     case "5":
//     case "7":
//     case "9":
//     case "10":
//     case "12":
//             console.log("El mes tiene 31 dias.")
//             break
//     case "2":
//     case "4":
//     case "6":
//     case "8":
//     case "11":
//             console.log("El mes tiene 30 dias.")
//             break
//     default:
//         console.log("El valor ingresado no corresponde.")
//         break
// }



/*1. Crear un script que genere una pirámide como el ejemplo con los números del 1 al
número que ingrese el usuario (no puede ser mayor de 10, realizar la validación):
1
12
123
1234
12345
123456
……*/

// num = prompt("ingrese un numero del 1 al 10:")

// while(num <1 || num >10){
//     num = prompt("El valor ingresado no es valido.Ingrese nuevamente un numero del 1 al 10:")
// }
// piram =""
// for(i=1;i<=num;i++){
//     piram+=i
//     console.log(piram)
// }



/*2. Generar una función donde ingresen dos números, el primero corresponde a la
cantidad de bultos en stock y el segundo a la cantidad de bultos que se pueden
colocar en una caja. Calcule cuántas cajas completas se pueden llenar con los bultos
disponibles y cuantos bultos sueltos quedarían. Mostrar ambos resultados en consola.*/

// let stock = prompt("Ingrese la cantidad de bultos en stock:")
// let cantXCaja = prompt("Ingrese la cantidad maxima por caja:")

// function calBultos(cant, caja){
//     let contCajas = 0
//     while(Number(cant)>=Number(caja)){
//         contCajas++
//         cant -=caja
//     }
//     console.log("Se llenaron ",contCajas,"cajas.")
//     console.log("La cantidad de bultos sueltos fue de",cant)
// }

// calBultos(stock,cantXCaja)



/*13. Se pide realizar un script para una tienda de coches: Si el coche a la venta es un Ford
Fiesta (código "fiesta"), el descuento es de un 5%. Si el coche a la venta es un Ford
Focus (código "focus"), el descuento es del 10%. El usuario introduce el artículo a
través de su código y el script saca el descuento correspondiente por la consola*/


// let precio = prompt("Ingrese el precio del vehiculo $:")
// let codigo = prompt("Ingrese el codigo de descuento")

// function descXCodigo(valor, cod){
//     if(cod == "fiesta"){
//         console.log("El valor del vehiculo es $",valor,"con el descuento del 5% es de $",(valor-(valor*5/100)))
//     }else{
//         if(cod == "focus"){
//             console.log("El valor del vehiculo es $",valor,"con el descuento del 10% es de $",(valor-(valor/10)))
//         }
//         else{
//             console.log("No hay descuento por este vehiculo, el precio final es $",valor)
//         }
//     }
// }

// descXCodigo(precio,codigo)
console.log(8+6+"10")