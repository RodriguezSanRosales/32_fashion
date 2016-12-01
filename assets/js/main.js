
$(document).ready(function(){

    $('#mostrar').on("click", function(){
        $('#target').show("slow");
    });

     $('#ocultar').on("click", function(){
        $('#target').hide("fast");
    })
});