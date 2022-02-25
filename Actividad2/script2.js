// Funnción de javascript que muestra mensaje de los campos de la forma y algo de texto extra 
function muestraMensaje(){
    d1 = document.getElementById("dato1").value;
    d2 = document.getElementById("dato2").value;
    d3 = document.getElementById("dato3").value;

    t1 = "Es cierto, el "; 
    t2 = " tiene cara de "; 
    t3 = " pero parece "; 

//  concatenar datos 
    document.getElementById("mensajito").innerHTML = t1 + d1 + t2 + d2 + t3 + d3; 
   
}
