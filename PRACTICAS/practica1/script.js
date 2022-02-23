//aqui dentro va javascript
//ojo - cambio de comentarios

//declarar variables
x = 5;
x = "esto se puede";
console.log("Hola desde afuera");
function ejemplo() {
    console.log("Hola a todxs!");
    //alert("Hola a todxs!"); --> alertas de advertencia 
}
function boton2() {
    alert("Boton dos");
}
function boton3() {
    alert("Boton tres");
    //el documento se encuentra jerarquizado en una estructura que se llama
    //DOM  - Document Object Model

    //podemos acceder a un elemento especifico por medio de id
    document.getElementById("parrafito").innerHTML = "<h1>cambie para siempre...</h1>";
}

function cambiarDatoDeInput(){
    ejemplito = document.getElementById("textito").value; 
    alert(ejemplito); 
    document.getElementById("textito").value = "Hola desde JS!";

}