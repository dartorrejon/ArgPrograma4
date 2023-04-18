
// 1. Genera un array de números aleatorios, ordenarlos y mostrarlo en una lista
// desordenada. Tiene que crear la lista uno mismo.
let nums = Array(10);
let body = document.querySelector("body");
for(i=0;i<nums.length;i++){
    nums[i]=(Math.floor(Math.random()*50))+1;
}
nums.sort((a,b) => a-b)
let lista = document.createElement("ul");

body.appendChild(lista);
for(i=0;i<nums.length;i++){
    let valor = document.createElement("li");
    valor.innerText = nums[i];
    lista.appendChild(valor);
}


// // 2. Dado el array = [1,2,3,4,5,6]
// let nums2 = [1,2,3,4,5,6];
// let cont =0;
// let cad="";

// // a. Iterar por todos los elementos dentro de un array utilizando while y mostrarlos
// // en pantalla.
// while(cont<nums2.length){
//     cad+= nums2[cont]+", "
//     cont++;
// }
// alert(cad)

// // b. Iterar por todos los elementos dentro de un array utilizando for y mostrarlos en
// // pantalla.
// cad ="";
// for(ele in nums2){
//     cad += nums2[ele]+", "
// }
// alert(cad)

// // c. Iterar por todos los elementos dentro de un array utilizando .forEach y
// // mostrarlos en pantalla.
// cad="";
// nums2.forEach(function(element){
//     cad += element+", "
// })
// alert(cad)

// // d. Mostrar todos los elementos dentro de un array sumándole uno a cada uno.
// cad=""
// for(ele in nums2){
//     cad += (nums2[ele]+1) + ", ";
// }
// alert(cad)

// // e. Generar una copia de un array pero con todos los elementos incrementados en 1.
// let copiaNums = nums2.slice();
// for(i=0;i<copiaNums.length;i++){
//     copiaNums[i] +=1;
// }

// cad="";
// copiaNums.forEach(function(element){
//     cad += element+", "
// })
// alert(cad)

// // f. Calcular el promedio
// let prom =0;
// let acu = 0;
// for(ele in nums2){
//     acu += nums2[ele];
// }
// prom = acu/nums2.length;
// alert("El promedio de los numeros es: "+prom)


// // 3. Dado un array de números, mostrar cómo quedaría si cada uno de los números es
// // elevado al cuadrado.
// let num3 = [2,5,1,11,7,9,5]
// num3.forEach( a => console.log(a**2))
// console.log(num3)


// // 4. Dado el array [ 1, -4, 12, 0, -3, 29, -150], hacer la suma solo de sus números positivos.
let enteros = [ 1, -4, 12, 0, -3, 29, -150];
// let sum =0;
// enteros.forEach(a => {
//     if(a>0) sum +=a
// })
// alert("La suma de los numeros positivos del array es: "+sum)


// 5. Dado el array ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"].
// a. Obtener aquellos nombres con al menos 6 letras.
let nombres = ["Florencia", "Lucas", "Ezequiel", "Matias", "Bruno", "Gustavo", "Martin"];
console.log("Nombres con menos de 6 letras:")
nombres.forEach( n => {
    if(n.length<6) console.log(n)
})

// b. Obtener los nombres que comienzan con "M".
console.log("Nombres que comienzan con la letra M")
nombres.forEach(pri =>{
    if(pri[0] =="M") console.log(pri)
})

// c. Ordenar alfabéticamente y mostrar por consola.
nombres.sort()
console.log("Nombres ordenados alfabeticamente: ");
console.log(nombres)

// d. Generar un array que contenga solo las iniciales
//Ejemplo: ["F", "L", "E", "M",... ].
let iniciales =[]
console.log("Iniciales de los nombres:")
nombres.forEach(a => iniciales.push(a[0]))
console.log(iniciales)

// e. Generar un array que contenga todos los nombres en mayúscula.
let mayus = []
nombres.forEach(a => mayus.push(a.toUpperCase()))
console.log("Nombres en mayusculas:")
console.log(mayus)

// f. Queremos saber si alguno de estos nombres comienza con "J”

let ban = false;
nombres.forEach(a =>{
    if(a[0] === "J") ban = true
})

if(ban){console.log("Si contiene un nombre que comienza con J.")
}else{console.log("No existe un nombre que comienze con J.")}


// 6. Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "café", "rosa"] determinar
// si un color introducido por el usuario a través de un prompt se encuentra dentro del
// array o no.

// let colores = ["azul", "amarillo", "rojo", "verde", "café", "rosa"];
// let color = prompt("Ingrese un color").toLowerCase();
// let ban2 = false;

// colores.forEach(c => {
//     if(c === color) ban2 = true
// })
// console.log("Lista de colores");
// console.log(colores)
// if(ban2){console.log("El color "+color+" si se encuentra en la lista!")
// }else{console.log("El color "+color+" no se encuentra en la lista.")}


// 7. Crear una función que reciba un arreglo con números y devuelva un nuevo arreglo con
// solo los números pares

function nrosPares (numeros){
    let pares = Array();
    for(i=0;i<numeros.length;i++){
        if(numeros[i] % 2 == 0) pares.push(numeros[i])
    }
    console.log("lista de numeros: "+numeros)
    console.log("numeros pares: "+pares)
}
nrosPares(nums)


// 8. Crear una función que reciba un arreglo con palabras, crear un nuevo arreglo que
// contenga sólo las palabras que empiezan con una vocal.

//Funcion para saber si la primera letra de la palabra es vocal
let esVocal = voc => {
    let vocales = /^[aeiou]/i;
    return vocales.test(voc);
}

//Funcion que retorna el array con las palabras que tiene primera letra vocal
let primeraVocal = palab => {
    let vocArray = Array();
    palab.forEach(a => {
        if(esVocal(a)) vocArray.push(a)
    })
    return vocArray
}

let arrayVocales = primeraVocal(nombres);
console.log(arrayVocales)


// 9. Crear un método que permite intercambiar las posiciones de dos elementos de un
// arreglo en base a sus índices
let intercambiar = (a,b, lista) => {
    let c = lista[a];
    lista[a] = lista[b];
    lista[b] = c
}
console.log(enteros)
intercambiar(2,5,enteros)
console.log(enteros)




$(document).ready(function(){
    
    // 10. Crear dos párrafos en el body de una página. Capturar el evento click solo del primero
    // utilizando la librería jQuery.
    $("p:first").click(function(){
        console.log("hiciste click aqui!");
    })

    // 11. Confeccionar una página que muestre una tabla con dos filas y cambiar el color de fondo
    // cuando sea presionada con el mouse
    $("#tabla1").click(function(){
        let color=colorin();
        $("#tabla1").css("background-color",color);
    })

    //     12. Mostrar una lista no ordenada con 4 elementos 'li'. Ocultar el que se presiona. Para
    // ocultar un elemento jQuery tiene un método llamado hide().
    $("#elementos").children("li").click(function(){
        $(this).hide();
    })

    //     13. Confeccionar una página que muestre dos tablas con tres filas cada una. Cambiar el color
    // de fondo de cada fila de la primera tabla cuando sea presionada con el mouse.
    $("#tabla3 tr").eq(0).click(function(){
        $("#tabla2 tr").eq(0).css("background-color",colorin())
    })
    $("#tabla3 tr").eq(1).click(function(){
        $("#tabla2 tr").eq(1).css("background-color",colorin())
    })
    $("#tabla3 tr").eq(2).click(function(){
        $("#tabla2 tr").eq(2).css("background-color",colorin())
    })
    
    // 14. Disponer un título de noticia y seguidamente la descripción de la noticia (encerrarlo en
    //     un div con un nombre de clase), repetir esto para tres noticias. Agregar tres botones que
    //     rescaten el nombre de la clase para la descripción de la noticia y cambien su tamaño de
    //     fuente.
    $("#b1").click(function(){
         alert($("div").prop('class')); 
    })

    $("#b2").click(function(){
        let actual = $("div p:first").text();
        let descripcion = actual + $("div").prop('class');

        $(".noticia p").text(descripcion)
    
    })

    $("#b3").click(function(){
        $(".noticia p").css("font-size","20px");
    })


    //     15. Crear una página que contenga dos tablas de 3 filas y 3 columnas cada una con un texto
    // en cada casillero. Luego al presionar un botón cambiar por la cadena "-" solo el
    // contenido de la primera tabla, dejando intacto el de la segunda.
    $("#cambiaLetra").click(function(){
        $("#tab1 tr th").text("-");
    })
    
    //     16. Definir un hipervínculo con la propiedad href con cadena vacía. Luego disponer tres
    // botones que permitan fijar distintos hipervínculos para la propiedad href. Además
    // actualizar el texto del hipervínculo.
    $("#cambiarLink").click(function(){
        let desc
        let direccion
        switch(Math.floor(Math.random()*4)){
            case 0:
                    desc ="Google";
                    direccion="https://www.google.com.ar";
                    break;
            case 1:
                    desc = "Facebook";
                    direccion ="https://www.facebook.com";
                    break;
            case 2:
                    desc = "Twitter";
                    direccion = "https://www.twitter.com";
                    break;
            case 3:
                    desc = "Gmail";
                    direccion = "http://mail.google.com/mail?hl=es-419";
                    break;
        }
        $("#adonde").attr('href',direccion);
        $("#adonde").text(desc);

    })

    //     17. Confeccionar una página que contenga algunas palabras con el elemento 'strong', luego
    // cuando sean presionadas ocultarlas
    $("#ocultar strong").click(function(){
        $(this).hide();
    })

    //     18. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
    // cuando ingresamos con el mouse y dejarla con dicho color cuando retiramos la flecha.
    $("#tablaFocus tr th").mouseover(function(){
        $(this).css("background-color",colorin());
    })

    //     19. Crear una tabla con dos filas y dos columnas, cambiar el color del interior de la casilla
    // cuando ingresamos con el mouse y regresar al original cuando salimos.
    $("#tablaFocus2 tr th").mouseover(function(){
        $(this).css("background-color",colorin());
    })
    $("#tablaFocus2 tr th").mouseout(function(){
        $(this).css("background-color","initial");
        console.log("out");
    })
})

let colorin = () => {
    let col
    switch(Math.floor(Math.random()*5)+1){
        case 1:
                col="red";
                break;
        case 2:
                col = "blue";
                break;
        case 3:
                col = "yellow";
                break;
        case 4:
                col = "green";
                break;
        case 5:
                col = "lightblue";
                break;

    }
    return col
}
