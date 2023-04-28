// imprimir = () => {
//   fetch('https://rickandmortyapi.com/api/character/?page=2')
//     .then(res => res.json())
//     .then(data => {
//       console.log("Los datos recibidos son:");
//       console.log(data);
//     });
// }

// // let imagen = document.querySelector("#personaje");
// fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json()).then(data => {
//   document.getElementById('personaje').textContent = JSON.stringify(data["name"]);
// });


// fetch('https://rickandmortyapi.com/api/character/2')
//   .then(response => response.json())
//   .then(data => {
//     const imagenUrl = data["image"];
//     const imagenElement = document.getElementById('imagenPerso');
//     imagenElement.src = imagenUrl;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

//Generamos las filas de la tabla 
let fila1 = document.querySelector('#fila1');
let fila2 = document.querySelector('#fila2');
let fila3 = document.querySelector('#fila3');
let fila4 = document.querySelector('#fila4');
let fila5 = document.querySelector('#fila5');


//Funcion para cargar las columnas a las filas de la tabla
function cargarFila(fila, columna1, columna2, columna3, columna4) {
  fila.appendChild(columna1);
  fila.appendChild(columna2);
  fila.appendChild(columna3);
  fila.appendChild(columna4);
}

let pag=1;

fetch('https://rickandmortyapi.com/api/character/?page='+pag).then(res => res.json()).then(data => {
  const personajes = Object.values(data.results); //Obtenemos todos los personajes de la pagina
  const pagActual = (data.info); //Nro de la Pagina actual
  let pagina = document.querySelector('#nroPagina');
  pagina.innerText = "Pagina N° "+pag;

  let nombre, estado, especie, genero, origen, locacion, foto;
  let cont = 1
  let tarjeta, col1, col2, col3, col4;
  
  //Recorremos el vector de personaje de cada pagina 
  for (let i = 0; i < personajes.length; i++) {

    //Obtenemos cada elemento necesario para la tarjeta desde la API
    foto = document.createElement('img'); //Agregamos la foto
    foto.src = personajes[i]['image']; //Referenciamos el src con la API
    nombre = document.createElement('blockquote');
    nombre.innerText = personajes[i]['name'];
    estado = document.createElement('p');
    estado.innerText = personajes[i]['status']
    especie = document.createElement('p');
    especie.innerText = personajes[i]['species'];
    genero = document.createElement('p');
    genero.innerText = personajes[i]['gender'];
    origen = document.createElement('p');
    origen.innerText = personajes[i]['origin']['name']
    locacion = document.createElement('p');
    locacion.innerText = personajes[i]['location']['name']

    //Creamos cada tarjeta del personaje por cada columna(4 columnas por 5 filas = 20 personajes)
    switch (cont) {
      case 1:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col1 = document.createElement('td');
        col1.appendChild(tarjeta);
        break;
      case 2:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col2 = document.createElement('td');
        col2.appendChild(tarjeta);
        break;
      case 3:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col3 = document.createElement('td');
        col3.appendChild(tarjeta);
        break;
      case 4:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col4 = document.createElement('td');
        col4.appendChild(tarjeta);
        break;

    }

    //Importante volver a 0 el contador cuando llega a 4
    if (cont == 4) {
      cont = 0;
    }

    //Cargamos cada fila con 4 columnas
    if (i == 3) {
      cargarFila(fila1, col1, col2, col3, col4)
    }

    if (i == 7) {
      cargarFila(fila2, col1, col2, col3, col4)
    }

    if (i == 11) {
      cargarFila(fila3, col1, col2, col3, col4)
    }

    if (i == 15) {
      cargarFila(fila4, col1, col2, col3, col4)
    }

    if (i == 19) {
      cargarFila(fila5, col1, col2, col3, col4)
    }
    cont++;
  }

})


ant = () =>{
  if (pag!=1){
    pag--;
  }
  fila1.innerHTML = '';
  fila2.innerHTML = '';
  fila3.innerHTML = '';
  fila4.innerHTML = '';
  fila5.innerHTML = '';
  tabla()
}

sig = () =>{
  if (pag<=42){
    pag++;
  }
  fila1.innerHTML = '';
  fila2.innerHTML = '';
  fila3.innerHTML = '';
  fila4.innerHTML = '';
  fila5.innerHTML = '';
  tabla()
}

tabla = () =>{fetch('https://rickandmortyapi.com/api/character/?page='+pag).then(res => res.json()).then(data => {
  const personajes = Object.values(data.results); //Obtenemos todos los personajes de la pagina
  const pagActual = (data.info); //Nro de la Pagina actual
  let pagina = document.querySelector('#nroPagina');
  pagina.innerText = "Pagina N° "+pag;

  let nombre, estado, especie, genero, origen, locacion, foto;
  let cont = 1
  let tarjeta, col1, col2, col3, col4;
  
  //Recorremos el vector de personaje de cada pagina 
  for (let i = 0; i < personajes.length; i++) {

    //Obtenemos cada elemento necesario para la tarjeta desde la API
    foto = document.createElement('img'); //Agregamos la foto
    foto.src = personajes[i]['image']; //Referenciamos el src con la API
    nombre = document.createElement('blockquote');
    nombre.innerText = personajes[i]['name'];
    estado = document.createElement('p');
    estado.innerText = personajes[i]['status']
    especie = document.createElement('p');
    especie.innerText = personajes[i]['species'];
    genero = document.createElement('p');
    genero.innerText = personajes[i]['gender'];
    origen = document.createElement('p');
    origen.innerText = personajes[i]['origin']['name']
    locacion = document.createElement('p');
    locacion.innerText = personajes[i]['location']['name']

    //Creamos cada tarjeta del personaje por cada columna(4 columnas por 5 filas = 20 personajes)
    switch (cont) {
      case 1:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(especie);
        col1 = document.createElement('td');
        col1.appendChild(tarjeta);
        break;
      case 2:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col2 = document.createElement('td');
        col2.appendChild(tarjeta);
        break;
      case 3:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col3 = document.createElement('td');
        col3.appendChild(tarjeta);
        break;
      case 4:
        tarjeta = document.createElement('div');
        tarjeta.appendChild(foto);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(especie);
        tarjeta.appendChild(genero);
        tarjeta.appendChild(origen);
        tarjeta.appendChild(locacion);
        col4 = document.createElement('td');
        col4.appendChild(tarjeta);
        break;

    }

    //Importante volver a 0 el contador cuando llega a 4
    if (cont == 4) {
      cont = 0;
    }

    //Cargamos cada fila con 4 columnas
    if (i == 3) {
      cargarFila(fila1, col1, col2, col3, col4)
    }

    if (i == 7) {
      cargarFila(fila2, col1, col2, col3, col4)
    }

    if (i == 11) {
      cargarFila(fila3, col1, col2, col3, col4)
    }

    if (i == 15) {
      cargarFila(fila4, col1, col2, col3, col4)
    }

    if (i == 19) {
      cargarFila(fila5, col1, col2, col3, col4)
    }
    cont++;
  }

})
}
