function enviarmensaje(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;


    if(!nombre|| !correo|| !mensaje){
    Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "Something went wrong!"
    });
    }

    else{
        Swal.fire({
        icon: "success",
        title: "Exelente",
        text:"Su mensaje se ha enviado perfectamente :D"
    });
    }
}

