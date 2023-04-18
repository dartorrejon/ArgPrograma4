$(document).ready(function(){
    $("#achicarImagen").click(function(){
        var anchoImg = $("#nuestraImagen").width();
        if(anchoImg>=500){
            $("#nuestraImagen").width(300);
        }else{
            $("#nuestraImagen").width(1000);
        }
    });

    $("#esconder").click(function(){
        $("#nuestraImagen").hide();
    });

    $("#mostrar").click(function(){
        $("#nuestraImagen").show();
    });

    $("#slide").click(function(){
        $("#nuestraImagen").slideToggle();
    })

   $("#lista_colores").change(function(){
     let opSeleccionada = $(this).find('option:selected');
     let color = opSeleccionada.text();
     $("#color").css("font-weight","bold");
     $("#color").css("font-size","2em");
     switch(color){
        case "Rojo":
                    $("#color").text(color)
                    $("#color").css('color','red');
                    break;
        case "Celeste":
                    $("#color").text(color)
                    $("#color").css('color','lightblue');
                    break;
        case "Azul":
                    $("#color").text(color);
                    $("#color").css('color','blue');
                    break;
        case "Verde":
                    $("#color").text(color);
                    $("#color").css("color","green");
                    break;
        case "Naranja":
                    $("#color").text(color);
                    $("#color").css("color","orange");
                    break;
    }
   })
   
});