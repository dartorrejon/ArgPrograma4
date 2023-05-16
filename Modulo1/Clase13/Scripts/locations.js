// fetch("https://rickandmortyapi.com/api/location")
// .then( res => res.json())
// .then(data => {
//     // console.log(data.results);
//     const lugares = Object.values(data.results);
//     lugares.forEach(element => {
//         console.log(element);
//     });
// });

// const xhr = new XMLHttpRequest();
// console.log(xhr)
// xhr.responseType ="json";
// xhr.addEventListener('load', ev =>{
//     if(ev.currentTarget.status === 200){
//         console.log(ev.currentTarget.response);
//     }else{
//         console.warn("no es json")
//              xhr.abort();
//     }
 

// })
// xhr.open("GET",'https://rickandmortyapi.com/api/location', true);
// xhr.send();

const locaciones = fetch("https://rickandmortyapi.com/api/location")
    locaciones
    .then(res => res.json())
    .then(data => {
        const informacion = data.info;
        console.log(typeof informacion);
        // informacion.forEach(element =>{
        //     console.log(element);
        // })
        for (const key in informacion) {
            console.log(key,informacion[key])
        }

        const planeta = data.results;
        console.log(typeof planeta)
        planeta.forEach(element => {
            console.log(element);
        });

    });