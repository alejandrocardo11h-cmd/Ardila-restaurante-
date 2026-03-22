function enviarmensaje(){
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let fecha = document.getElementById("fecha").value;
    let horaInput = document.getElementById("fecha").value;
    let formselect = document.getElementById("fecha").value;
    


    if(!nombre|| !correo|| !fecha || !horaInput || !formselect){
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

