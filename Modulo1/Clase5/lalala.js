console.log(document.getElementsByTagName("p"))
console.log(document.getElementsByTagName("h1"))
let lis = document.getElementById("lista")
lis.style.backgroundColor = "red";
lis.style.color ="white";
let para = document.getElementsByTagName("p")
for(i =0;i<para.length;i++){
    para[i].style.color = "blue"
}

window.onload = function (){
    let heading = document.createElement("h3")
    let heading_text = document.createTextNode("Adios Mundo Cruel!")
    heading.appendChild(heading_text)
    document.body.appendChild(heading)
}




