let formulario = document.getElementById("formulario");
let input = document.querySelectorAll("#formulario input");


let validaciones = {
    nombre: /^[a-z A-Z]+$/, 
    apellido: /^[a-z A-Z]+$/,
    rut: /^[0-9\-]+$/, 
    email: /^[a-z A-Z 0-9 - _ .]+@[a-z A-Z 0-9 - . _]$/,
    telefono: /^[0-9]$/,
}; 

let estabien = {
    nombre:false,
    apellido:false,
    rut:false,
    email:false,
    telefono:false
};

let validarF = (val:any) => {
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
                document.querySelector("#idApellido .msgError").classList.remove("msgErrorActive");
                estabien["apellido"]=true;
            }
            else{
                document.querySelector("#idApellido .msgError").classList.add("msgErrorActive");
            }
            break;
        case "rut":
            if(validaciones.rut.test(val.target.value)) {
                let esrut = false;
                let rutxpartes = val.target.value.split('');
                for (let i=0, rut=rutxpartes; i < rut.length ; i++ ){
                    let x = rut[i];
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
                let esmail = false;
                let mailxpartes = val.target.value.split('');
                for (let i=0, mail=mailxpartes; i < mail.length ; i++ ){
                    let x = mail[i];
                    if (x=="@"){esmail=true; }
                }
                if (esmail) {
                    document.querySelector("#idEmail .msgError").classList.remove("msgErrorActive");
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
                    document.querySelector("#idTelefono .msgError").classList.remove("msgErrorActive");
                    estabien["telefono"]=true;
                 }
                else{
                    document.querySelector("#idTelefono .msgError").classList.add("msgErrorActive");
                }
            }
            break;
    }
};

input.forEach( (input) => {
    input.addEventListener("keyup", validarF);
} 
);

formulario.addEventListener("submit", (val) => {
    val.preventDefault();
    if(estabien.nombre && estabien.apellido && estabien.rut && estabien.telefono && estabien.email) 
    {
        let Python = document.getElementById("python");
        let Java = document.getElementById("java");
        let TypeScript = document.getElementById("ts");
        let PHP = document.getElementById("php");
        let CSh = document.getElementById("csh");
        let CPlus = document.getElementById("cplus");

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



