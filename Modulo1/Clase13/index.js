imprimir = () => {
    fetch('https://rickandmortyapi.com/api/character/')
        .then(res => res.json())
        .then(data => {
            console.log("Los datos recibidos son:");
            console.log(data.results[0]);
        });
}

// let imagen = document.querySelector("#personaje");
fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json()).then(data => {
   document.getElementById('personaje').textContent = JSON.stringify(data["name"]);
});

// let url = fetch('https://rickandmortyapi.com/api/character/2').then(res => res.json()).then(data => {
//    JSON.stringify(data["image"]);
// });

fetch('https://rickandmortyapi.com/api/character/2')
  .then(response => response.json())
  .then(data => {
    const imagenUrl = data["image"];
    const imagenElement = document.getElementById('imagenPerso');
    imagenElement.src = imagenUrl;
  })
  .catch(error => {
    console.error('Error:', error);
  });

