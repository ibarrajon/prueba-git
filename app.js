//evento mouseover y mouseout------------------

// const botonColor=document.getElementById("color");
// const body=document.body;

// let boton = getElementById("boton");

// function cambiarIMG(){
//     document.getElementById("img").src="imagenes/remerablanca.jpg"
// };

// function cambiarIMG2(){
//     document.getElementById("img").src="imagenes/remeraverde.jpg"
// };

//evento onload----------------------------
// window.onload=function(){
//     alert("bienvenido")
// };

// window.onload=function(){
//     boton.addEventListener("click")
// }

// function imagenCargada(){
//     añert("imagen cargada correctamente")
// }

//scroll-----------------------------------
// function handleScroll(){
//     alert("estas desplazando la pagina");
// };

// window.onscroll=handleScroll;


//cambiar color del body
// function cambiarColor(){
//     body.classList.toggle("cambio-color") //classlist agrega una clase al elemento - toggle agrega si no está la clase o la elimina
//     //si lo hago con .add solo lo cambia una vez

//     if (body.classList.contains("cambio-color")){ //verifica si tiene una clase o no
//         botonColor.innerText="Cambiar a light";
//     } else{
//         botonColor.innerText="Cambiar a dark";
//     }
// };

// botonColor.addEventListener("click",cambiarColor)


// //------------------------------
// const elemento = document.getElementById("elemento");

// elemento.classList.add("negro");
// //elemento.classList.remove("negro");
// elemento.classList.toggle("rosado");
// elemento.classList.toggle("rosado");

// //-----------------------------
// //scoope

// let variableGlobal="soy global";

// function ejemplo(){
//     let variableLocal="soy local";
//     var variable1="soy var";
//     let variable2="soy ley";

//     // console.log(variableGlobal)
//     // console.log(variableLocal)

//     if (true){
//         var variable3="soy otra var";
//         let variable4="soy otra let";
//     }

//     console.log(variable1)
//     console.log(variable2)
//     console.log(variable3)
//     console.log(variable4)
// }

// ejemplo();


//---------------validar datos------------------
let form = document.getElementById("form");

form.addEventListener("submit",function(event){

    event.preventDefault(); //evitar que el formulario se envie cuando la pagina se recargue

    //------------obtener loso valores de los campos--------
    let nombre = document.getElementById("nombre").value; //obtiene el valor de lo que coloca el usuario en la caja de texto
    let email = document.getElementById("email").value;

    console.log('nombre:',nombre);
    console.log('email:',email);

    //restablecer el formulario
    form.reset(); //para limiar el formulario
});