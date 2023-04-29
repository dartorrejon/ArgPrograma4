//Generamos las filas de la tabla 
let fila1 = document.querySelector('#fila1');
let fila2 = document.querySelector('#fila2');
let fila3 = document.querySelector('#fila3');
let fila4 = document.querySelector('#fila4');
let fila5 = document.querySelector('#fila5');

//Funcion para limpiar la tabla
function limpiarTabla() {
  fila1.innerHTML = '';
  fila2.innerHTML = '';
  fila3.innerHTML = '';
  fila4.innerHTML = '';
  fila5.innerHTML = '';
}

//Funcion para cargar las columnas a las filas de la tabla
function cargarFila(fila, columna1, columna2, columna3, columna4) {
  fila.appendChild(columna1);
  fila.appendChild(columna2);
  fila.appendChild(columna3);
  fila.appendChild(columna4);
}

let pag = 1;

tabla = () => {
  fetch('https://rickandmortyapi.com/api/character/?page=' + pag).then(res => res.json()).then(data => {
    const personajes = Object.values(data.results); //Obtenemos todos los personajes de la pagina
    const pagActual = (data.info); //Nro de la Pagina actual
    let pagina = document.querySelector('#nroPagina');
    pagina.innerText = "Pagina N° " + pag;

    let nombre, estado, especie, genero, origen, locacion, foto;
    let cont = 1
    let tarjeta, col1, col2, col3, col4;

    //Recorremos el vector de personaje de cada pagina 
    for (let i = 0; i < personajes.length; i++) {

      //Obtenemos cada elemento necesario para la tarjeta desde la API
      foto = document.createElement('img'); //Agregamos la foto
      foto.src = personajes[i]['image']; //Referenciamos el src con la API
      foto.setAttribute("alt",personajes[i]['name']);
      foto.setAttribute("title",personajes[i]['name']);
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
          tarjeta.setAttribute("class","tarjeta");
          tarjeta.setAttribute("alt","personaje")
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
          tarjeta.setAttribute("class","tarjeta");
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
          tarjeta.setAttribute("class","tarjeta");
          tarjeta.setAttribute("alt","personaje");
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
          tarjeta.setAttribute("class","tarjeta");
          tarjeta.setAttribute("alt","personaje");
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

let anterior = document.querySelector('#anterior');
let siguiente = document.querySelector('#siguiente');
let pagInicial = document.querySelector('#pag1');
let pagFinal = document.querySelector('#pag42');
let saltarPaginas = document.querySelector('#saltarPags');
let volverPaginas = document.querySelector('#volverPags');


//Funcion Boton Anterior
ant = () => {
  if (pag > 1) {
    pag--;
    limpiarTabla()
    tabla()
  } else {
    anterior.setAttribute("hidden", true);
  }

  if (pag < 42) siguiente.removeAttribute("hidden")
  if (pag < 37) {
    saltarPaginas.innerText = "Volver a pagina " + (pag + 5);
  } else {
    saltarPaginas.innerText = "Saltar a pagina..."
  }

  volverPaginas.innerText = "volver a pagina " + (pag - 5);
}

//Funcion boton siguiente
sig = () => {
  if (pag <= 42) {
    pag++;
    limpiarTabla()
    tabla()
  } else {
    siguiente.setAttribute("hidden", true);
  }

  if (pag > 1) anterior.removeAttribute("hidden");
  if (pag > 5) {
    volverPaginas.innerText = "Volver a pagina " + (pag - 5);
  } else {
    volverPaginas.innerText = "Volver a pagina..."
  }

  saltarPaginas.innerText = "Saltar a pagina " + (pag + 5);

}

//Funcion Boton pagina1
pagina1 = () => {
  pag = 1
  limpiarTabla()
  tabla();
  anterior.setAttribute("hidden", true);
  siguiente.removeAttribute("hidden");
  saltarPaginas.innerText = "Saltar a pagina " + (pag + 5);
  volverPaginas.innerHTML = "Volver a pagina... ";
}

//Funcion Boton pagina42
paginaFInal = () => {
  pag = 42
  limpiarTabla()
  tabla();
  siguiente.setAttribute("hidden", true);
  anterior.removeAttribute("hidden");
  saltarPaginas.innerText = "Saltar a pagina..."
  volverPaginas.innerText = "Volver a pagina " + (pag - 5);

}

//Adelanta 5 paginas
adelantarPaginas = () => {
  if (pag < 37) {
    pag += 5;
    limpiarTabla()
    tabla()
    if (pag >= 42) { saltarPaginas.innerText = "Saltar a pagina..."; }
    else { saltarPaginas.innerText = "Saltar a pagina " + (pag + 5); }
    volverPaginas.innerText = "Volver a pagina " + (pag - 5);
  } else {
    pag = 42
    limpiarTabla()
    tabla()
    saltarPaginas.innerText = "Saltar a pagina...";
    volverPaginas.innerText = "Volver a pagina " + (pag - 5);
    siguiente.setAttribute("hidden",true);
    
  }
  anterior.removeAttribute("hidden");
}



//Retrocede 5 paginas
volPaginas = () => {
  if (pag >= 6) {
    pag -= 5;
    limpiarTabla()
    tabla()
    volverPaginas.innerText = "Volver a pagina " + (pag - 5);
    saltarPaginas.innerText = "Saltar a pagina " + (pag + 5);
  } else {
    pag = 1
    limpiarTabla()
    tabla()
    volverPaginas.innerText = "Volver a pagina..."
    saltarPaginas.innerText = "Saltar a pagina " + (pag +5);
    anterior.setAttribute("hidden",true);
    
  }
  siguiente.removeAttribute("hidden");
}



//Cargamos las imagenes en la tabla apenas abrimos la pagina
window.onload = tabla();
