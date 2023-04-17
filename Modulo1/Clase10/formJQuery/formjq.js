$(document).ready(function(){
    let etiqueta1 = document.createElement("label");
    let etiqueta2 = document.createElement("label");
    let etiqueta3 = document.createElement("label");
    let etiqueta4 = document.createElement("label");
    etiqueta1.classList.add("mensajeError");
    etiqueta2.classList.add("mensajeError");
    etiqueta3.classList.add("mensajeError");
    etiqueta4.classList.add("mensajeError");
     
    $("#datos").click(function(){
        let nombre = $("#nombre").val();
        let apellido = $("#apellido").val();
        let direccion = $("#direccion").val();
        let email = $("#email").val();
        
        $(etiqueta1).text("Falta completar este campo.");
        $(etiqueta2).text("Falta completar este campo.");
        $(etiqueta3).text("Falta completar este campo.");
        $(etiqueta4).text("Falta completar este campo.");
        console.log(nombre)
        if(nombre == ""){
            $(etiqueta1).insertAfter("#nombre");
        }else{
            $(etiqueta1).remove()
        }

        if(apellido == ""){
            $(etiqueta2).insertAfter("#apellido");
        }else{
            $(etiqueta2).remove()
        }

        if(direccion == ""){
            $(etiqueta3).insertAfter("#direccion");
        }else{
            $(etiqueta3).remove()
        }

        if(email == ""){
            $(etiqueta4).insertAfter("#email");
        }else{
            $(etiqueta4).remove()
        }
        
    })
})