var formulario = document.getElementById("formulario");
var input = document.querySelectorAll("#formulario input");


var validaciones = {
    nombre= /^[a-z A-Z]+$/, 
    apellido= /^[a-z A-Z]+$/,
    rut= /^[0-9\-]+$/, 
    email= /^[a-z A-Z 0-9 - _ .]+@[a-z A-Z 0-9 - . _]$/,
    telefono= /^[0-9]$/,
}; 

var estabien = {
    nombre:false,
    apellido:false,
    rut:false,
    email:false,
    telefono:false
};

var validarF = function (val) {
    switch (val.target.name) {
        case "nombre": 
            if(validaciones.nombre.test(val.target.value)) {
                document.querySelector("#idNombre .msgError").classList.remove("msgErrorActive");
                estabien["nombre"]=true;
            }
            else{
                document.querySelector("#idNombre .msgError").classList.add("msgErrorActive");
            }
            break;
        case "apellido": 
            if(validaciones.apellido.test(val.target.value)) {
                document.QuerySelector("#idApellido .msgError").classList.remove("msgErrorActive");
                estabien["apellido"]=true;
            }
            else{
                document.querySelector("#idApellido .msgError").classList.add("msgErrorActive");
            }
            break;
        case "rut":
            if(validaciones.rut.test(val.target.value)) {
                var esrut = false;
                var rutxpartes = val.target.value.split('');
                for (var i=0, rut=rutxpartes; i < rut.length ; i++ ){
                    var x = rut[i];
                    if (x=="-"){esrut=true; }
                }
                if (esrut) {
                    document.querySelector("#idRut .msgError").classList.remove("msgErrorActive");
                    estabien["rut"]=true;
                }
                else {
                    document.querySelector("#idRut .msgError").classList.add("msgErrorActive");
                }
            }
            break;
        case "email":
            if(validaciones.email.test(val.target.value)) {
                var esmail = false;
                var mailxpartes = val.target.value.split('');
                for (var i=0, mail=mailxpartes; i < mail.length ; i++ ){
                    var x = mail[i];
                    if (x=="@"){esmail=true; }
                }
                if (esmail) {
                    document.QuerySelector("#idEmail .msgError").classList.remove("msgErrorActive");
                    estabien["email"]=true;
                }
                else {
                    document.querySelector("#idEmail .msgError").classList.add("msgErrorActive");
                }
            }
            break;
        case "telefono": 
             if(validaciones.telefono.test(val.target.value)) {
                 if(val.target.value.length == 9)
                 {
                    document.QuerySelector("#idTelefono .msgError").classList.remove("msgErrorActive");
                    estabien["telefono"]=true;
                 }
                else{
                    document.querySelector("#idTelefono .msgError").classList.add("msgErrorActive");
                }
            }
            break;
    }
};

input.forEach(function (input) {
    input.addEventListener("keyup", validarF);
} 
);

formulario.addEventListener("submit", function (val) {
    val.preventDefault();
    if(estabien.nombre && estabien.apellido && estabien.rut && estabien.telefono && estabien.email) 
    {
        var Python = document.getElementById("python");
        var Java = document.getElementById("java");
        var TypeScript = document.getElementById("ts");
        var PHP = document.getElementById("php");
        var CSh = document.getElementById("csh");
        var CPlus = document.getElementById("cplus");

        if(Python || Java || TypeScript || PHP || CSh || CPlus) 
        {
            if(document.querySelector('input[name="Experiencia"]:checked'))
            {
                document.getElementById("formularioOK").classList.add("formularioMsgOK");
            }
            else 
            {
                document.getElementById("formularioMalo").classList.add("formularioMsgMalo");
            }
        }
    }
    
});

function clean() {
    this.formulario.reset();
}

document.getElementById("clean").addEventListener("click", function() {
    clean();
});



