let usuario = "Carlos";

function saludar(){

    let nombre = document.getElementById("nombre_usuario");

    console.log("Bienvenidos al sistema de Heladeria Theo" , nombre.value)

}

function ingresar(){

    let nombre = document.getElementById("nombre_usuario");
    let mensaje = document.getElementById("mensaje");


    if( nombre.value == usuario){
 
        let parrafo = document.createElement("p");
        mensaje.innerHTML = "";   
        parrafo.innerText = "Bienvenido/a al sistema";
        mensaje.append(parrafo);
     
    }
    else{
        document.body.innerHTML = `<h2>ERROR, NO SE ENCUENTRA REGISTRADO/A, vuelva al menú a registrarse</h2>
                                   <p>El usuario: ${nombre.value} no se encontro en el sistema</p>
                                   `;
    }


}