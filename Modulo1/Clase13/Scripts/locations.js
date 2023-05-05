fetch("https://rickandmortyapi.com/api/location").then( res => res.json()).then(data => {
    // console.log(data.results);
    const lugares = Object.values(data.results);
    lugares.forEach(element => {
        console.log(element);
    });
});
